import { useNavigate } from "react-router-dom";

function Logout() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
        <button onClick={handleLogout}>Logga ut</button>

    )

}

export default Logout;