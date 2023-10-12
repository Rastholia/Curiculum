/*--------------------------------------Importing------------------------------------------------------------ */

// Import Components
import Circles from "../../components/circles";
import CardLeft from "../../components/CardLeft";
import CardRight from "../../components/CardRight";
import { fadeIn } from "../../variants";
// Import React Icons
import { BsArrowRight } from "react-icons/bs";
// Import Framer Motion
import { motion } from "framer-motion";

/*---------------------------------------------------Construction-------------------------------------------- */

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* Text & Form */}
        <div className="flex flex-col w-full max-w[700px]">
          {/**text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* From */}
          <motion.form
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            action=""
          >
            <div className="flex-1 flex flex-col gap-6 w-full mx-auto">
              {/* Input Group */}
              <div className="flex gap-x-6 w-full">
                <input type="text" placeholder="Name" className="input" />
                <input type="email" placeholder="Email" className="input" />
              </div>
              <input type="text" placeholder="Subject" className="input" />
              <textarea
                name=""
                placeholder="Your Message"
                className="textarea"
              ></textarea>
              <button className="btn rounded-full border border-white/50 max-w-[170px] py-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group ">
                <span className="group-hover:text-accent transition-all duration-300 ">
                  Let's talk
                </span>
                <BsArrowRight className="group-hover:text-accent transition-all duration-300 " />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
