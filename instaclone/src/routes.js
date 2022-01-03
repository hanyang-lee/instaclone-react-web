import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Auth from "./route/Auth";
import Home from "./route/Home";
import Create from "./route/Create"

const AppRouter = ({LoggedIn}) => {
    return (
    <Router>
        <Routes>
            {LoggedIn ?
            <>
            <Route exact path="/" element={<Home/>} />
            </> :
            <Route exact path="/" element={<Auth/>} />
            }
            <Route exact path="/Create" element={<Create/>} />
        </Routes>
    </Router>
    )
}


export default AppRouter;