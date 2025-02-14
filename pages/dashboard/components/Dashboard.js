import PageContainer from '@/components/layout/page-container';
import DashboardLayout from '@/components/layout/dashboard-layot';
import FetchGSCData from './FetchGSCData';
import GSCButton from './KeywordChart';

export default function Dashboard({ session }) {


  return (
    <DashboardLayout>
      <PageContainer scrollable={true}>
        <div className="space-y-4">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Hi, Welcome back 👋</h2>
          </div>

          {/* User Information Section */}
          <div className="text-center mt-8">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <p>Welcome, {session.user.name}!</p>
          </div>

          {/* Search Console Data Section */}
          <FetchGSCData session={session} />

          {/* Charts Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <GSCButton  />
          </div>
        </div>
      </PageContainer>
    </DashboardLayout>
  );
}
