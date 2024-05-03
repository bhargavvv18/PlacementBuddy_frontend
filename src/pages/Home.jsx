import NavBar from "../components/NavBar";
import Body from "../components/Body";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Home = () => {
    // const navigate = useNavigate();
    // const isLoggedIn = !!Cookies.get("token");

    // if (!isLoggedIn) {
       
    //     navigate("/login");
    //     return null; 
    // }
    return (
        <>
            <NavBar />
            <Body />
            <Footer />
        </>    
    );
}

export default Home