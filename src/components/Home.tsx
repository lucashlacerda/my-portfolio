const Home = () => {
  return (
    <header
      className="flex flex-col w-full justify-between h-auto pt-10"
      id="home"
    >
      <nav className="nav text-neutral-100 text-lg flex justify-around font-medium mx-[39%] ">
        <a
          href="#home"
          className="hover:underline decoration-aquamarine decoration-4"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:underline decoration-aquamarine decoration-4"
        >
          About
        </a>
        <a
          href="#"
          className="hover:underline decoration-aquamarine decoration-4"
        >
          Skills
        </a>
        <a
          href="#"
          className="hover:underline decoration-aquamarine decoration-4"
        >
          Projects
        </a>
        <a
          href="#"
          className="hover:underline decoration-aquamarine decoration-4"
        >
          Resume
        </a>
        <a
          href="#"
          className="hover:underline decoration-aquamarine decoration-4"
        >
          Contact
        </a>
      </nav>
      <section className="text-ivory font-bold text-7xl pl-12 pt-[14%]">
        Hi, I'm <span className="text-aquamarine">Lucas</span>!
        <br />I make stuff for the web.
      </section>
    </header>
  );
};

export default Home;
