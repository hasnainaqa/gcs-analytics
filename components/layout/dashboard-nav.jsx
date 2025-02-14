import Link from 'next/link';
import React, { useContext } from 'react';
import Router from 'next/router';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { SidebarContext } from '@/context/sidebarContext';

export function DashboardNav({ items, setOpen, isMobileNav = false }) {
  const path = usePathname();
  const { isMinimized } = useContext(SidebarContext);

  if (!items?.length) {
    return null;
  }

  console.log('isActive', isMobileNav, isMinimized);

  return (
    <nav className="grid items-start gap-2">
      <TooltipProvider>
        {items.map((item, index) => {
          const Icon = Icons[item.icon || 'arrowRight'];
          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                {item.href ? (
                  <Link
                    href={item.disabled ? '/' : item.href}
                    className={cn(
                      'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                      path === item.href ? 'bg-accent' : 'transparent',
                      item.disabled && 'cursor-not-allowed opacity-80'
                    )}
                    onClick={() => {
                      if (setOpen) setOpen(false);
                    }}
                  >
                    <Icon className={`ml-3 size-5 flex-none`} />

                    {isMobileNav || (!isMinimized && !isMobileNav) ? <span className="mr-2 truncate">{item.title}</span> : ''}
                  </Link>
                ) : (
                  <button
                    className={cn(
                      'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                      path === item.href ? 'bg-accent' : 'transparent',
                      item.disabled && 'cursor-not-allowed opacity-80'
                    )}
                    onClick={() => {
                      item.handleClick(signOut);
                      Router.push('/');
                    }}
                  >
                    <Icon className={`ml-3 size-5 flex-none`} />

                    {isMobileNav || (!isMinimized && !isMobileNav) ? <span className="mr-2 truncate">{item.title}</span> : ''}
                  </button>
                )}
              </TooltipTrigger>
              <TooltipContent align="center" side="right" sideOffset={8} className={!isMinimized ? 'hidden' : 'inline-block'}>
                {item.title}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </TooltipProvider>
    </nav>
  );
}
