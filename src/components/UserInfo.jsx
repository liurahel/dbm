import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

function UserInfo(props) {
    const navigate = useNavigate();
    const goToProfile = () => {
        navigate("/auth/login");
    };

    return (
    <nav
        onClick={goToProfile}
        style={{...props.style}}
        className="cursor-pointer flex flex-col items-center group"
    >
        <User className="sm:w-6 sm:h-6 w-8 h-8 text-current group-hover:scale-105 transition-transform" />
    </nav>  
  );
}

export default UserInfo;