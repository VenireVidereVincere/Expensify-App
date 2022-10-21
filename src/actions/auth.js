import { GoogleAuthProvider, getAuth, signInWithRedirect, signInWithPopup, signOut } from "firebase/auth";

export const login = (uid) => ({
    type: "LOGIN",
    uid
})

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogin = (navigate, url, dispatch) => {
    return async () => {
        const googleAuthProvider = new GoogleAuthProvider();
        const auth = getAuth()
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            const uid = result.user.uid
            if(url === "/"){
                navigate("/dashboard")
            }
            dispatch(login(uid))
            
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential_1 = GoogleAuthProvider.credentialFromError(error);
        }
    }
}

export const startLogout = (navigate, dispatch) => {
    return async () => {
        navigate("/")
        dispatch(logout())
        return signOut(getAuth())
    }
}


