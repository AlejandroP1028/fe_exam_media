"use client";
import PageTransition from "@/components/custom/TransitionWrapper";
import { CustomSidebar } from "@/components/sidebars/ScoupSidebar";
import { Provider } from "react-redux";
import { store } from "@/store";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <Provider store={store}>
        <div className="w-46 h-full">
          <CustomSidebar />
        </div>

        <main className=" w-screen flex items-center ">{children}</main>
      </Provider>
    </div>
  );
}
