import React, { useState, useContext } from 'react';
import { View, Text } from "react-native"
import { TextInput } from 'react-native-paper';
import { Button } from "react-native-paper"
import Image from "../RegisterScreen/ImageBackground"
import styled from "styled-components/native"
import { AuthenticationContext } from '../authentication/authenticationContext';


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

const Login = ({ navigation }) => {
    const { onLogin, isLoading, error } = useContext(AuthenticationContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    // console.log(error)
    return (
        <Image>
            <View>
                <Title>Login to app</Title>
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
                    textContentType="password"
                    autoCapitalize="none"
                    onChangeText={password => setPassword(password)}
                />
            </LoginContainer>
            <ButtonsContainer>
                <Button icon="exit-to-app" onPress={() => navigation.goBack()}>
                    Go back
  </Button>
                <Button icon="arrow-right-circle-outline" onPress={() => onLogin(email, password)}>
                    Login
  </Button>

            </ButtonsContainer>

            {error && (
                <View>
                    <Text>error</Text>
                </View>
            )}
        </Image>
    )
}

export default Login