import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'

const About = () => {
    return (
        
        <AnimatePresence>
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >Fade Component</motion.h2>
        </AnimatePresence>
    );
}

export default About;