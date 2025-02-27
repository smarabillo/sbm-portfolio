const Footer = () => {
  return (
    <footer className="footer bg-white p-4">
      <div className="container flex md:flex-row flex-col mx-auto p-4 items-center justify-between gap-4">
        <p className="text-sm text-gray-500 tracking-normal font-normal flex items-center gap-1.5">
          © {new Date().getFullYear()} Shemrei Marabillo, Developed with{" "}
          <a href="https://react.dev/">
            <i className="fa-brands fa-react text-blue-400 text-xl animate-spin animate-duration-3000"></i>
          </a>
        </p>
        <ul className="flex items-center text-sm text-gray-500 gap-6">
          <li>
            <a href="">Instagram</a>
          </li>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>  
            <a href="/assets/docs/resume.pdf" target="_blank">CV</a>
          </li>
          <div className="hidden md:flex items-center gap-2 justify-center py-1 px-3 rounded-full bg-green-100">
            <div className="circle w-3 h-3 bg-green-600 rounded-full flex items-center justify-center animate-pulse"></div>
            <p className="text-sm font-medium text-green-700">open for work.</p>
          </div>
        </ul>
        <div className="md:hidden status flex items-center gap-2 justify-center py-1 px-3 rounded-full bg-green-100">
          <div className="circle w-3 h-3 bg-green-600 rounded-full flex items-center justify-center animate-pulse"></div>
          <p className="text-sm font-medium text-green-700">open for work.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
