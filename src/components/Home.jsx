import React from "react";
import HomeHeader from "./HomeHeader";
import Welcome from "./Welcome";
import Introduce from "./Introduce";
import Ready from "./Ready";
import HomeNotice from "./HomeNotice";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";

const Home = () => {
    return (
        <div className="home">
            <HomeHeader />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="welcome" element={<Welcome />}></Route>
                <Route path="/introduce" element={<Introduce />}></Route>
                <Route path="/ready" element={<Ready />}></Route>
                <Route path="/homenotice" element={<HomeNotice />}></Route>
            </Routes>
        </div>
    );
};

export default Home;
