import { useAuth } from "../../auth/AuthProvider";
import { signOut } from "../../services/api_auth";
import {NavbarView} from "./NavbarView";

export interface NavbarProps {
    children: React.ReactNode
}

function Navbar({ children }: NavbarProps) {
    const auth = useAuth()
    function handleSignOut(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault();
        const authToken = auth.getRefreshToken() as unknown as string
        signOut(authToken).then(() => {
            auth.signout()
        });
    }


  return (
    <NavbarView
    handleSignOut={handleSignOut}
    >
        {children}
    </NavbarView>
  )
}

export default Navbar


