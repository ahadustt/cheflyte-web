'use client';

import React, { useState, useEffect } from 'react';
import { Card } from './card';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Activity, 
  Clock,
  ChefHat,
  Calendar,
  Star,
  Eye,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  PieChart,
  LineChart,
  Filter,
  Download,
  RefreshCw
} from 'lucide-react';

// Metric Card Component
interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive: boolean;
    period: string;
  };
  icon?: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  loading?: boolean;
  className?: string;
}

export function MetricCard({ 
  title, 
  value, 
  change, 
  icon, 
  variant = 'default', 
  loading = false,
  className 
}: MetricCardProps) {
  // Map variants to semantic CSS variable-based gradient classes
  const variantStyles = {
    default: 'from-[var(--color-surface-secondary)] to-[var(--color-surface-primary)]',
    primary: 'from-[var(--color-gradient-from)] to-[var(--color-gradient-to)]',
    success: 'from-green-50 to-green-100 dark:from-green-900/50 dark:to-green-800/50', // TODO: add semantic tokens for success
    warning: 'from-yellow-50 to-yellow-100 dark:from-yellow-900/50 dark:to-yellow-800/50', // TODO: add semantic tokens for warning
    danger: 'from-red-50 to-red-100 dark:from-red-900/50 dark:to-red-800/50' // TODO: add semantic tokens for danger
  };

  const iconStyles = {
    default: 'text-[var(--color-text-muted)]',
    primary: 'text-[var(--color-link)]',
    success: 'text-green-600 dark:text-green-400', // TODO: add semantic tokens for success
    warning: 'text-yellow-600 dark:text-yellow-400', // TODO: add semantic tokens for warning
    danger: 'text-red-600 dark:text-red-400' // TODO: add semantic tokens for danger
  };

  if (loading) {
    return (
      <Card className={cn('p-6 bg-gradient-to-br', variantStyles[variant], className)}>
        <div className="animate-pulse space-y-4">
          <div className="flex items-center justify-between">
            <div className="h-4 bg-[var(--color-surface-hover)] rounded w-1/3"></div>
            <div className="h-8 w-8 bg-[var(--color-surface-hover)] rounded-lg"></div>
          </div>
          <div className="h-8 bg-[var(--color-surface-hover)] rounded w-1/2"></div>
          <div className="h-4 bg-[var(--color-surface-hover)] rounded w-2/3"></div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn(
      'p-6 bg-gradient-to-br transition-all duration-200 hover:shadow-lg hover:scale-[1.02] border-0',
      variantStyles[variant],
      className
    )}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wide">
          {title}
        </h3>
        {icon && (
          <div className={cn('p-2 rounded-lg bg-[var(--color-surface-primary)]/50', iconStyles[variant])}>
            {icon}
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <p className="text-3xl font-bold text-[var(--color-text-primary)] font-display">
          {value}
        </p>
        
        {change && (
          <div className="flex items-center gap-2">
            {change.isPositive ? (
              <ArrowUpRight className="h-4 w-4 text-[var(--color-success)]" />
            ) : (
              <ArrowDownRight className="h-4 w-4 text-[var(--color-destructive)]" />
            )}
            <span className={cn(
              'text-sm font-medium',
              change.isPositive ? 'text-[var(--color-success)]' : 'text-[var(--color-destructive)]'
            )}>
              {change.isPositive ? '+' : ''}{change.value}%
            </span>
            <span className="text-sm text-[var(--color-text-muted)]">
              vs {change.period}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
}

// Chart Container Component
interface ChartContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  loading?: boolean;
  className?: string;
}

export function ChartContainer({ 
  title, 
  description, 
  children, 
  actions,
  loading = false,
  className 
}: ChartContainerProps) {
  if (loading) {
    return (
      <Card className={cn('p-6', className)}>
        <div className="animate-pulse space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-6 bg-[var(--color-surface-hover)] rounded w-32"></div>
              <div className="h-4 bg-[var(--color-surface-hover)] rounded w-48"></div>
            </div>
            <div className="h-8 w-24 bg-[var(--color-surface-hover)] rounded"></div>
          </div>
          <div className="h-64 bg-[var(--color-surface-hover)] rounded"></div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn('p-6', className)}>
      <div className="flex items-start justify-between mb-6">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)] font-display">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-[var(--color-text-muted)]">
              {description}
            </p>
          )}
        </div>
        {actions}
      </div>
      {children}
    </Card>
  );
}

