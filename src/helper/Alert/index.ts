import Swal from 'sweetalert2'

export const successAlert = (message: string) => {
    Swal.fire({
        icon: 'success',
        title: 'Success',
        text: message,
    })
}

export const errorAlert = async (message: string) => {
    let text = message.split("disponibles : ")[1];
    let first = message.split("disponibles : ")[0];
    let countries:string[] = [];
    if (text !== undefined) {
        countries = text.split("\n");
    }
    let countrySelected = "";
    await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: first,
        // select the countries that are available with options from countries array
        footer: countries.length > 0 ? '<select id="countries" class="form-control"><option value="0">Select a country</option>' + countries.sort((a,b)=>a.localeCompare(b)).map((country) => `<option value="${country}">${country}</option>`).join('') + '</select>' : ""

        }).then((result) => {
        if (result.isConfirmed && countries.length > 0) {
            const country = document.getElementById('countries') as HTMLSelectElement;
            const selectedCountry = country.options[country.selectedIndex].value;
            if (selectedCountry !== "0") {
                // return the selected country
                countrySelected = selectedCountry;
                return selectedCountry;
                // where can I get the selected country?
                // I want to use it in the component that calls this function
                // I tried to use a promise but it didn't work
                
            }
        }
    })
    return countrySelected;
}
