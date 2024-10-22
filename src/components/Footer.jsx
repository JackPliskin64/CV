import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="text-white bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md">
      <hr className="my-8 border-gray-800" />
      <div className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-500">Navigate</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link
                  to="home"
                  className="hover:text-green-500 cursor-pointer"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Welcome
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="features"
                  className="hover:text-green-500 cursor-pointer"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Experience
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="projects"
                  className="hover:text-green-500 cursor-pointer"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Projects
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="skills"
                  className="hover:text-green-500 cursor-pointer"
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Skills
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-green-500">
              Useful links
            </h2>

            <div className="flex items-center mt-4 gap-2">
              <a
                href="https://www.linkedin.com/in/ethan-carranza-serrano-a6063b1b5/"
                className="mr-4 text-gray-400 hover:text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  className="transition-transform duration-300 hover:scale-110"
                  size={24}
                />
              </a>
              <a
                href="https://github.com/JackPliskin64"
                className="mr-4 text-gray-400 hover:text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="transition-transform duration-300 hover:scale-110"
                  size={24}
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-green-500">
              Contact Me
            </h3>
            <p className="text-gray-400 mb-2 gap-2 flex items-center">
              <a
                href="https://api.whatsapp.com/send/?phone=722563014"
                className="ml-2 text-gray-400 hover:text-green-500 inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  className="transition-transform duration-300 hover:scale-110"
                  size={28}
                />
              </a>
              <a
                href="mailto:ethan.carranza@outlook.es"
                className="ml-2 text-gray-400 hover:text-green-500 inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosMail
                  className="transition-transform duration-300 hover:scale-110"
                  size={28}
                />
              </a>
            </p>
          </div>
        </div>
        <hr className="my-8 border-gray-800" />
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Ethan Carranza Serrano
        </p>
      </div>
    </footer>
  );
};

export default Footer;
