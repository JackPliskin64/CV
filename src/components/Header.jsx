import { motion } from 'framer-motion';
import CustomButton from './CustomButton';

const Header = () => {
  return (
    <div className="bg-transparent" id="home">
      <div className="flex flex-col items-center bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md px-10 py-16 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="ethan.webp"
            alt="me"
            className="rounded-md transition-transform duration-300 hover:shadow-lg hover:shadow-emerald-800 hover:scale-105 " // Añade ambos efectos aquí
          />
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-4xl lg:text-6xl font-bold text-white mb-6 mt-24 text-center"
        >
          Welcome to my CV
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-white mb-10 text-center"
        >
          Follow the white rabbit...
        </motion.p>
        <div className="flex justify-center">
          <CustomButton text="Take the pill" link="features" />
        </div>
      </div>
    </div>
  );
};

export default Header;
