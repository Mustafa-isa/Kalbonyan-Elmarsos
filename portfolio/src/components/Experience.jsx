import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component";

import { styles } from "../style";
import { experiences } from "../constant";
import SectionWrapper from "../hof/SectionWrapper";
import { textVariant } from "../utils/motion";
const ExpCard = ({ experience }) => {
  return (
    <VerticalTimelineElement

      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderTop: " 7px solid #fff" }}
      iconStyle={{ background: "#E6DEDD" }}
    
    >
  <div     className='p-4'>
  <h3 className="text-white  text-[20px] font-bold">{experience.title}</h3>
  {/* <p className='text-secondary text-[16px] font-semibold'></p> */}
  <ul className="mt-5 list-disc ml-5 space-y-2 ">

    {
      

    
      experience.points.map((point ,index) => {
        return <li className='text-white-100 text-[14px] pl-1 tracking-wider' key={index}>{point}</li>
      })
    }


  </ul>
  
  </div>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have Done </p>
        <h2 className={styles.sectionHeadText}>Experience...</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className='flex flex-col justify-center items-center gap-10'>
          {experiences.map((experience, index) => {
            return <ExpCard key={index} experience={experience} />;
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "workmc");
