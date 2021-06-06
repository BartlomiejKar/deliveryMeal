import React from 'react';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import Image from "./ImageBackground"


const LoginButton = styled(Button)
    `
margin-bottom: 15px
`
const RegisterButton = styled(Button)

    `
`

const RegisterScreen = ({ navigation }) => {
    return (
        <Image>
            <LoginButton icon="login" mode="contained" color="black" onPress={() => navigation.navigate("Login")}>
                Login
  </LoginButton>
            <RegisterButton icon="account" mode="contained" onPress={() => navigation.navigate("RegisterUser")}>
                Register
  </RegisterButton>

        </Image >
    )
}

export default RegisterScreen