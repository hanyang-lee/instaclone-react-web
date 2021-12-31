import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./route/Home";
import Create from "./route/Create"
import LoginPage from "./route/LoginPage";

const AppRouter = ({LoggedIn}) => {
    return (
    <Router>
        <Routes>
            {LoggedIn ?
            <>
            <Route exact path="/" element={<Home/>} />
            </> :
            <Route exact path="/" element={<LoginPage/>} />
            }
            <Route path={"/Create"} element={<Create/>} />
        </Routes>
    </Router>
    )
}


export default AppRouter;