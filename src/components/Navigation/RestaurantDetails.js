import React, { useState } from 'react';
import RestaurantListCard from "../RestaurantList/RestaurantListCard"
import SafeAreaComponent from "../SafeArea/SafeArea";
import { ScrollView } from "react-native"
import { List } from 'react-native-paper';


const RestaurantDetails = ({ route }) => {
    const { restaurant } = route.params;
    const [dinner, setDinner] = useState(false);
    const [drink, setDrink] = useState(false);
    const [coctails, setCoctails] = useState(false);
    const [pizza, setPizza] = useState(false)

    return (
        <SafeAreaComponent>
            <ScrollView style={{ backgroundColor: "white" }}>
                <RestaurantListCard restaurant={restaurant} />
                <List.Section title="Menu">
                    <List.Accordion
                        title="Dinner"
                        left={props => <List.Icon {...props} icon="hamburger" />}
                        expanded={dinner}
                        onPress={() => setDinner(!dinner)}
                    >
                        <List.Item title="Eggs" />
                        <List.Item title="Chicken with fries" />
                    </List.Accordion>
                    <List.Accordion
                        title="Drinks"
                        left={props => <List.Icon {...props} icon="cup" />}
                        expanded={drink}
                        onPress={() => setDrink(!drink)}
                    >
                        <List.Item title="Coca-Cola" />
                        <List.Item title="Beer" />
                    </List.Accordion>
                    <List.Accordion
                        title="Pizza"
                        left={props => <List.Icon {...props} icon="pizza" />}
                        expanded={pizza}
                        onPress={() => setPizza(!pizza)}
                    >
                        <List.Item title="Cesar" />
                        <List.Item title="Chicago" />
                        <List.Item title="Hawai" />
                    </List.Accordion>
                    <List.Accordion
                        title="Coctails"
                        left={props => <List.Icon {...props} icon="beer" />}
                        expanded={coctails}
                        onPress={() => setCoctails(!coctails)}
                    >
                        <List.Item title="Rum" />
                        <List.Item title="Bacardi" />
                    </List.Accordion>
                </List.Section>
            </ScrollView>
        </SafeAreaComponent>
    )
}

export default RestaurantDetails