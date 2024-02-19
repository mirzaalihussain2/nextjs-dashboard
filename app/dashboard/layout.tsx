import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md: flex h-screen flex-col overflow-hidden md:flex-row">
      <div className="md: w-64 w-full flex-none">
        <SideNav />
      </div>
      <div className="md: flex-grow p-12 p-6 md:overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
