import React from 'react';
import { PenTool, Search, Megaphone, Video, Cpu, Music, Code, Headset, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ExploreCategories = () => {
    const categories = [
        { id: 1, name: "UI/UX Design", icon: <PenTool size={24} /> },
        { id: 2, name: "Human Research", icon: <Search size={24} /> },
        { id: 3, name: "Digital Marketing", icon: <Megaphone size={24} /> },
        { id: 4, name: "Video & Animation", icon: <Video size={24} /> },
        { id: 5, name: "AI Services", icon: <Cpu size={24} /> },
        { id: 6, name: "Music & Audio", icon: <Music size={24} /> },
        { id: 7, name: "Programming & Tech", icon: <Code size={24} /> },
        { id: 8, name: "Customer Support", icon: <Headset size={24} /> },
    ];

    const gridVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    const popVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } }
    };

    return (
        <section className="bg-base-100 py-16 px-4 md:px-8 max-w-7xl mx-auto font-sans overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                {/* Left Side: Static Dark Box, Animated Internal Grid */}
                <div className="w-full lg:w-2/3 bg-neutral text-neutral-content rounded-[2.5rem] p-6 sm:p-10">
                    <motion.div
                        variants={gridVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {categories.map((cat) => (
                            <motion.a
                                key={cat.id} href="#" variants={popVariants} whileHover={{ scale: 1.05 }}
                                className="bg-base-100/10 hover:bg-base-100/20 transition-colors duration-200 rounded-2xl p-6 flex flex-col items-start gap-4 h-32 justify-end"
                            >
                                <div className="text-warning">{cat.icon}</div>
                                <span className="text-sm font-bold leading-tight w-full">{cat.name}</span>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Right Side: Text and CTA */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, type: "spring" }}
                    className="w-full lg:w-1/3 flex flex-col items-start text-base-content"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        Explore job <br className="hidden lg:block" /> categories
                    </h2>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-neutral rounded-full px-6 gap-2">
                        View all categories
                        <span className="bg-warning text-warning-content rounded-full p-1">
                            <ArrowUpRight size={16} strokeWidth={3} />
                        </span>
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
};
export default ExploreCategories;