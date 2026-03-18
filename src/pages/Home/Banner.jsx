import React from 'react';
import { ArrowUpRight, Search, Bell, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import banner_1 from '../../assets/banner-1.avif';
import banner_2 from '../../assets/banner-2.avif';
import banner_3 from '../../assets/banner-3.avif';
const hexMaskStyle = {
    WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 115'%3E%3Cpath d='M50 0a10 10 0 0 1 5 1.34l40 23.09A10 10 0 0 1 100 33.1v46.19a10 10 0 0 1-5 8.66l-40 23.09a10 10 0 0 1-10 0l-40-23.09A10 10 0 0 1 0 79.28V33.09A10 10 0 0 1 5 24.43l40-23.09A10 10 0 0 1 50 0z'/%3E%3C/svg%3E")`,
    maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 115'%3E%3Cpath d='M50 0a10 10 0 0 1 5 1.34l40 23.09A10 10 0 0 1 100 33.1v46.19a10 10 0 0 1-5 8.66l-40 23.09a10 10 0 0 1-10 0l-40-23.09A10 10 0 0 1 0 79.28V33.09A10 10 0 0 1 5 24.43l40-23.09A10 10 0 0 1 50 0z'/%3E%3C/svg%3E")`,
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
};

const floatingAnimationImg = {
    y: [0, 50],
    transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
    }
};
const floatingAnimationImg2 = {
    x: [0, 30],
    transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
    }
};
const floatingAnimationImg3 = {
    y: [0, 10],
    transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
    }
};


const Banner = () => {
    return (
        <section className="bg-base-100 text-base-content overflow-hidden py-2 lg:py-8">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

                <div className="flex flex-row items-center gap-2 sm:gap-8 lg:gap-16">

                    {/* Left Column: Spring slide-in */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                        className="w-1/2 flex flex-col items-start text-left"
                    >
                        <h1 className="text-2xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-2 sm:mb-6">
                            Unlock d<span className="text-primary">oo</span>rs to new <br className="hidden lg:block" /> opportunities
                        </h1>

                        <p className="opacity-70 text-[10px] sm:text-sm lg:text-lg mb-4 sm:mb-8 max-w-lg leading-relaxed">
                            Discover countless opportunities and connect with top employers.
                            Start your journey towards a fulfilling career today.
                        </p>

                        <button className="btn btn-primary btn-xs sm:btn-md lg:btn-lg rounded-full px-4 sm:px-8 font-semibold flex items-center gap-1 sm:gap-2">
                            <span className="hidden sm:inline">Explore all jobs</span>
                            <span className="sm:hidden">Explore</span>
                            <span className="bg-primary-content text-primary rounded-full p-0.5 sm:p-1">
                                <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                            </span>
                        </button>

                        <div className="mt-6 sm:mt-16 w-full">
                            <p className="text-[10px] sm:text-sm font-bold mb-2 sm:mb-6"># Trusted by 50K+ users</p>
                            <div className="flex flex-col xl:flex-row gap-2 sm:gap-10">
                                <div>
                                    <h3 className="text-lg sm:text-3xl lg:text-4xl font-bold flex items-center">
                                        100<span className="text-primary">+</span>
                                    </h3>
                                    <p className="text-[8px] sm:text-sm opacity-70 mt-0 sm:mt-2">A wide range of industries</p>
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-3xl lg:text-4xl font-bold flex items-center">
                                        25K<span className="text-primary">+</span>
                                    </h3>
                                    <p className="text-[8px] sm:text-sm opacity-70 mt-0 sm:mt-2">Found their dream jobs</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Visual Collage */}
                    <div className="w-1/2 relative min-h-[300px] sm:min-h-[500px] lg:min-h-[700px] flex items-center justify-center">

                        {/* Top Right Hexagon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.2 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.1 }}
                            className="absolute top-0 right-[5%] lg:right-[10%] z-10"
                        >
                            <motion.div
                                // animate={floatingAnimation}
                                className="w-16 h-20 sm:w-24 sm:h-28 lg:w-36 lg:h-40 bg-base-200 flex flex-col items-center justify-center p-1 sm:p-2 lg:p-4 shadow-sm"
                                style={hexMaskStyle}
                            >
                                <Briefcase className="text-primary mb-1 lg:mb-2 w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
                                <p className="text-[0.5rem] sm:text-[0.6rem] lg:text-xs font-semibold text-center leading-tight">I am looking<br />for a job</p>
                            </motion.div>
                        </motion.div>

                        {/* Left Pill Image */}
                        <motion.div
                            animate={floatingAnimationImg2}
                            className="absolute top-[15%] left-[5%] w-16 h-28 sm:w-28 sm:h-48 lg:w-48 lg:h-80 rounded-full overflow-hidden bg-base-300 shadow-lg z-0"
                        >
                            <img src={banner_1} alt="" className="w-full h-full object-cover" />
                        </motion.div>

                        {/* Center Dark Hexagon - Wrapped to separate spring entrance from float loop */}
                        <div className="absolute top-[40%] left-[40%] z-20"
                        >
                            <motion.div
                                // animate={floatingAnimationIcon}
                                className="opacity-50 w-14 h-16 sm:w-20 sm:h-24 lg:w-32 lg:h-36 bg-neutral flex flex-col items-center justify-center p-1 sm:p-2 lg:p-4 shadow-xl"
                                style={hexMaskStyle}
                            >
                                <div className="bg-neutral-content/20 p-1 lg:p-2 rounded-full mb-1">
                                    <Search className="text-neutral-content w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                                </div>
                                <p className="text-[0.5rem] sm:text-[0.6rem] lg:text-xs font-semibold text-center text-neutral-content leading-tight">We are<br />hiring!</p>
                            </motion.div>
                        </div>

                        {/* Right Pill Image */}
                        <motion.div
                            animate={floatingAnimationImg}
                            className="absolute top-[30%] right-[5%] w-16 h-28 sm:w-28 sm:h-48 lg:w-48 lg:h-80 rounded-full overflow-hidden bg-secondary shadow-lg z-10"
                        >
                            <img src={banner_2} alt="" className="w-full h-full object-cover" />
                        </motion.div>

                        {/* Bottom Left Hexagon */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 50, damping: 15 }}
                            className="absolute bottom-[5%] left-[20%] z-20"
                        >
                            <motion.div
                                animate={{ opacity: [0.5, 0, 0.5] }} // Tells it to animate between these two values
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    // repeatType: "reverse", // Makes it go 0.5 -> 0 -> 0.5 smoothly
                                    ease: "easeInOut"
                                }}
                                className="w-16 h-20 sm:w-24 sm:h-28 lg:w-36 lg:h-40 bg-base-200 flex flex-col items-center justify-center p-1 sm:p-2 lg:p-4 shadow-sm"
                                style={hexMaskStyle}
                            >
                                <Bell className="text-primary mb-1 lg:mb-2 w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
                                <p className="text-[0.5rem] sm:text-[0.6rem] lg:text-xs font-semibold text-center leading-tight">Personalized<br />jobs alert</p>
                            </motion.div>
                        </motion.div>

                        {/* Bottom Arch Image */}
                        <motion.div
                            animate={floatingAnimationImg3}
                            className="absolute -bottom-[10%] right-[30%] w-16 h-24 sm:w-28 sm:h-40 lg:w-48 lg:h-72 rounded-t-full overflow-hidden bg-accent shadow-lg z-0"
                        >
                            <img src={banner_3} alt="" className="w-full h-full object-cover" />
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;