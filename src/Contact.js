import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from 'react-bootstrap'

const Contact = () => {
    const [show, setShow] = useState(false)
    return (<>
        <Button onClick={() => setShow(!show)}>Show/Hide</Button>
        <AnimatePresence>
            {show ? <motion.h4
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                Dom component</motion.h4> : null}
        </AnimatePresence>
    </>
    );
}

export default Contact;