import React, { useState, useContext } from 'react';
import { View, Text } from "react-native"
import { TextInput } from 'react-native-paper';
import { Button } from "react-native-paper"
import Image from "../RegisterScreen/ImageBackground"
import styled from "styled-components/native"
import { AuthenticationContext } from '../authentication/authenticationContext';
import { colors } from "../ThemeProvider/theme/colors"


const LoginContainer = styled(View)
    `
padding:10px
`
const Title = styled(Text)
    `
font-size:36px;
text-align: center;
letter-spacing:1px
`
const ButtonsContainer = styled(View)
    `
display:flex;
flex-direction:row;
justify-content: space-between
`
const ErrorContainer = styled(View)
    `
border: 1px solid;
margin-top: 20px;
margin-left: 20px;
margin-right: 20px;
padding: 20px;
background-color: ${colors.ui.error}
`
const Register = ({ navigation }) => {
    const { onRegister, error } = useContext(AuthenticationContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    return (
        <Image>
            <View>
                <Title>Register User</Title>
            </View>
            <LoginContainer>
                <TextInput
                    label="Email"
                    value={email}
                    mode="outlined"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    onChangeText={email => setEmail(email)}
                />
                <TextInput
                    label="password"
                    value={password}
                    mode="outlined"
                    secureTextEntry
                    textContentType="password"
                    autoCapitalize="none"
                    onChangeText={password => setPassword(password)}
                />
                <TextInput
                    label="Repeat password"
                    value={repeatPassword}
                    mode="outlined"
                    secureTextEntry
                    textContentType="password"
                    autoCapitalize="none"
                    onChangeText={repeatPassword => setRepeatPassword(repeatPassword)}
                />
            </LoginContainer>
            <ButtonsContainer>
                <Button icon="exit-to-app" onPress={() => navigation.goBack()}>
                    Go back
  </Button>
                <Button icon="account" onPress={() => onRegister(email, password, repeatPassword)}>
                    Register
  </Button>

            </ButtonsContainer>

            {error && (
                <ErrorContainer>
                    <Text style={{ fontSize: 20 }}>{error}</Text>
                </ErrorContainer>
            )}
        </Image>
    )
}


export default Register