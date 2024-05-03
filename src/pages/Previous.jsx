import React ,{useState,useEffect}from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import CompaniesListPrev from "../components/CompaniesListPrev";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Previous = () => {
    // const navigate = useNavigate();
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     const token = Cookies.get("token");
    //     if (token) {
    //         setIsLoggedIn(true);
    //     } else {
    //         setIsLoggedIn(false);
    //         navigate("/login"); // Redirect to login if not authenticated
    //     }
    // }, [navigate]);

    // if (!isLoggedIn) {
    //     return null; // Return null if not authenticated
    // }
    return (
        <>
           <Navbar />
           <CompaniesListPrev/>
           <Footer/>
        </>            
    )
}
export default Previous;
