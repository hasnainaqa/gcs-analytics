import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import { SidebarProvider } from '@/context/sidebarContext';

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <main className="w-full flex-1 overflow-hidden">
          <Header />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
