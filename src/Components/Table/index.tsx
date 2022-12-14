
type OwnProps = {
    countries: Country[];
}

const CountriesTable = ({ countries }: OwnProps) => {
    return (

<div className="overflow-x-auto relative mx-5">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    Date
                </th>
                <th scope="col" className="py-3 px-6">
                    Country
                </th>
                <th scope="col" className="py-3 px-6">
                    infectes
                </th>
                <th scope="col" className="py-3 px-6">
                    deces
                </th>
                <th scope="col" className="py-3 px-6">
                    guerisons
                </th>
                <th scope="col" className="py-3 px-6">
                    TauxDeces
                </th>
                <th scope="col" className="py-3 px-6">
                    TauxGuerision
                </th>
                <th scope="col" className="py-3 px-6">
                    TauxInfection
                </th>
            </tr>
        </thead>
        <tbody>
            {countries.map((country,index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {country.date}
                    </th>
                    <td className="py-4 px-6 text-sm">
                        {country.pays}
                    </td>
                    <td className="py-4 px-6 text-sm">
                        {country.infectes}
                    </td>
                    <td className="py-4 px-6 text-sm">
                        {country.deces}
                    </td>
                    <td className="py-4 px-6 text-sm">
                        {country.guerisons}
                    </td>
                    <td className="py-4 px-6 text-sm">
                        {country.tauxDeces}
                    </td>
                    <td className="py-4 px-6 text-sm">
                        {country.tauxGuerison}
                    </td>
                    <td className="py-4 px-6 text-sm">
                        {country.tauxInfecte}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    )
}

export default CountriesTable;
