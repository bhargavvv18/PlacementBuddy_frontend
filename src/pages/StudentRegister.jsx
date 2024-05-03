// import { useState } from "react";
// import { Form, Button, Container, Row, Col } from "react-bootstrap";
// import axios from "axios";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";

// import { BASE_URL } from "../services/helper";

// const studentRegister = () => {
//     const [user, setUser] = useState({ email: "", password: "" });

//     const { email, password } = user;

//     const registerUser = async (e) => {
//         e.preventDefault(); // Prevent default form submission behavior

//         try {
//             // Send a POST request to the backend API endpoint with user data
//             const response = await axios.post(`${BASE_URL}/api/students/register`, user);

//             // If registration is successful, show an alert
//             alert("Registered Successfully");

//             // Redirect to the register route
//             window.location.href = "/stu_login";
//         } catch (error) {
//             // If there's an error during registration, show an error message
//             console.error("Registration failed:", error);
//             alert("Registration failed. Please try again.");
//         }
//     };

//     return (
//         <>
//             {/* <NavBar /> */}
//             <Container style={{ minHeight: "80vh" }}>
//                 <Row className="shadow mt-3">
//                     <Col>
//                         <h1
//                             style={{
//                                 fontFamily:
//                                     "Georgia, 'Times New Roman', Times, serif",
//                                 backgroundColor: "rgb(124, 148, 167)",
//                             }}
//                             className="text-center mt-3"
//                         >
//                             Register
//                         </h1>
//                         <Container className="adminbox">
//                             <Form>
//                                 <Form.Group className="my-3" controlId="username">
//                                     <Form.Label>
//                                         <b>Email</b>
//                                     </Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter your email"
//                                         value={email}
//                                         onChange={(e) =>
//                                             setUser({ ...user, email: e.target.value })
//                                         }
//                                     />
//                                 </Form.Group>
//                                 <Form.Group className="my-3" controlId="password">
//                                     <Form.Label>
//                                         <b>Password</b>
//                                     </Form.Label>
//                                     <Form.Control
//                                         type="password"
//                                         placeholder="Enter your password"
//                                         value={password}
//                                         onChange={(e) =>
//                                             setUser({ ...user, password: e.target.value })
//                                         }
//                                     />
//                                 </Form.Group>
//                                 <Button variant="primary" type="submit" onClick={registerUser}>
//                                     Register
//                                 </Button>
//                             </Form>
//                         </Container>
//                         <hr />
//                     </Col>
//                 </Row>
//             </Container>
//             <Footer />
//         </>
//     );
// };

// export default studentRegister;
