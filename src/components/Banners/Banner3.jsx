import React from 'react'
import BannerPng from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FedeLeft } from '../../utillty/animation';


const bgStyle = {
    backgroundImage: `url(${BannerPng})`,
    backgroundPosition: "center",
    backgroundSize: " cover",
    backgroundRepeat: "no-repeat",
}

const Banner3 = () => {
  return (
    <section className='container mb-12'>
      <div style={bgStyle} className="container grid grid-cols-1 md:grid-cols-2
      space-y-6 md:space-y-0 py-14 rounded-3xl">
        {/* Blank div  */}
        <div></div>
    
        {/* Brand Info */}

        <div className='flex flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 
            lg:max-w-[400px]'>
                <motion.h1
                variants={FedeLeft(0.5)}
                initial="hidden"
                animate="visible"
                viewport={{ once:true}}
                className='text-2xl lg:text-4xl font-bold uppercase'>Get Fresh Fruits Today </motion.h1>
                <motion.p
                variants={FedeLeft(0.7)}
                initial="hidden"
                animate="visible"
                viewport={{ once: true}}
                
                >
                    
                    
                    Lorem ipsum dolor sit, amet consectetur 
                    adipisicing elit. Veniam molestiae perspiciatis
                    fugiat cupiditate deserunt repudiandae nihil 
                    consectetur cum, facere eveniet corporis dolor
                    minima ducimus debitis earum doloremque optio,
                    iusto maxime.
                </motion.p>
               

                {/* button section */}

                   <motion.div 
                    variants={FedeLeft(0.9)}
                    initial="hidden"
                    animate="visible"
                   className='flex justify-center 
                   md:justify-start'>
                    <button className='primary-btn'>
                        Learn More
                    </button>
                    </motion.div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Banner3
