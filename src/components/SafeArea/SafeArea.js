import styled from "styled-components/native"
import { SafeAreaView, StatusBar } from "react-native"

const SafeAreaComponent = styled(SafeAreaView)
    `
flex: 1;
background-color: #f8961e;
${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`
export default SafeAreaComponent