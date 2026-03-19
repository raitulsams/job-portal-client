import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
            title: "A new career in healthcare",
            review: "Through our platform, she found a role as a healthcare administrator at HealthCare Plus. Now, she makes a meaningful impact every day, ensuring patients receive the best care.",
            name: "Jacqueline Miller",
            role: "Healthcare Administrator"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
            title: "Landed my dream tech role",
            review: "The platform's matched me with a fantastic startup. The hiring process was completely transparent, and I finally feel like I'm at a company that values my full-stack engineering skills.",
            name: "Marcus Johnson",
            role: "Senior Software Engineer"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
            title: "Accelerated my career growth",
            review: "I was looking to pivot from traditional marketing into digital strategy. The targeted job alerts put the perfect Senior Strategy role right in my inbox. I couldn't be happier.",
            name: "Sarah Chen",
            role: "Digital Marketing Director"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
            title: "Connecting with top agencies",
            review: "As a freelance designer, finding high-quality clients is tough. This platform connected me with two top-tier international agencies within my first month. The quality of opportunities here is unmatched.",
            name: "Emma Wilson",
            role: "Lead UI/UX Designer"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
            title: "Found the perfect leadership fit",
            review: "Stepping into an executive role requires absolute alignment with a company's vision. The detailed company profiles and direct recruiter access helped me find an organization where my leadership style truly belongs.",
            name: "David Rodriguez",
            role: "VP of Operations"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentTestimonial = testimonials[currentIndex];

    // --- Entrance Animation Variants (For Scrolling) ---
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 } // Stagger title, buttons, and card
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", stiffness: 80, damping: 15 }
        }
    };

    return (
        // The background wrapper stays completely static
        <section className="bg-base-100 text-base-content py-16 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">

            {/* The inner flexbox triggers the scroll entrance animation */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col md:flex-row gap-12 lg:gap-16"
            >

                {/* Left Column: Title & Controls */}
                <div className="w-full md:w-1/3 flex flex-col justify-between">
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                            Real stories, real success
                        </h2>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex gap-4">
                        <button
                            onClick={handlePrev}
                            className="btn btn-circle btn-outline border-base-300 hover:bg-base-200 hover:text-base-content hover:border-base-300 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="btn btn-circle btn-outline border-base-300 hover:bg-base-200 hover:text-base-content hover:border-base-300 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </motion.div>
                </div>

                {/* Right Column: Dynamic Testimonial Card */}
                {/* We wrap the entire slider logic in one staggered item so it slides up on scroll */}
                <motion.div variants={itemVariants} className="w-full md:w-2/3">

                    {/* The AnimatePresence handles the LEFT/RIGHT sliding when buttons are clicked */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonial.id}
                            className="flex flex-col sm:flex-row gap-8 items-center sm:items-start"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        >

                            {/* Image */}
                            <div className="w-full sm:w-1/2 rounded-3xl overflow-hidden shadow-lg shrink-0 aspect-square sm:aspect-[4/5] bg-base-300">
                                <img
                                    src={currentTestimonial.image}
                                    alt={currentTestimonial.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Testimonial Content */}
                            <div className="w-full sm:w-1/2 flex flex-col justify-center h-full pt-4 sm:pt-8">
                                {/* Stars */}
                                <div className="flex gap-1 mb-6 text-warning">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" />
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold mb-4 min-h-[3.5rem] flex items-center">
                                    {currentTestimonial.title}
                                </h3>

                                <p className="text-sm opacity-70 leading-relaxed mb-8 min-h-[10rem]">
                                    {currentTestimonial.review}
                                </p>

                                <div>
                                    <p className="font-bold">{currentTestimonial.name}</p>
                                    <p className="text-sm opacity-60">{currentTestimonial.role}</p>
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Testimonials;