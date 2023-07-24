import React from 'react';
import Navber from '../Navber/Navber';
import Header from '../Header/Header';
import Feature from '../Feature/Feature';
import './Home.css'
import PropertyList from '../PropertyList/PropertyList';
import FeaturePropertyes from '../FeaturePropertyes/FeaturePropertyes';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Header></Header>
            <div className='homecontainer'>
                <Feature />
                <h1 className='homeTitle'>Browser by property type</h1>
                <PropertyList/>
                <h1 className='homeTitle'>Homes guests love</h1>
                <FeaturePropertyes></FeaturePropertyes>
            </div>
        </div>
    );
};

export default Home;