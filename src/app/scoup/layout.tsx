"use client";

import { CustomSidebar } from "@/components/sidebars/ScoupSidebar";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div className="flex  sm:flex-row  min-h-screen  ">
        {/* Sidebar */}
        <aside className="w-46 h-fit sm:h-full flex-shrink-0">
          <CustomSidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 w-full sm:w-auto flex flex-col">
          {children}
        </main>
      </div>
    </Provider>
  );
}
