import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { projects } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hof/SectionWrapper";
const ProjectCard =({index ,name ,description ,tags,image,
source_code_link})=>{
  return (
    <motion.div
  
    variants={fadeIn("up","spring" ,index*.08 ,0.75)}
    >
      <Tilt 
      options={{
        max:45,
        scale:1,
        speed:450
      }}
      className='bg-tertiary p-3 rounded-2xl sm:w-[300px] w-full h-[300]'>
<div className='relative w-full h-[220px] overflow-y-auto'>
<img src={image} alt={name}  className='w-[3000px] h-[200px]  rounded-2xl
'/>
</div>
<div className='absolute inset-0 flex justify-end mt-8 mr-5 card-img_hover'>

<div onClick={()=>{
  window.open(source_code_link ,"_blank")
}}

className='black-gradient w-10 h-10 rounded-full flex justify-center
 items-center cursor-pointer '>

<img src={github} alt={name} className='w-1/2 h-1/2'/>
</div>

</div>
<div className='mt-1'>
  <h3 className='text-white font-bold text-[24px]'>{name}</h3>
  <p className='mt-1 text-secondary text-[14px]'>{description}</p>

</div>
<div className='mt-4 flex flex-wrap gap-2'>
  {
    tags.map((e ,i) =>{
      return(
        <p key={i} className ={`text-[13px] ${e.color}`}>
  
      #  {e.name}
        </p>
      )
    })
  }

</div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Projects </p>
        <h2 className={styles.sectionHeadText}>Projects...</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[16px] max-w-3xl leading-[25px]"
        >
          Follwoing Projects ShowCase My Skills and experince through real-world
          exampels of my work. Each project is breifly described with links to
          code and life demo in it it refeckts my ability to solve many problems
          work wwith fiffrent technologies and mange projects effectively.
        </motion.p>
      </div>


      <div className='mt-20 flex flex-wrap gap-7'>

{
  projects.map((project ,index)=>{
    return (
      <ProjectCard key={`project-${index}`} 
  index={index}
  { ...project}

  
  />
    )
  })
}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
