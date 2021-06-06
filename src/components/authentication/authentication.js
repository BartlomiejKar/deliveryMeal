
import firebase from "../../firebase"



export const LoginRequest = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}


export const RegisterRequest = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}