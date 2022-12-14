import { AxiosError } from "axios";
import { useRef } from "react"
import { useSetRecoilState } from "recoil";
import { getCountryData, getCountryDataWithDate } from "../../API/Countries";
import { errorAlert, successAlert } from "../../helper/Alert";
import { countriesAtom } from "../../recoil/atoms/Countries";

const Form = () => {
    const countryRef = useRef<HTMLInputElement>(null);
    const dateRef = useRef<HTMLInputElement>(null);

    const setCountries = useSetRecoilState(countriesAtom);

    const makeItToday = () => {
        const today = new Date();
        // dateRef should be today
        const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        dateRef.current!.value = date;
        const country = countryRef.current?.value;
        // fire the request if only country is selected
        console.log({country: country !== undefined && country !== ""});
        if ( country !== undefined && country !== "" ) {
            console.log(country !== undefined && country !== "");
            handleSubmit(new Event("submit") as unknown as React.FormEvent<HTMLFormElement>);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const country = countryRef.current?.value;
        let date = dateRef.current?.value;
        if ( country === undefined || country === "" ) {
            errorAlert("Please enter a country");
            return;
        }
        if ( date === undefined || date === "" ) {
            getCountryData(country).then((data) => {
                setCountries(data);
                successAlert(`Found ${data.length} rows for ${country}`);
            }).catch((error: unknown) => 
            {
                if ( error instanceof AxiosError ) {
                    const { Error } = error.response?.data;
                    errorAlert(Error).then((countrySelected) => {
                        if ( countrySelected !== undefined && countrySelected !== "")
                        countryRef.current!.value = countrySelected;
                   });
                }
                else {
                    console.log(error);
                }
                setCountries([]);
            });
        }
        else {
            date = date.split("-").reverse().join("-");
            getCountryDataWithDate(country, date).then((data) => {
                let countries = new Array<Country>();
                countries.push(data);
                setCountries(countries);
                successAlert(`Found ${countries.length} rows for ${country} on ${date}`);
            }
            ).catch((error: unknown) =>
            {
                if ( error instanceof AxiosError ) {
                    const { Error } = error.response?.data;
                    const countrySelected =  errorAlert(Error)
                    console.log({countrySelected});
                    errorAlert(Error).then((countrySelected) => {
                        if ( countrySelected !== undefined && countrySelected !== "")
                        countryRef.current!.value = countrySelected;
                   });
                }
                else {
                    console.log(error);
                }
                setCountries([]);
            }
            );
        }            
    }

    return (
        <div className="flex justify-center p-4 text-center rounded-lg md:flex md:items-center md:p-6 ">
            <form onSubmit={handleSubmit} className="max-w-3xl">
                <div className="mb-6">
                    <label  htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                    <input ref={countryRef} type="text" id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                </div>
                <div className="mb-6">
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date (optional)</label>
                    <input ref={dateRef} type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                <button type="button" onClick={makeItToday} className="mx-12 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Aujourd'hui</button>
            </form>
        </div>
    )
}

export default Form