// Simple Bar Chart Component
interface BarChartProps {
  data: Array<{ label: string; value: number; color?: string }>;
  height?: number;
  className?: string;
}

export function BarChart({ data, height = 200, className }: BarChartProps) {
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <div className={cn('space-y-4', className)}>
      <div 
        className="flex items-end justify-between gap-2"
        style={{ height: `${height}px` }}
      >
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2">
            <div 
              className={cn(
                'w-full rounded-t-lg transition-all duration-500 ease-out',
                item.color
                  ? item.color // allow override
                  : 'bg-[var(--color-primary)]' // use semantic variable
              )}
              style={{ 
                height: `${(item.value / maxValue) * 100}%`,
                minHeight: '4px'
              }}
            />
            <span className="text-xs text-[var(--color-text-muted)] text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between text-xs text-[var(--color-text-muted)]">
        <span>0</span>
        <span>{maxValue}</span>
      </div>
    </div>
  );
}

// Activity Feed Component
interface ActivityItem {
  id: string;
  user: string;
  action: string;
  target?: string;
  timestamp: string;
  avatar?: string;
  type: 'booking' | 'chef' | 'payment' | 'review' | 'system';
}

interface ActivityFeedProps {
  items: ActivityItem[];
  loading?: boolean;
  className?: string;
}

