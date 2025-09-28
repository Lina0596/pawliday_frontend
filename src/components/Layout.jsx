import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <main
        className="py-20 px-4 bg-[#FFFDF3] min-h-screen
        sm:px-10
        md:px-20
        lg:px-40
        xl:px-45"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
