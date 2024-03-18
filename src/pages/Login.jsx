import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const response = await axios.post("/login", { email, password });
      const userData = response.data;
      if (userData.error) {
        toast.error(userData.error);
      } else {
        setUser(userData);
        setData({});
        toast.success("Login successful");
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("An error occurred while logging in:", error);
      toast.error("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121212",
        minHeight: "100vh",
      }}
    >
      <Navbar
        data-bs-theme="dark"
        className="justify-content-center text-center"
      >
        <Form onSubmit={loginUser}>
          <InputGroup className="mr-sm-2">
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Enter email..."
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </InputGroup>
          <InputGroup className="mr-sm-2">
            <InputGroup.Text>Password</InputGroup.Text>
            <Form.Control
              type="password"
              placeholder="Enter password..."
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </InputGroup>
          <Button type="submit">Login</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default Login;

// import { useState } from "react";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     email: "",
//     password: "",
//   });

//   const loginUser = async (e) => {
//     e.preventDefault();
//     const { email, password } = data;
//     try {
//       const { data } = await axios.post("/login", {
//         email,
//         password,
//       });
//       if (data.error) {
//         toast.error(data.error);
//       } else {
//         setData({});
//         toast.success("Login successful");
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       console.error("An error occurred while logging in:", error);
//       toast.error("An error occurred while logging in. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={loginUser}>
//         <label>Email</label>
//         <input
//           type="email"
//           placeholder="Enter email..."
//           value={data.email}
//           onChange={(e) => setData({ ...data, email: e.target.value })}
//         />
//         <label>Password</label>
//         <input
//           type="password"
//           placeholder="Enter password..."
//           value={data.password}
//           onChange={(e) => setData({ ...data, password: e.target.value })}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
