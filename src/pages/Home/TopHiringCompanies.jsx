import React from 'react';
import { BarChart, Activity, Hexagon, Send, Aperture, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TopHiringCompanies = () => {
    const companies = [
        { id: 1, name: "Creative media agency", desc: "Join a team of creative minds shaping the future of digital content.", location: "California, USA", icon: <BarChart className="text-base-content opacity-70" size={24} /> },
        { id: 2, name: "Vertex consulting group", desc: "Specializes in strategic consulting to boost business performance.", location: "Amsterdam, Holland", icon: <Activity className="text-error" size={24} /> },
        { id: 3, name: "Talon tech LLC", desc: "We deliver tailored strategies to help clients achieve goals.", location: "London, England", icon: <Hexagon className="text-primary" size={24} /> },
        { id: 4, name: "Global retail corp", desc: "Known for exceptional customer service and career opportunities.", location: "Copenhagen, Denmark", icon: <Send className="text-secondary" size={24} /> },
        { id: 5, name: "AutoTech Innovators", desc: "Industries drives innovation in the automotive sector.", location: "London, England", icon: <Aperture className="text-accent" size={24} /> },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
    };

    return (
        <section className="bg-base-100 text-base-content py-16 px-4 md:px-8 max-w-7xl mx-auto font-sans overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
                Top hiring companies
            </motion.h2>

            <motion.div
                variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {companies.map((company) => (
                    <motion.div key={company.id} variants={itemVariants} whileHover={{ y: -5 }} className="bg-base-200 rounded-3xl p-8 flex flex-col">
                        <div className="w-12 h-12 bg-base-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            {company.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                        <p className="text-sm opacity-70 mb-6 flex-grow leading-relaxed">{company.desc}</p>
                        <div className="flex items-center gap-1.5 text-xs font-medium opacity-60 mb-6">
                            <MapPin size={14} /><span>{company.location}</span>
                        </div>
                        <a href="#" className="text-sm font-semibold hover:underline flex items-center gap-1 w-max">
                            View jobs <ArrowRight size={16} />
                        </a>
                    </motion.div>
                ))}

                {/* Highlighted CTA Card animated alongside the others */}
                <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-primary text-primary-content rounded-3xl p-8 flex flex-col justify-between">
                    <h3 className="text-2xl md:text-3xl font-bold mt-4 pr-8 leading-tight">Join the best in the industry</h3>
                    <div className="mt-12 flex justify-start">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-neutral rounded-full px-6 gap-2">
                            View all companies
                            <span className="bg-neutral-content text-neutral rounded-full p-0.5"><ArrowUpRight size={16} /></span>
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};
export default TopHiringCompanies;