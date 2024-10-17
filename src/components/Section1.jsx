import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EarPhone from '../assets/EarPhone.svg';
import Location from '../assets/Location.svg';
import { Carousel } from 'flowbite-react';
import Projects from './Projects';

import CustomButton from './CustomButton';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section
      className="bg-transparent px-10 py-10 mb-[340px]"
      id="features"
      ref={ref}
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
          Experience
        </h2>

        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <Projects></Projects>
        </motion.div>

        <div className="flex justify-center mt-10">
          <CustomButton text="Testimonials" link="testimonials" />
        </div>
      </div>
    </section>
  );
};

export default Features;
