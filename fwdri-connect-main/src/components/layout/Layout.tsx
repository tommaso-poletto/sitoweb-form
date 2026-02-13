import { NavbarV2 } from "./NavbarV2";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarV2 />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};