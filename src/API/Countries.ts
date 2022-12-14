import axios from "axios"
import { ONE_COUNTRY_DATA_URL, ONE_COUNTRY_DATA_URL_WITH_DATE } from "../Constants";

export const getCountryData = async (country: string) => {
    const response = await axios.get(ONE_COUNTRY_DATA_URL(country));
    return response.data as Country[];
}

export const getCountryDataWithDate = async (country: string, date: string) => {
    const response = await axios.get(ONE_COUNTRY_DATA_URL_WITH_DATE(country, date));
    return response.data as Country;
}