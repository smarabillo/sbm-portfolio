const Links = () => {
  return (
    <ul className="hidden md:flex gap-9 font-semibold text-5xl tracking-normal items-center animate-delay-800">
      <li>
        <a href="https://www.linkedin.com/in/sbm-dev/" target="_blank">
          <i className="fa-brands fa-linkedin-in hover:animate-wiggle-more transition ease-in-out duration-300"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/smarabillo" target="_blank">
          <i class="fa-brands fa-github-alt hover:animate-wiggle-more transition ease-in-out duration-300"></i>
        </a>
      </li>
      <li>
        <a href="https://dribbble.com/sbmdev" target="_blank">
          <i class="fa-brands fa-dribbble hover:animate-wiggle-more transition ease-in-out duration-300"></i>
        </a>
      </li>
      <li>
        <a href="/assets/docs/sbm.+ - branding.pdf" target="_blank">
          <i class="fa-solid fa-link hover:animate-wiggle-more transition ease-in-out duration-300"></i>
        </a>
      </li>
    </ul>
  );
};

export default Links;
