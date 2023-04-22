import React from 'react'
import { motion } from 'framer-motion'
import { videoAnimation, line, mask } from '../utils/animation'
export default function Landingpage() {
  const line1 = "Helper robert for a"

  return (
    <div>
      <div className='content'>
        <div className='flex md:text-2xl mt-14 mb-20 justify-between'>
          <p>Robert .Co</p>
          <p>Menu</p>
        </div>



        <motion.p initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'easeIn', stiffness: 100, damping: 10, duration
              : 0.5
          }} className='text-4xl md:text-6xl font-semibold mt-2'>Helper Robot</motion.p>
        <motion.p initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'easeIn', stiffness: 100, damping: 10, duration
              : 0.5, delay:0.1
          }} className='text-4xl md:text-6xl font-semibold mt-2'>for a better</motion.p>
        <motion.p initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'easeIn', stiffness: 100, damping: 10, duration
              : 0.5, delay:0.3
          }} className='text-4xl md:text-6xl font-semibold mt-2'>Everyday</motion.p>
        <motion.video className='mt-10'
          variants={videoAnimation}
          initial="initial"
          animate="animate"
          loop
          autoPlay
          muted
          playsInline
          controls>
          <source src='./myvideo.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>
    </div>
  )
}