export function ActivityFeed({ items, loading = false, className }: ActivityFeedProps) {
  const getActivityIcon = (type: ActivityItem['type']) => {
    switch (type) {
      case 'booking':
        return <Calendar className="h-4 w-4" />;
      case 'chef':
        return <ChefHat className="h-4 w-4" />;
      case 'payment':
        return <DollarSign className="h-4 w-4" />;
      case 'review':
        return <Star className="h-4 w-4" />;
      case 'system':
        return <Activity className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  const getActivityColor = (type: ActivityItem['type']) => {
    switch (type) {
      case 'booking':
        return 'text-[var(--color-info)] bg-[var(--color-info-bg)]'; // TODO: define --color-info, --color-info-bg in globals.css
      case 'chef':
        return 'text-[var(--color-accent)] bg-[var(--color-accent-bg)]'; // TODO: define --color-accent, --color-accent-bg
      case 'payment':
        return 'text-[var(--color-success)] bg-[var(--color-success-bg)]'; // TODO: define --color-success, --color-success-bg
      case 'review':
        return 'text-[var(--color-warning)] bg-[var(--color-warning-bg)]'; // TODO: define --color-warning, --color-warning-bg
      case 'system':
        return 'text-[var(--color-muted)] bg-[var(--color-surface-hover)]';
      default:
        return 'text-[var(--color-muted)] bg-[var(--color-surface-hover)]';
    }
  };

  if (loading) {
    return (
      <Card className={cn('p-6', className)}>
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="h-8 w-8 bg-[var(--color-surface-hover)] rounded-full"></div>
              <div className="space-y-2 flex-1">
                <div className="h-4 bg-[var(--color-surface-hover)] rounded w-3/4"></div>
                <div className="h-3 bg-[var(--color-surface-hover)] rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn('p-6', className)}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] font-display">
          Recent Activity
        </h3>
        <Button variant="ghost" size="sm">
          <Eye className="h-4 w-4 mr-2" />
          View All
        </Button>
      </div>
      
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-start gap-4">
            <div className={cn(
              'flex items-center justify-center h-8 w-8 rounded-full',
              getActivityColor(item.type)
            )}>
              {getActivityIcon(item.type)}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm text-[var(--color-text-primary)]">
                <span className="font-medium">{item.user}</span> {item.action}
                {item.target && (
                  <span className="font-medium"> {item.target}</span>
                )}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">
                {item.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// Dashboard Grid Component
interface DashboardGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function DashboardGrid({ 
  children, 
  columns = 3, 
  gap = 'md',
  className 
}: DashboardGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 lg:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const gridGap = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  };

  return (
    <div className={cn(
      'grid',
      gridCols[columns],
      gridGap[gap],
      'bg-[var(--color-surface-primary)]', // semantic background
      className
    )}>
      {children}
    </div>
  );
}

// Quick Stats Component
interface QuickStatsProps {
  stats: Array<{
    label: string;
    value: string | number;
    icon?: React.ReactNode;
    color?: 'primary' | 'success' | 'warning' | 'danger';
  }>;
  loading?: boolean;
  className?: string;
}

export function QuickStats({ stats, loading = false, className }: QuickStatsProps) {
  if (loading) {
    return (
      <Card className={cn('p-6', className)}>
        <div className="animate-pulse">
          <div className="h-6 bg-[var(--color-surface-hover)] rounded w-32 mb-4"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="h-8 w-8 bg-[var(--color-surface-hover)] rounded-full mx-auto"></div>
                <div className="h-6 bg-[var(--color-surface-hover)] rounded"></div>
                <div className="h-4 bg-[var(--color-surface-hover)] rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn('p-6', className)}>
      <h3 className="text-lg font-semibold text-[var(--color-text-primary)] font-display mb-6">
        Quick Stats
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            {stat.icon && (
              <div className={cn(
                'inline-flex items-center justify-center h-12 w-12 rounded-full mb-3',
                stat.color === 'primary' && 'bg-[var(--color-surface-secondary)] text-[var(--color-link)]',
                stat.color === 'success' && 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400', // TODO: add semantic tokens for success
                stat.color === 'warning' && 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400', // TODO: add semantic tokens for warning
                stat.color === 'danger' && 'bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400', // TODO: add semantic tokens for danger
                !stat.color && 'bg-[var(--color-surface-hover)] text-[var(--color-text-muted)]'
              )}>
                {stat.icon}
              </div>
            )}
            <p className="text-2xl font-bold text-[var(--color-text-primary)] font-display">
              {stat.value}
            </p>
            <p className="text-sm text-[var(--color-text-muted)] mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

// Dashboard Header Component
interface DashboardHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  className?: string;
}

export function DashboardHeader({ 
  title, 
  description, 
  actions, 
  breadcrumbs,
  className 
}: DashboardHeaderProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {breadcrumbs && (
        <nav className="flex items-center space-x-2 text-sm text-[var(--color-text-muted)]">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="text-[var(--color-border-primary)]">/</span>}
              {crumb.href ? (
                <a href={crumb.href} className="hover:text-[var(--color-link)]">
                  {crumb.label}
                </a>
              ) : (
                <span className="text-[var(--color-text-primary)] font-medium">
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>
      )}
      
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] font-display">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-[var(--color-text-muted)]">
              {description}
            </p>
          )}
        </div>
        {actions && (
          <div className="flex items-center gap-3">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}

// Data Table Component
interface DataTableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: DataTableColumn[];
  data: any[];
  loading?: boolean;
  emptyMessage?: string;
  className?: string;
}

export function DataTable({ 
  columns, 
  data, 
  loading = false, 
  emptyMessage = "No data available",
  className 
}: DataTableProps) {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const handleSort = (key: string) => {
    setSortConfig(current => {
      if (current?.key === key) {
        return {
          key,
          direction: current.direction === 'asc' ? 'desc' : 'asc'
        };
      }
      return { key, direction: 'asc' };
    });
  };

  if (loading) {
    return (
      <Card className={cn('overflow-hidden', className)}>
        <div className="animate-pulse">
          <div className="px-6 py-4 border-b border-[var(--color-border-primary)]">
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-4 bg-[var(--color-surface-hover)] rounded"></div>
              ))}
            </div>
          </div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="px-6 py-4 border-b border-[var(--color-border-primary)]">
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, j) => (
                  <div key={j} className="h-4 bg-[var(--color-surface-hover)] rounded"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn('overflow-hidden', className)}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[var(--color-surface-secondary)]">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={cn(
                    'px-6 py-3 text-left text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider',
                    column.sortable && 'cursor-pointer hover:text-[var(--color-text-primary)]'
                  )}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center gap-2">
                    {column.label}
                    {column.sortable && sortConfig?.key === column.key && (
                      <TrendingUp className={cn(
                        'h-4 w-4 transition-transform',
                        sortConfig.direction === 'desc' && 'rotate-180'
                      )} />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-[var(--color-surface-primary)] divide-y divide-[var(--color-border-primary)]">
            {sortedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-6 py-12 text-center">
                  <div className="text-[var(--color-text-muted)]">
                    <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>{emptyMessage}</p>
                  </div>
                </td>
              </tr>
            ) : (
              sortedData.map((row, rowIndex) => (
                <tr 
                  key={rowIndex}
                  className="hover:bg-[var(--color-surface-hover)] transition-colors"
                >
                  {columns.map((column) => (
                    <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-[var(--color-text-primary)]">
                      {column.render 
                        ? column.render(row[column.key], row)
                        : row[column.key]
                      }
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
} 