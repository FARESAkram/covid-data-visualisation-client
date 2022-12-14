const API_BASE_URL = 'https://covid-data-visualisation-api-production-ee9b.up.railway.app/api';

export const ONE_COUNTRY_DATA_URL = (country:string) =>  `${API_BASE_URL}/oneCountryData?country=${country}`;
export const ONE_COUNTRY_DATA_URL_WITH_DATE = (country:string, date:string) =>  `${API_BASE_URL}/oneCountryDataWithDate?country=${country}&date=${date}`;