import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/">
          <img
            src="/public/to_let_globe_logo.jpeg"
            alt="to-let-globe"
            width={70}
            height={70}
          />
        </NavLink>
        <ul className="flex space-x-4 gap-10">
          <li>
            <NavLink
              to="/"
              className="text-white p-[0.5rem] mx-0 my-[0.5rem] rounded hover:bg-[#172554]"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className="text-white p-[0.5rem] mx-0 my-[0.5rem] rounded hover:bg-[#172554]"
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="text-white p-[0.5rem] mx-0 my-[0.5rem] rounded hover:bg-[#172554]"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-white p-[0.5rem] mx-0 my-[0.5rem] rounded hover:bg-[#172554]"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-white p-[0.5rem] mx-0 my-[0.5rem] rounded hover:bg-[#172554]"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/property-listing"
              className="text-white p-[0.5rem] mx-0 my-[0.5rem] rounded hover:bg-[#172554]"
            >
              Property Listing
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
