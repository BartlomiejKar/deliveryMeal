import { locations } from "../data/location";
import camelize from "camelize";



export const LocationService = (searchLocation) => {
    return new Promise((reject, resolve) => {
        const location = locations[searchLocation]
        if (!searchLocation) {
            reject("not found data")
        } else {
            resolve(location)
        }
    })
}

export const TransformLocationService = (result) => {
    const { geometry = {} } = camelize(result.results)[0];
    const { lng, lat } = geometry.location;
    return { lng, lat }
}