import aboutImage from '../assets/AboutSvg.bb0d8388.svg';

function About() {
  return (
    <div id="#about" className="mx-[20%] mt-[20%]">
      <h2 className="font-bold text-6xl text-aquamarine">Who am I?</h2>
      <div className="flex items-center pr-[15%]">
        <p className="text-ivory font-light text-xl pl-10">
          As I said before, nice to meet you! I'm Lucas and I'm so glad to have
          you here. <br />
          I'm a Computer Science student and a currently Dynamics 365 funcional
          analyst. I've learned both web development and English by myself, and
          now I feel it's the time to put it in practice. Hope I can work with
          you and use my knowledge to help you.
        </p>
        <img src={aboutImage} className="w-[450px]" alt="" />
      </div>
    </div>
  );
}

export default About;
