import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper} from '../hoc'
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am an ML developer, computer vision enthusiast, and full-stack developer currently pursuing a major in <b>Computer Engineering</b>. I am interning as a research intern at <b>MIT</b>, <b>CMU</b> and <b>VJTI</b>. I am an upcoming Software Developer Intern at <b>Myntra</b>. Previously, I worked as an SDE and ML developer at a startup, where I gained diverse experience in both software development and machine learning. I am passionate about leveraging cutting-edge AI technologies to solve real-world problems, with a strong focus on creating impactful, scalable solutions.
      </motion.p>
      

    </>
    
  );
  
};

export default SectionWrapper(About, "about");