import {useAuth0} from "@auth0/auth0-react";
import styles from './LoginButton.module.css'
import {useEffect} from "react";

const LoginButton = () => {
    const {user, loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently, getIdTokenClaims} = useAuth0();

    useEffect(() => {
        const fetchToken = async () => {
            const token = await getAccessTokenSilently();
            localStorage.setItem('token', token);
        }
        fetchToken();
    }, [])

    const handleLogout = async () => {
        localStorage.removeItem('token');
        await logout({logoutParams: {returnTo: window.location.origin}})
    }

    useEffect(() => {
        console.log(user);
    }, [user])


    return (
        <div className={styles['LoginButton']}>
            {isAuthenticated
                ? <button onClick={() => handleLogout()}> Log out </button>
                : <button onClick={() => loginWithRedirect()}>Log In</button>
            }
        </div>

    );
};

export default LoginButton;