import React from "react";
import { Container } from "react-bootstrap";
const Footer = () => {
    return (
        <footer style={{
            color: "white",
            width: "100%",
            background: "linear-gradient(to right bottom, #2e3192, #00aeed)",
            filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#2e3192', endColorstr='#00aeed', GradientType=1)"
        }}>
        
            <Container className="text-center p-3">
                <p>&copy; {new Date().getFullYear()} Placement Buddy</p>
                <p>Sastra Deemed University</p>
            </Container>
        </footer>
    );
}
export default Footer;