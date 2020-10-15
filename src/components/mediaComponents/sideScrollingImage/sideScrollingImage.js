import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SideScrollingImage = () => {
	const [state, setState] = useState(-1000)
	setTimeout(() => setState(state - 10), 100)
	return (
    <div style={{
      
    }}>
			<motion.img
			animate={{ x: state }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 200 },
        opacity: { duration: 0.2 }
      }}
      src='https://source.unsplash.com/WLUHO9A_xik/4600x700' />
      <motion.img
			animate={{ x: state }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 200 },
        opacity: { duration: 0.2 }
      }}
      src='https://source.unsplash.com/WLUHO9A_xik/4600x700' />
    </div>
	)
}

export { SideScrollingImage }