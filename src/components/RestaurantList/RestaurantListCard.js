import React from 'react';
import styled from "styled-components/native";
import { Card } from "react-native-paper"
import burger from "../../../assets/burgers.jpg"
import { Text, View, Image } from 'react-native';
import star from "../../../assets/star.png"


const CardComponent = styled(Card)
    `
padding: 10px;
border-radius: 5px;
margin: 6px;
background-color: #f8f9fa;
`;
const TitleComponent = styled(Text)
    `
font-family: ${(props) => props.theme.fonts.body};
padding-top: 10px;
font-size: ${(props) => props.theme.fontSizes.title}
`;

const Info = styled(View)
    `
display:flex;
flex-direction: column;
`;

const Adress = styled(Text)
    `
font-family: ${(props) => props.theme.fonts.heading};
font-size:${(props) => props.theme.fontSizes.caption} ;
margin-top: 10px;
`

const Star = styled(Image)
    `
margin-top:10px
`;
const Row = styled(View)
    `
display: flex;
flex-direction: row;
`;
const RestaurantListCard = ({ Restaurant = {} }) => {
    const {
        name = "Some restaurant",
        icon,
        photo = burger,
        adress = "random 1100",
        rating = 4,
    } = Restaurant

    const ratingStar = Array.from(new Array(Math.ceil(rating)))
    const mapRating = ratingStar.map(() => (
        <Star style={{ width: 20, height: 20, margin: 1 }} source={star} />
    ))

    return (
        <CardComponent key={name}>
            <Card.Cover source={photo} />
            <Card.Content>
                <Info>
                    <TitleComponent>{name}</TitleComponent>
                    <Row>
                        {mapRating}
                    </Row>
                    <Adress>{adress}</Adress>
                </Info>
            </Card.Content>
        </CardComponent>
    )
}





export default RestaurantListCard;