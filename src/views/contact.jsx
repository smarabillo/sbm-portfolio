import Links from "../components/links";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-full bg-[#f4f4f4]  flex flex-col items-center text-center justify-center py-24"
    >
      <div className="container mx-auto flex flex-col justify-center items-center gap-6">
        <h2 className="md:text-7xl text-5xl p-5 font-semibold tracking-tighter bg-gradient-to-r from-[#0029de] via-blue-500 to-blue-400  bg-clip-text text-transparent text-center pb-14 md:w-2/3 ">
          Let's Collaborate!{" "}
          <span className="text-black">and make your dream site.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-4 p-4">
          <div className="flex flex-col items-start justify-between gap-32 md:p-14 p-10 bg-gradient-to-r from-[#0029de] to-blue-600 text-white md:rounded-4xl rounded-3xl">
            <h1 className="md:text-4xl text-3xl font-medium text-left tracking-tight leading-tighter text-white">
              Feel free to reach out for collaborations, opportunities, or just
              to say hi. Drop me a message anytime!{" "}
              <span className="inline-block animate-wiggle-more animate-infinite">
                &#128075;
              </span>
            </h1>
            <a
              href="mailto:smarabillo.dev@gmailcom"
              className="relative flex items-center gap-2 self-start font-normal text-xl tracking-tight text-white group"
            >
              send an email
              <i className="fa-solid fa-arrow-right text-[14px] rounded-full bg-transparent text-white"></i>
              {/* The underline effect */}
              <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="grid grid-rows-2 gap-4">
            <div className="card md:rounded-4xl rounded-3xl flex justify-center items-center">
              <ul className="grid grid-cols-5 gap-4 ">
                <li>
                  <img
                    srcSet="/assets/svgs/svg-react.svg"
                    className="w-14"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    srcSet="/assets/svgs/svg-tailwind.svg"
                    className="w-14"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    srcSet="/assets/svgs/svg-bootstrap.svg"
                    className="w-14"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    srcSet="/assets/svgs/svg-html.svg"
                    className="w-14"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    srcSet="/assets/svgs/svg-css.svg"
                    className="w-14"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    srcSet="/assets/svgs/svg-javascript.svg"
                    className="w-14"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    srcSet="/assets/svgs/svg-figma.svg"
                    className="w-14"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    srcSet="/assets/svgs/img-webflow.jpeg"
                    className="w-14 rounded-xl"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    srcSet="/assets/svgs/svg-mysql.svg"
                    className="w-14 rounded-xl"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    srcSet="/assets/svgs/svg-php.svg"
                    className="w-14 rounded-xl"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div className="card p-8 pb-0 md:flex flex flex-col items-center justify-center gap-20 relative md:rounded-4xl rounded-3xl h-full transition ease-in-out duration-300 cursor-pointer elevate">
              <div className="flex items-center justify-around gap-4  md:flex-row sm:flex-col flex-col self-start w-full">
                <div className="group ">
                  <h1 className="text-2xl tracking-tight font-semibold flex items-center text-left pb-2 gap-1">
                    About me <a href=""></a>
                  </h1>
                  <p className="text-left">
                    Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Accusamus fugiat consequuntur cum totam
                    distinctio rerum. Nesciunt incidunt dolor excepturi animi.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Adipisci, dicta!
                  </p>
                </div>

                <img
                  src="/assets/img/sbm-memoji.png"
                  alt=""
                  srcset=""
                  className="md:w-54 sm:w-44 w-36"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
