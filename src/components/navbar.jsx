import {ArrowUpRight} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed text-white p-5 top-0 w-full z-1000">
      <div className="nav-content-wrapper flex justify-between items-center p-2 ">
        <div className="logo">Shemrei Marabillo</div>
        <ul className="nav-links gap-14 hidden md:flex"> 
          <li><a href="">Works</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">About</a></li>
          <li><a href="" className="">Contact</a></li>
        </ul>
        <a href="">Let's talk <ArrowUpRight className="w-5 h-5" /></a>
      </div>
    </nav>
  );
};

export default Navbar;
