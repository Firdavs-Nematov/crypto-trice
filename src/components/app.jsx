import React from "react";
import { Navbar } from "./navbar";
import { Main } from "./main";

export const App = () => {
    return (
        <div className="container-fluid app">
            <Navbar />
            <div className="container">
                <Main key={"/"} />
            </div>
        </div>
    );
};
