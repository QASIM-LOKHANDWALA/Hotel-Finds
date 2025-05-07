import React from "react";
import Navbar from "./components/Navbar";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
    const isAdmin = useLocation().pathname.includes("admin");

    return (
        <div>
            {!isAdmin && <Navbar />}
            <div className="min-h-[70vh]">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
