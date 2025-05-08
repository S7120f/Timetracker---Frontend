import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
    children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {

    const user = localStorage.getItem("user");

    if(!user) {
        // om ingen användare finns, skicka till og in 
        return <Navigate to="/" replace />;
    }

    //Annars visa barnkomponenten (t.ex. CategoryPage)
    return <>{children}</>;

}

export default ProtectedRoute;