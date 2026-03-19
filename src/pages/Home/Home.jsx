import React from 'react';
import Banner from './Banner';
import RecommendedJobs from './RecommendedJobs';
import FeaturedJobs from './FeaturedJobs';
import TopHiringCompanies from './TopHiringCompanies';
import ExploreCategories from './ExploreCategories';
import PricingPlans from './PricingPlans';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            {/* <h2>This is home</h2> */}
            <Banner></Banner>
            <RecommendedJobs></RecommendedJobs>
            <FeaturedJobs></FeaturedJobs>
            <TopHiringCompanies></TopHiringCompanies>
            <ExploreCategories></ExploreCategories>
            <PricingPlans></PricingPlans>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;