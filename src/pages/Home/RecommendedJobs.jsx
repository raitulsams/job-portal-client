import React from 'react';
import { Compass, Globe, Home, Clock, Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const RecommendedJobs = () => {
    const jobCategories = [
        { id: 1, title: 'International', icon: <Globe className="text-blue-500" size={28} strokeWidth={1.5} /> },
        { id: 2, title: 'Remote', icon: <Home className="text-indigo-500" size={28} strokeWidth={1.5} /> },
        { id: 3, title: 'Part-Time', icon: <Clock className="text-orange-500" size={28} strokeWidth={1.5} /> },
        { id: 4, title: 'Internship', icon: <Search className="text-cyan-500" size={28} strokeWidth={1.5} /> }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 80, damping: 15 } }
    };

    return (
        <section className="bg-base-200 text-base-content py-16 lg:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Search Area - Animated */}
                <motion.div
                    variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
                    className="mb-16 lg:mb-24"
                >
                    <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">Search your dream job</motion.h2>

                    <motion.div variants={itemVariants} className="flex flex-col lg:flex-row lg:items-center gap-6">
                        <div className="relative w-full lg:w-64">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Compass className="h-5 w-5 opacity-50" />
                            </div>
                            <select defaultValue="default" className="select w-full pl-12 bg-base-100 text-base-content rounded-full focus:outline-none focus:ring-2 focus:ring-primary h-14 shadow-sm">
                                <option value="default" disabled>Browse by</option>
                                <option value="category">Category</option>
                                <option value="location">Location</option>
                            </select>
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                            <span className="font-medium opacity-70">Most popular:</span>
                            {['UI/UX Design', 'Human Research', 'Digital Marketing', 'Video & Animation'].map((tag) => (
                                <a key={tag} href="#" className="font-semibold hover:text-primary transition-colors underline decoration-base-content/30 underline-offset-4 hover:decoration-primary">
                                    {tag}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Recommended Jobs Area - Animated Grid */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Most recommended jobs</h2>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-primary rounded-full px-8 font-semibold">
                            View all Jobs
                        </motion.button>
                    </motion.div>

                    <motion.div
                        variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
                    >
                        {jobCategories.map((job) => (
                            <motion.div key={job.id} variants={itemVariants} whileHover={{ y: -5 }} className="bg-base-100 rounded-[2rem] p-6 lg:p-8 flex flex-col cursor-pointer group shadow-sm border border-base-300 hover:border-primary/50">
                                <div className="mb-16">
                                    <div className="w-12 h-12 rounded-full bg-base-200 flex items-center justify-center">
                                        {job.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                                <a href="#" className="text-primary text-sm font-semibold flex items-center gap-1 mt-auto group-hover:gap-2 transition-all">
                                    View all <ArrowRight size={16} strokeWidth={2.5} />
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default RecommendedJobs;