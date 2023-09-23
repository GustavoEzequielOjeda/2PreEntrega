import NavBarComponent from "../components/NavBarComponent/NavBarComponent";
import Category from "../pages/Category";
import Home from "../pages/Home";
import ItemDetails from "../pages/ItemDetails";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


const MainRouter = () =>{

    return(
        <Router>
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/category/:categoryId" element={<Category />}/>
                <Route path="/item/:itemId" element={<ItemDetails />}/>
            </Routes>
        </Router>
    )
}
export default MainRouter;