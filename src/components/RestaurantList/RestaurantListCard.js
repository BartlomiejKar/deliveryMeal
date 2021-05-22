import React from 'react';
import styled from "styled-components/native";
import star from "../../../assets/star.svg"
import { Card, Title } from "react-native-paper"
import burger from "../../../assets/burgers.jpg"
import { View } from 'react-native';
import { SvgXml } from "react-native-svg"


const CardComponent = styled(Card)
    `
padding: 10px;
border-radius: 5px;
margin: 6px;
background-color: #f8f9fa;
`;
const TitleComponent = styled(Title)
    `
    font-family: ${(props) => props.theme.fonts.body};
padding: 10px;
margin: auto

`;

const Info = styled(View)
    `
padding: ${(props) => props.theme.space[3]}
`;

const Adress = styled.p`
text-align: left;
font-family: ${(props) => props.theme.fonts.heading};
font-size:${(props) => props.theme.fontSizes.caption} ;
`
const RestaurantListCard = ({ Restaurant = {} }) => {
    const {
        name = "Some restaurant",
        isOpen = true,
        icon,
        photo = burger,
        adress = "random 1100",
        rating = 4,
    } = Restaurant

    return (
        <CardComponent>
            <Card.Cover source={photo} />
            <Card.Content>
                <Info>
                    <TitleComponent>{name}</TitleComponent>
                    <SvgXml xml={star} />
                    <Adress>{adress}</Adress>
                </Info>
            </Card.Content>
        </CardComponent>
    )
}





export default RestaurantListCard;