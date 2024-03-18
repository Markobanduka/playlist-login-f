import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",

        backgroundColor: "#121212",
        minHeight: "100vh",
      }}
    >
      {!!user && (
        <h2
          style={{
            color: "white",
            textAlign: "center",
            padding: "20px",
          }}
        >
          Hi {user.name}!
        </h2>
      )}
      <div className="playlist">
        <iframe
          style={{ aspectRatio: "16/9", width: "100%" }}
          className="iframe"
          src="https://www.youtube.com/embed/videoseries?list=PLC88cLhd1Qkmt3quxO8COJzyKW7ZRMQa8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;

// https://playlist-login.onrender.com

// const Dashboard = () => {
//   const { user } = useContext(UserContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       // Redirect to login if user is not authenticated
//       navigate("/login");
//     }
//   }, [user, navigate]);

//   if (!user) {
//     // Return null if user is not authenticated
//     return null;
//   }
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {!!user && <h2>Hi {user.name}!</h2>}
//     </div>
//   );
// };

// export default Dashboard;
