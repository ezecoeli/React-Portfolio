import {motion} from 'framer-motion';
import { IoIosArrowUp } from 'react-icons/io';

function ScrollToTop({ onClick }) {
  return (
    <motion.button 
      onClick={onClick} 
      className="topbtn"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <IoIosArrowUp className="w-6 h-6" />
    </motion.button>
  );
}

export default ScrollToTop;