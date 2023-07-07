import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import SectionWrapper from "../hof/SectionWrapper";
import { slideIn } from "../utils/motion";
import { ToastContainer ,toast } from "react-toastify";



import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();

  const [form, SetForem] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, SetLoading] = useState(false);
  const handleCnage = (e) => {
    const {name ,value} =e.target
    SetForem({...form ,[name]:value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
const {name ,email ,message}  = form
if(!name && !email &&!message ){


  toast.warn('please enter inputs correctly!', {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

}
else{
  SetLoading(true)
emailjs.send(
  'service_tk9r9bc',
  'template_mcpzzir',
  {
    from_name:form.name,
    to_name:"Mustafa",
    from_email:form.email,
    to_email:'mostafaisa208@gmail.com',
    message:form.message
  },
  'Ht-BrdTmKhJt3OKJV'
).then(()=>{
  SetLoading(false)
  toast('Your Message Send I will Replay YOU soon!', {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  SetForem({
    name: "",
    email: "",
    message: "",
  })
}).catch(()=>{

  SetForem({
    name: "",
    email: "",
    message: "",
  })
  SetLoading(false)
  toast.warn('there is thing went wrong!', {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

})
}

  };
  const containerStyle = { top: "60px" };
  return (
    <div className=" flex xl:mt-12 xl 
    
    :flex-row flex-col-reverse gap-10 overflow-hidden ">
      <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
style={containerStyle}
/>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[.075] bg-black-100 p-6 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}> Contact ...</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex- flex-col gap-8"
        >
          <label className="flex flex-col mt-3">
            <span className="text-white  font-meduim mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleCnage}
              placeholder="what is your name"
              className="bg-tertiary py-3 px-2 text-white rounded-lg outlined-none
  border-none font-medium
  placeholder:text-secondary"
            />
          </label>

          <label className="flex flex-col mt-3">
            <span className="text-white  font-meduim mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleCnage}
              placeholder="what is your name"
              className="bg-tertiary py-3 px-2 text-white rounded-lg outlined-none
  border-none font-medium
  placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col mt-3">
            <span className="text-white  font-meduim mb-4">Your message</span>
            <textarea
              row="7"
              value={form.message}
              onChange={(e)=>{SetForem({...form ,message:e.target.value})}}
              placeholder="what you need to write"
              className="bg-tertiary py-3 px-2 text-white rounded-lg outlined-none
  border-none font-medium
  placeholder:text-secondary"
            />
          </label>
          <button
          type="submit"
          className=' mt-5 bg-tertiary py-3 px-5 outline-none w-fit 
          text-white font-bold shadow-primary
           rounded-xl
          
          '
          >
            {
              loading ? "Sending ..." : "Send"
            }
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn('right' ,"tween" ,.2,1)}
      className='x-flex-1 xl:h-auto md:h-[500px] h-[350px]'
      >
{/* <EarthCanvas /> */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "work");
