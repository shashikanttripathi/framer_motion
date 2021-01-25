import React from 'react';
import { motion } from 'framer-motion'
import { Button } from 'react-bootstrap'
const MotionButton = motion.custom(Button)

const Home = () => {
    return (
        <motion.div>
            <br />
            <motion.p initial={{ x: +400 }} animate={{ x: 0 }} transition={{ duration: 1 }}>slide from right</motion.p>
            <motion.p initial={{ x: -400 }} animate={{ x: 0 }} transition={{ duration: 1 }}>slide from left</motion.p>
            <MotionButton
                whileHover={{ scale: 1.2, textShadow: "0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, type: 'spring' }}
                initial={{ y: +300 }}
            >Click Me</MotionButton>
        </motion.div>
    );
}

export default Home;