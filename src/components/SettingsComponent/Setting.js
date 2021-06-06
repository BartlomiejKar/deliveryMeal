import React, { useContext } from 'react';
import { View, Text } from "react-native"
import styled from "styled-components/native"
import { Avatar, Button } from 'react-native-paper';
import SafeAreaComponent from "../SafeArea/SafeArea"
import { AuthenticationContext } from "../authentication/authenticationContext"


const SettingWrapper = styled(View)
    `
    flex:1;
display: flex;
flex-direction: column;
background-color: white;
padding:50px;
`
const AvatarWrapper = styled(View)
    `
    flex:1;
    margin: auto
`
const Setting = () => {
    const { onLogout, user } = useContext(AuthenticationContext)
    console.log(user.email)
    return (
        <SafeAreaComponent>
            <SettingWrapper>
                <AvatarWrapper>
                    <Avatar.Icon size={200} icon="account-edit" />
                    <Text style={{
                        fontSize: 46,
                    }}>
                        {user.email}
                    </Text>
                </AvatarWrapper>
                <Button icon="logout" mode="contained" onPress={() => onLogout()}>
                    Logut
  </Button>
            </SettingWrapper>
        </SafeAreaComponent>
    )
}

export default Setting;