import { Country } from "../model/country";

let currentId = 1;

const countries: Country[] = [
    Country.create( currentId++, "rojen"),
    Country.create( currentId++, "rrr"),
];


const getAllcountries = (): Country[] => {
    return countries;
}
export default {
    getAllcountries,
};