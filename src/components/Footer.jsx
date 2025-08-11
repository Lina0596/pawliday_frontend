import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex items-center justify-between h-16 bg-black text-white font-medium px-4 xl:px-45 lg:px-40 md:px-20 sm:px-10">
      <p>© 2025 pawliday</p>
      <div className="flex gap-4">
        <p>Lina Dahlhaus</p>
        <p>|</p>
        <Link to="https://www.linkedin.com/in/lina-dahlhaus/" target="_blank">
          LinkedIn
        </Link>
        <Link to="https://github.com/Lina0596" target="_blank">
          GitHub
        </Link>
      </div>
    </div>
  );
}
