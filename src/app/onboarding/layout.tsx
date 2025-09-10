"use client";

import { CustomSidebar } from "@/components/sidebars/onboarding/CustomSidebar";
import { Provider } from "react-redux";
import { store } from "@/store";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row">
      <Provider store={store}>
        <div className="w-46 h-full">
          <CustomSidebar />
        </div>

        <main className="w-screen flex items-center overflow-x-hidden">
          {children}
        </main>
      </Provider>
    </div>
  );
}
