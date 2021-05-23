import { mocks, mockImages } from "../data/index";
import camelize from "camelize"


export const RestaurantService = (location = "51.219448,4.402464") => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location]
        if (!mock) {
            reject("no data")
        }
        resolve(mock)
    }
    )
}

export const ResultTransform = ({ results = [] }) => {
    const mapResults = results.map((restaurants) => {
        restaurants.photos = restaurants.photos.map((el) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
        });
        return {
            ...restaurants
        }
    })
    return camelize(mapResults)
}
