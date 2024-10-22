import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Khajiit Has Wares',
      img: 'khajiitHasWares.webp',
      link: 'https://khajiithaswares.netlify.app',
    },
    {
      id: 2,
      name: 'The Elder Scrolls FanGame',
      img: 'esoFanGame.webp',
      link: 'https://tes-roleplay-game.netlify.app',
    },
    {
      id: 3,
      name: 'Roskland 2D',
      img: 'roskland2D.webp',
      link: 'https://play.unity.com/en/games/a89c24fe-fd80-4b89-8978-38abcd450063/roskland-2d',
    },
  ];

  const skills = [
    {
      id: 1,
      name: 'HTML5',
      img: 'html5.webp',
      link: 'https://en.wikipedia.org/wiki/HTML5',
    },
    {
      id: 2,
      name: 'CSS3',
      img: 'css3.svg',
      link: 'https://en.wikipedia.org/wiki/CSS',
    },
    {
      id: 3,
      name: 'JavaScript',
      img: 'javascript.svg',
      link: 'https://en.wikipedia.org/wiki/JavaScript',
    },
  ];

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      const { top } = projectsSection.getBoundingClientRect();
      const isVisible = top < window.innerHeight - 100;

      if (isVisible) {
        controls.start({ opacity: 1, scale: 1 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <>
      <section
        className="bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md px-10 py-16 mb-[300px]"
        id="projects"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
            PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((projects) => (
              <motion.div
                key={projects.id}
                className="bg-white bg-opacity-10 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={controls}
                transition={{ duration: 0.8 }}
              >
                <a href={projects.link} target="_blank" rel="noreferrer">
                  <img
                    src={projects.img}
                    alt={projects.name}
                    className="w-full h-56 object-cover rounded-md transition-transform duration-300 hover:shadow-lg hover:shadow-emerald-800 hover:scale-105"
                  />
                </a>
                <p className="text-white text-center my-4 font-bold">
                  {projects.name}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-12 text-xl text-white font-bold mb-8">
            More to come...
          </p>
        </div>
      </section>
      <section
        className="bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md px-10 py-16 mb-[300px]"
        id="skills"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
            SKILLS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {skills.map((skills) => (
              <motion.div
                key={skills.id}
                className=""
                initial={{ opacity: 0, scale: 0.9 }}
                animate={controls}
                transition={{ duration: 0.8 }}
              >
                <a href={skills.link} target="_blank" rel="noreferrer">
                  <img
                    src={skills.img}
                    alt={skills.name}
                    className="w-24 h-24 object-cover rounded-md transition-transform duration-300 hover:scale-110 mx-auto"
                  />
                </a>
                <p className="text-white text-center my-4 font-bold">
                  {skills.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
