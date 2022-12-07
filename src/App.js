import React from "react";

import './App.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className='AppWrapper'>
            <Header/>
            <Navbar/>
            <div class='AppWrapper__Content'>
                <Dialogs/>
            </div>

            {/*<Profile/>*/}
        </div>
    );
}

export default App;
