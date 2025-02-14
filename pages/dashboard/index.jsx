import { getSession } from 'next-auth/react';
import Dashboard from './components/Dashboard';

export default function DashboardPage({ session }) {
  return <Dashboard session={session} />;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
