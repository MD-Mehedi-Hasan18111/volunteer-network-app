import React from 'react';
import AllEvents from '../AllEvents/AllEvents';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <AllEvents />
            <Footer />
        </div>
    );
};

export default Home;