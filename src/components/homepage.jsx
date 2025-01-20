import React from 'react';
import BlogCards from './footer/BlogCards'
import Portfolio1 from './Portfolio1';
import Getintouch from './getintouch';
import Freequote from './freequote';
import First from './First'
import Land from './land/land';
import Services from './services/services';
import Industries from './industries/industries';

const Homepage = () => {
    return (
        <div data-aos="fade-up">
            <Land />
            <Services />
            <Industries />
            <Portfolio1 />
            <Getintouch />
            <Freequote />
            <First />
            <BlogCards />
        </div>
    );
}

export default Homepage;
