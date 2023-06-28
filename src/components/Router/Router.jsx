import { HashRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import HomePage from "../../pages/HomePage/HomePage";

const Router = () => {

    return ( 
        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>
        </HashRouter>
    )
}

export default Router;