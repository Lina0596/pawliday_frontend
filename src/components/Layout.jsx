import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <main className="bg-[#FFFDF3] py-12 px-70 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
