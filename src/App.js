import React from "react";

import './App.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./components/PageRoutes";

const App = () => {
    return (
        <div className='AppWrapper'>
            <Header/>
            <Navbar/>
            <div className='AppWrapper__Content'>
                <AllRoutes/>
            </div>
        </div>
    );
}

export default App;
