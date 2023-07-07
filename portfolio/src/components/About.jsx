import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constant";
import SectionWrapper from "../hof/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
const ServicesCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[200px] w-full">
      <motion.div 
      
      variants={fadeIn("right","spring" ,.5,index,0.75)}
      
      className="w-full green-pink-gradient 
      p-[1px] rounded-[20px]
       shadow-card">

        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className="bg-tertiary rounded-[20px]
          py-5 px-12 min-h-[220px]
          flex justify-evenly items-center flex-col
          
          "
          >
        
<img src={icon} alt={title}
className="w-16 h-16 object-contain" />
<h3 className="text-white text-[16px] font-bold text-center">
  {title}
</h3>
        </div>
       </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView...</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[13px]
        max-w-3xl leading-[20px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am an experienced front-end developer with expertise in creating
        user-facing websites and applications using HTML, CSS, JavaScript, and
        Node.js. I have a strong understanding of web design principles and a
        keen eye for detail, which allows me to create visually appealing and
        functional interfaces. My proficiency in Node.js enables me to develop
        scalable and efficient web applications, and I am familiar with popular
        Node.js frameworks such ,Node.js, and . I am also experienced in using
        front-end frameworks such as React, to build dynamic and responsive
        interfaces. I am a collaborative team player with excellent
        problem-solving skills, and I am committed to delivering high-quality
        work that meets the needs of users and stakeholders.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return (
            <ServicesCard key={service.title} index={index} {...service} />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About ,'about') ;
