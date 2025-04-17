import { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
  children?: ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen  flex flex-col overflow-x-hidden">
      <header className="sticky w-full top-0 z-50">
        <Header />
      </header>
      <main className="w-full h-full ">{children}</main>
    </div>
  );
};

export default Layout;
