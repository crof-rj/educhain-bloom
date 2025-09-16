import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { 
  LayoutDashboard, 
  School, 
  CheckCircle, 
  DollarSign, 
  BarChart3, 
  Settings,
  GraduationCap,
  FileText,
  TrendingUp,
  Users,
  Home
} from 'lucide-react';

const foundationItems = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Schools', url: '/schools', icon: School },
  { title: 'Approvals', url: '/approvals', icon: CheckCircle },
  { title: 'Distributions', url: '/distributions', icon: DollarSign },
  { title: 'Analytics', url: '/analytics', icon: BarChart3 },
  { title: 'Settings', url: '/settings', icon: Settings },
];

const schoolItems = [
  { title: 'Dashboard', url: '/dashboard', icon: Home },
  { title: 'My School', url: '/school-profile', icon: School },
  { title: 'Metrics', url: '/metrics', icon: TrendingUp },
  { title: 'Resources', url: '/resources', icon: DollarSign },
  { title: 'Teachers', url: '/teachers', icon: Users },
  { title: 'Reports', url: '/reports', icon: FileText },
];

export function AppSidebar() {
  const { state: authState } = useAuth();
  const { state: sidebarState } = useSidebar();
  const collapsed = sidebarState === 'collapsed';
  const location = useLocation();
  
  if (!authState.user) return null;

  const items = authState.user.role === 'foundation_manager' ? foundationItems : schoolItems;
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'bg-primary/10 text-primary font-medium border-r-2 border-primary' : 'hover:bg-muted/50 transition-smooth';

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-gradient-surface border-r border-border/50">
        
        {/* Logo Section */}
        <div className="p-4 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg flex-shrink-0">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-lg font-bold educhain-brand">EduChain</h1>
                <p className="text-xs text-muted-foreground">Foundation</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? 'sr-only' : ''}>
            {authState.user.role === 'foundation_manager' ? 'Foundation Management' : 'School Management'}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Status Badge */}
        {!collapsed && (
          <div className="p-4 mt-auto">
            <div className="bg-success/10 border border-success/20 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-2 w-2 bg-success rounded-full animate-pulse" />
                <span className="text-xs font-medium text-success">System Online</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Stellar Blockchain connected
              </p>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}