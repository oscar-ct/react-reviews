import Header from "./Header";
import {motion, AnimatePresence} from "framer-motion";

function About () {
    return (
        <>
            <Header title="About"/>
            <AnimatePresence>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <div className="about-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis lectus magna fringilla urna porttitor rhoncus. Varius morbi enim nunc faucibus a pellentesque sit amet. Fringilla urna porttitor rhoncus dolor. Enim sed faucibus turpis in eu mi bibendum. Egestas sed tempus urna et pharetra pharetra massa. Aliquam ultrices sagittis orci a scelerisque purus. Purus ut faucibus pulvinar elementum integer. Arcu cursus vitae congue mauris rhoncus aenean. Interdum consectetur libero id faucibus nisl tincidunt eget nullam non. Orci nulla pellentesque dignissim enim. Massa tempor nec feugiat nisl pretium fusce id.
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}

export default About;