import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Register successful");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
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
        <Form onSubmit={registerUser}>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Enter name..."
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </InputGroup>
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
          <Button type="submit">Register</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default Register;

// const Register = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const registerUser = async (e) => {
//     e.preventDefault();
//     const { name, email, password } = data;
//     try {
//       const { data } = await axios.post("/register", {
//         name,
//         email,
//         password,
//       });
//       if (data.error) {
//         toast.error(data.error);
//       } else {
//         setData({});
//         toast.success("Register successful");
//         navigate("/login");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={registerUser}>
//         <label>Name</label>
//         <input
//           type="text"
//           placeholder="Enter name..."
//           value={data.name}
//           onChange={(e) => setData({ ...data, name: e.target.value })}
//         />
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
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
