import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import Home from "../pages/Home";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

const MainRouter = () =>{

    return(
        <Router>
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/category/:categoryId" element={<Home />}/>
                <Route path="/item/:itemId" element={<Home />}/>
            </Routes>
        </Router>
    )
}
export default MainRouter;