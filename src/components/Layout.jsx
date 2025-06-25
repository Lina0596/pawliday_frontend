import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <main className="py-20 px-45 bg-[#FFFDF3] min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
