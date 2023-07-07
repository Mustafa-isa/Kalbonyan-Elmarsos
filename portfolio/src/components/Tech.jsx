import React from "react";
import { BallCanvas } from "./canvas";
import SectionWrapper from "../hof/SectionWrapper";
import {technologies} from '../constant'

const Tech = () => {
  return <div className="flex 
   flex-row 
   justify-center 
   items-center
   flex-wrap
   gap-5">

{
  technologies.map((technology) =>{
    return <div className="w-28 h-28" key={technology.name}>
      <BallCanvas techIcon={technology.icon}/>

    </div>
  })
}
    
   </div>;
};

export default SectionWrapper(Tech ,'tech');

