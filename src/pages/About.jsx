import Coding from "../assets/Programmer.png"
import resume from '../assets/resume.pdf';

const About = () => {
  return (

    <section id="about" classNameName='flex pt-4 md:px-8'>
      <div className='h-4 sm:h-8'></div>
      {/* ______ About content ______ */}
      <div className="about-gradient flex flex-col md:flex-row items-center justify-between text-white rounded-2xl px-6 py-4 md:px-8 sm:max-w-6xl mx-auto shadow-lg">
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Imroz Ansari</h2>
          <p className="text-base md:text-sm leading-relaxed mb-6">
            Motivated and detail-oriented Computer Science student with hands-on experience in frontend
            development, React.js, and API integrations. Passionate about building responsive and user-friendly web
            applications using modern technologies like Tailwind CSS and JavaScript. Eager to contribute my skills to
            a dynamic team and continue growing in the software development field.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full transition duration-300">
            <a
              href={resume}
              download
            >
              Download Resume
            </a>
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
          <img src={Coding} alt="Developer at desk" className="w-60 max-w-full" />
        </div>
      </div>
    </section>

  )
}

export default About