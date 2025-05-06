import React from "react";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";

const App = () => {
    const isAdmin = useLocation().pathname.includes("admin");

    return <div>{!isAdmin && <Navbar />}</div>;
};

export default App;
