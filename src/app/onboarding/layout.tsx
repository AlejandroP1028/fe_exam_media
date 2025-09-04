import { CustomSidebar } from "@/components/sidebars/OnboardingSidebar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomSidebar />
      <main>{children}</main>
    </>
  );
}
