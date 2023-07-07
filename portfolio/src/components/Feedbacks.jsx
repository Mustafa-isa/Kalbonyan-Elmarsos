import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import SectionWrapper from "../hof/SectionWrapper";
import { testimonials } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";
const FeedBack = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div 
    variants={fadeIn("" ,"spring" ,index*.8 ,0.75)}
    className='bg-black-200 p-10 rounded-3xl1 xs:w-[270px] w-full'
    >
      <p className ='text-white font-black text-[48px]'> " </p>
    <div className="mt-1">
    <p className='txt-white tracking-wider text-[17px]'>{testimonial}</p>

<div className='mt-7 flex justify-between items-center gap-1'>
  <div className='flex-1 flex  flex-col'>
<p className=' text-white font-medium text-[15px]'>
   <span className='blue-text-gradient'>@</span> {name}
</p >
<p className ='mt-1 text-secondary text-[12px]'>
  {designation} 
</p>
  </div>

<img src={image} alt="test" className='w-10 h-10 rounded-full' />

</div>
    </div>

    </motion.div>
  );
};
const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] ">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonails..</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((t, i) => {
          return <FeedBack key={i} index={i} {...t} />;
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks ,"feedback");
