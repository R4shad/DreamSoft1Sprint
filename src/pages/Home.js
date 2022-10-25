

import React from 'react';
import Clock from '../components/Clock';

/*import Header from '../components/Header';*/
import Invpublica from '../components/Invpublica';
import HomePage from '../components/homePage'

function Home() {
    return (
        <div>
            <HomePage />
            <Invpublica/>
            <Clock/>

        </div>
        
    );
}

export default Home;
