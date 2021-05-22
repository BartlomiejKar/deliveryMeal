import React from 'react';
import styled from "styled-components/native"
import { Card, Title } from "react-native-paper"
import burger from "../../../assets/burgers.jpg"


const CardComponent = styled(Card)
    `
padding: 10px;
border-radius: 5px;
margin: 6px;
background-color: #f8f9fa;
`;
const TitleComponent = styled(Title)
    `
padding: 10px;
margin: auto

`;
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
                <TitleComponent>{name}</TitleComponent>
            </Card.Content>
        </CardComponent>
    )
}





export default RestaurantListCard;