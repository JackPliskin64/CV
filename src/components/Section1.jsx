import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Experience from './Experience';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="bg-transparent px-10 pt-10]" id="features" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-10">
          EXPERIENCE
        </h2>
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <Experience></Experience>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
