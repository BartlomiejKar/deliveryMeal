
import firebase from "../../firebase"
// import firebase from "firebase/app"


export const LoginRequest = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    // firebase.auth().signInWithEmailAndPassword("user@o2.pl", "123456")
}


