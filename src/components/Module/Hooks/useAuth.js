import { useContext } from "react";
import { UserAuthContext } from "../../UserAuthentication/AuthContext/UserResponse";

const useAuth = () => {
    const user = useContext(UserAuthContext);
    return user;
};

export default useAuth;