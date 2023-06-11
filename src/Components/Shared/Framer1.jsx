import { motion } from "framer-motion";
const Framer1 = ({ children }) => {
  return (
    <motion.div
      className='container'
      initial={{ scale: 0 }}
      animate={{scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Framer1;
