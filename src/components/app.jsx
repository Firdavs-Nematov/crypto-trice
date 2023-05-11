import React from "react";
import { Navbar } from "./navbar";
import { Main } from "./main";

export const App = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Main />
            </div>
        </div>
    );
};
