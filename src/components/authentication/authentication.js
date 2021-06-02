
import firebase from "../../firebase"

const LoginRequest = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
}

export default LoginRequest