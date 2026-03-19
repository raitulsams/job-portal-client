import React from 'react';
import {
    Briefcase,
    DollarSign,
    MapPin,
    ArrowUpRight,
    Hexagon,
    Layers,
    Aperture,
    BarChart2,
    Box,
    Send
} from 'lucide-react';
import { motion } from 'framer-motion'; // <-- Import motion

const FeaturedJobs = () => {
    const jobs = [
        {
            id: 1,
            icon: <Hexagon className="text-teal-600" size={28} strokeWidth={1.5} />,
            type: "Full-Time",
            category: "UI/UX Design",
            title: "Senior full stack engineer, User onboarding",
            experience: "3 - 5 years",
            salary: "$5K to $6K USD",
            location: "Copenhagen, Denmark",
        },
        {
            id: 2,
            icon: <Layers className="text-blue-500" size={28} strokeWidth={1.5} />,
            type: "Internship",
            category: "Music & Audio",
            title: "Audio Production Specialist",
            experience: "2 - 1 years",
            salary: "$3K USD",
            location: "London, England",
        },
        {
            id: 3,
            icon: <Aperture className="text-purple-500" size={28} strokeWidth={1.5} />,
            type: "Part-Time",
            category: "Business Analysis",
            title: "Business intelligence analyst",
            experience: "2 - 1 years",
            salary: "$3K to $4K USD",
            location: "London, England",
        },
        {
            id: 4,
            icon: <BarChart2 className="text-base-content" size={28} strokeWidth={1.5} />,
            type: "Full-Time",
            category: "Business Analysis",
            title: "General ledger accountant",
            experience: "2 - 3 years",
            salary: "$5,000 USD",
            location: "Copenhagen, Denmark",
        },
        {
            id: 5,
            icon: <Box className="text-red-500" size={28} strokeWidth={1.5} />,
            type: "Internship",
            category: "Programming & Tech",
            title: "SEO, social media marketing, and digital marketing",
            experience: "0 - 1 years",
            salary: "$8,000 USD",
            location: "London, England",
        },
        {
            id: 6,
            icon: <Send className="text-pink-500" size={28} strokeWidth={1.5} />,
            type: "Part-Time",
            category: "UI/UX Design",
            title: "Senior UI/UX designer",
            experience: "3 - 4 years",
            salary: "$4,000 USD",
            location: "Copenhagen, Denmark",
        },
    ];

    // --- Animation Variants ---

    // Controls the staggered timing for the grid
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1 // 0.1s delay between each card animating in
            }
        }
    };

    // Controls the individual pop-up animation for each card
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, damping: 15 }
        }
    };

    return (
        <section className="bg-base-200 py-2 lg:py-3 text-base-content font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading - Fades down on scroll */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight"
                >
                    Featured job
                </motion.h2>

                {/* Responsive Grid with Staggered Animation */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    // whileInView triggers the animation when the grid enters the screen
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 xl:grid-cols-2 gap-6"
                >
                    {jobs.map((job) => (
                        /* Individual Job Card */
                        <motion.div
                            key={job.id}
                            variants={itemVariants}
                            // Adds a slight lift effect when the user hovers over the card with their mouse
                            whileHover={{ y: -4 }}
                            className="bg-base-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 border border-base-300/50 cursor-pointer"
                        >

                            {/* Company Logo Wrapper */}
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-base-200 flex items-center justify-center shrink-0">
                                {job.icon}
                            </div>

                            {/* Job Info Container */}
                            <div className="flex-1 w-full">

                                {/* Tags (Type & Category) */}
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                    <span className="bg-warning text-warning-content px-2.5 py-1 text-[10px] sm:text-xs font-bold rounded-md uppercase tracking-wide">
                                        {job.type}
                                    </span>
                                    <span className="bg-neutral text-neutral-content px-2.5 py-1 text-[10px] sm:text-xs font-bold rounded-md uppercase tracking-wide">
                                        {job.category}
                                    </span>
                                </div>

                                {/* Job Title */}
                                <h3 className="text-lg sm:text-xl font-bold mb-4 leading-tight">
                                    {job.title}
                                </h3>

                                {/* Job Details */}
                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium opacity-70">
                                    <div className="flex items-center gap-1.5">
                                        <Briefcase size={16} />
                                        <span>{job.experience}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <DollarSign size={16} />
                                        <span>{job.salary}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MapPin size={16} />
                                        <span>{job.location}</span>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA Button - Pops up slightly after the grid finishes */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                    className="mt-12 flex justify-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-neutral rounded-full px-8 h-12 min-h-12 font-semibold"
                    >
                        View all jobs
                        <span className="bg-neutral-content text-neutral rounded-full p-1 ml-1">
                            <ArrowUpRight size={16} strokeWidth={2.5} />
                        </span>
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
};

export default FeaturedJobs;