import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [clock, setClock] = useState();
    useEffect(() => {
        setInterval(() => {
            const data = new Date();
            setClock(data.toLocaleTimeString());
        }, 500);
    }, []);

    return (
        <div>
            <div className="navbar">
                <Link to={"/"} className="text-decoration-none">
                    <h1>Crypto Trice</h1>
                </Link>
                <div className="nowDate d-flex justify-content-center align-content-center">
                    <h3>
                        <b style={{ color: "blue" }}>{clock}</b>
                    </h3>
                </div>
            </div>
        </div>
    );
};
