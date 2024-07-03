import React from 'react'
import AboutUs from './Gym_Page/About/AboutUs';
import Welcome_page from './Gym_Page/Welcome_p/Welcome_page';
import Services from './Gym_Page/Services/Services';
import Membership from './Gym_Page/Membership-levels/Membership';
function App() {
    return (
        <>
            <Welcome_page />
            <Services />
            <AboutUs />
            <Membership />
        </>
    )
}

export default App
