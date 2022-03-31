const loadCountriesData = () => {
    fetch('https://restcountries.com/v2/all')
     .then(res => res.json())
     .then (data => getCountriesData(data))
}

const getCountriesData = countries => {
    console.log(countries);
    const singleCountry = countries.map(country => displayCountry(country));
    console.log(singleCountry);
    const countryContainer = document.getElementById('countries');
    countryContainer.innerHTML = singleCountry.join(' ');

}
const displayCountry = country => {
    return `
    <div> 
    <h2>${country.name}</h2>
    </div>
    `
}
loadCountriesData()