// import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
// import AppSidebar from '../app-sidebar';
// import Header from '../shared/header';

// export default function DashboardLayout({
//   children
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <SidebarProvider>
//       <AppSidebar />
//       <SidebarInset>
//         <Header />
//         {children}
//       </SidebarInset>
//     </SidebarProvider>
//   );
// }
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset
} from '@/components/ui/sidebar';
import AppSidebar from '../app-sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarTrigger />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
