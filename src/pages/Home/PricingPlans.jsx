import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Sparkles, Building2, Check } from 'lucide-react';

const PricingPlans = () => {
    const plans = [
        {
            name: "Basic",
            icon: <Flame size={20} className="text-error" />,
            price: "$ 35.00 USD",
            desc: "Perfect for small businesses looking to hire a few key employees.",
            features: ["Post up to 1 job listings", "Access to our basic resume database", "Email support", "Standard job visibility"],
            isHighlighted: false
        },
        {
            name: "Standard",
            icon: <Sparkles size={20} className="text-primary-content" />,
            price: "$ 99.00 USD",
            desc: "Ideal for growing companies that need to fill multiple positions.",
            features: ["Post up to 5 job listings per month", "Access to our basic resume database", "Priority email support", "Featured employer badge"],
            isHighlighted: true
        },
        {
            name: "Enterprise",
            icon: <Building2 size={20} className="text-info" />,
            price: "$ 120.00 USD",
            desc: "Best for large enterprises with high-volume hiring needs.",
            features: ["Unlimited job listings", "Comprehensive applicant tracking", "Priority phone and email support", "Premium job visibility"],
            isHighlighted: false
        }
    ];

    // 1. Container Variant: Tells the grid to load its children one by one
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 } // Waits 0.2s between each card popping up
        }
    };

    // 2. Item Variant: Tells each individual card HOW to pop up
    const cardVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(4px)", scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: { type: "spring", stiffness: 80, damping: 15 }
        }
    };

    return (
        // Notice the <section> is just standard HTML. The background doesn't move!
        <section className="bg-base-100 text-base-content py-16 px-4 md:px-8 max-w-7xl mx-auto">

            {/* 3. The Title animates independently */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight"
            >
                Choose your hiring plan
            </motion.h2>

            {/* 4. The Grid is a motion container that triggers the staggered cards */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center"
            >
                {plans.map((plan, index) => (
                    // 5. Each card is a motion item
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className={`rounded-3xl p-8 flex flex-col h-full transition-shadow duration-300
              ${plan.isHighlighted
                                ? 'bg-primary text-primary-content shadow-xl scale-100 md:scale-105 z-10'
                                : 'bg-base-200 text-base-content border border-base-300 shadow-sm'}`}
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            {plan.icon}
                            <h3 className="font-bold text-lg">{plan.name}</h3>
                        </div>

                        <div className="text-center mb-6">
                            <span className="text-3xl md:text-4xl font-extrabold">{plan.price}</span>
                        </div>

                        <p className={`text-sm text-center mb-8 flex-grow ${plan.isHighlighted ? 'opacity-90' : 'opacity-70'}`}>
                            {plan.desc}
                        </p>

                        <ul className="space-y-4 mb-8 text-sm">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <Check size={18} className={`shrink-0 ${plan.isHighlighted ? 'text-primary-content' : 'text-primary'}`} />
                                    <span className={plan.isHighlighted ? 'opacity-90' : 'opacity-80'}>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`btn rounded-full w-full font-bold
                ${plan.isHighlighted ? 'btn-neutral border-none' : 'btn-primary'}`}
                        >
                            Get started
                        </motion.button>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default PricingPlans;