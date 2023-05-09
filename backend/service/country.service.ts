import { Country } from "../domain/model/country";
import countryDb from "../domain/data-access/country.db";

const getAllcountries = (): Country[] => countryDb.getAllcountries();

export default { getAllcountries};

