const countries = [
    { name: "Afghanistan", capital: "Kabul", flag: "https://flagcdn.com/af.svg" },
    { name: "Albania", capital: "Tirana", flag: "https://flagcdn.com/al.svg" },
    { name: "Algeria", capital: "Algiers", flag: "https://flagcdn.com/dz.svg" },
    { name: "Andorra", capital: "Andorra la Vella", flag: "https://flagcdn.com/ad.svg" },
    { name: "Angola", capital: "Luanda", flag: "https://flagcdn.com/ao.svg" },
    { name: "Argentina", capital: "Buenos Aires", flag: "https://flagcdn.com/ar.svg" },
    { name: "Armenia", capital: "Yerevan", flag: "https://flagcdn.com/am.svg" },
    { name: "Australia", capital: "Canberra", flag: "https://flagcdn.com/au.svg" },
    { name: "Austria", capital: "Vienna", flag: "https://flagcdn.com/at.svg" },
    { name: "Azerbaijan", capital: "Baku", flag: "https://flagcdn.com/az.svg" },
    { name: "Bahamas", capital: "Nassau", flag: "https://flagcdn.com/bs.svg" },
    { name: "Bahrain", capital: "Manama", flag: "https://flagcdn.com/bh.svg" },
    { name: "Bangladesh", capital: "Dhaka", flag: "https://flagcdn.com/bd.svg" },
    { name: "Belarus", capital: "Minsk", flag: "https://flagcdn.com/by.svg" },
    { name: "Belgium", capital: "Brussels", flag: "https://flagcdn.com/be.svg" },
    { name: "Belize", capital: "Belmopan", flag: "https://flagcdn.com/bz.svg" },
    { name: "Benin", capital: "Porto-Novo", flag: "https://flagcdn.com/bj.svg" },
    { name: "Bhutan", capital: "Thimphu", flag: "https://flagcdn.com/bt.svg" },
    { name: "Bolivia", capital: "Sucre", flag: "https://flagcdn.com/bo.svg" },
    { name: "Bosnia and Herzegovina", capital: "Sarajevo", flag: "https://flagcdn.com/ba.svg" },
    { name: "Botswana", capital: "Gaborone", flag: "https://flagcdn.com/bw.svg" },
    { name: "Brazil", capital: "Brasília", flag: "https://flagcdn.com/br.svg" },
    { name: "Brunei", capital: "Bandar Seri Begawan", flag: "https://flagcdn.com/bn.svg" },
    { name: "Bulgaria", capital: "Sofia", flag: "https://flagcdn.com/bg.svg" },
    { name: "Burkina Faso", capital: "Ouagadougou", flag: "https://flagcdn.com/bf.svg" },
    { name: "Burundi", capital: "Gitega", flag: "https://flagcdn.com/bi.svg" },
    { name: "Cambodia", capital: "Phnom Penh", flag: "https://flagcdn.com/kh.svg" },
    { name: "Cameroon", capital: "Yaoundé", flag: "https://flagcdn.com/cm.svg" },
    { name: "Canada", capital: "Ottawa", flag: "https://flagcdn.com/ca.svg" },
    { name: "Central African Republic", capital: "Bangui", flag: "https://flagcdn.com/cf.svg" },
    { name: "Chad", capital: "N'Djamena", flag: "https://flagcdn.com/td.svg" },
    { name: "Chile", capital: "Santiago", flag: "https://flagcdn.com/cl.svg" },
    { name: "China", capital: "Beijing", flag: "https://flagcdn.com/cn.svg" },
    { name: "Colombia", capital: "Bogotá", flag: "https://flagcdn.com/co.svg" },
    { name: "Comoros", capital: "Moroni", flag: "https://flagcdn.com/km.svg" },
    { name: "Congo", capital: "Brazzaville", flag: "https://flagcdn.com/cg.svg" },
    { name: "Costa Rica", capital: "San José", flag: "https://flagcdn.com/cr.svg" },
    { name: "Croatia", capital: "Zagreb", flag: "https://flagcdn.com/hr.svg" },
    { name: "Cuba", capital: "Havana", flag: "https://flagcdn.com/cu.svg" },
    { name: "Cyprus", capital: "Nicosia", flag: "https://flagcdn.com/cy.svg" },
    { name: "Czech Republic", capital: "Prague", flag: "https://flagcdn.com/cz.svg" },
    { name: "Denmark", capital: "Copenhagen", flag: "https://flagcdn.com/dk.svg" },
    { name: "Djibouti", capital: "Djibouti", flag: "https://flagcdn.com/dj.svg" },
    { name: "Dominican Republic", capital: "Santo Domingo", flag: "https://flagcdn.com/do.svg" },
    { name: "Ecuador", capital: "Quito", flag: "https://flagcdn.com/ec.svg" },
    { name: "Egypt", capital: "Cairo", flag: "https://flagcdn.com/eg.svg" },
    { name: "El Salvador", capital: "San Salvador", flag: "https://flagcdn.com/sv.svg" },
    { name: "Estonia", capital: "Tallinn", flag: "https://flagcdn.com/ee.svg" },
    { name: "Eswatini", capital: "Mbabane", flag: "https://flagcdn.com/sz.svg" },
    { name: "Ethiopia", capital: "Addis Ababa", flag: "https://flagcdn.com/et.svg" },
    { name: "Fiji", capital: "Suva", flag: "https://flagcdn.com/fj.svg" },
    { name: "Finland", capital: "Helsinki", flag: "https://flagcdn.com/fi.svg" },
    { name: "France", capital: "Paris", flag: "https://flagcdn.com/fr.svg" },
    { name: "Germany", capital: "Berlin", flag: "https://flagcdn.com/de.svg" },
    { name: "Ghana", capital: "Accra", flag: "https://flagcdn.com/gh.svg" },
    { name: "Greece", capital: "Athens", flag: "https://flagcdn.com/gr.svg" },
    { name: "Hungary", capital: "Budapest", flag: "https://flagcdn.com/hu.svg" },
    { name: "Iceland", capital: "Reykjavik", flag: "https://flagcdn.com/is.svg" },
    { name: "India", capital: "New Delhi", flag: "https://flagcdn.com/in.svg" },
    { name: "Indonesia", capital: "Jakarta", flag: "https://flagcdn.com/id.svg" },
    { name: "Ireland", capital: "Dublin", flag: "https://flagcdn.com/ie.svg" },
    { name: "Italy", capital: "Rome", flag: "https://flagcdn.com/it.svg" },
    { name: "Japan", capital: "Tokyo", flag: "https://flagcdn.com/jp.svg" },
    { name: "United Kingdom", capital: "London", flag: "https://flagcdn.com/gb.svg" },
    { name: "United States", capital: "Washington, D.C.", flag: "https://flagcdn.com/us.svg" }
];


const countrySelect = document.getElementById('countrySelect');
const countryName = document.getElementById('countryName');
const capital = document.getElementById('capital');
const countryFlag = document.getElementById('countryFlag');

function populateCountries() {
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name;
        option.textContent = country.name;
        countrySelect.appendChild(option);
    });
}

function displayCountryInfo() {
    const selectedCountry = countrySelect.value;
    const countryData = countries.find(country => country.name === selectedCountry);

    if (countryData) {
        countryName.textContent = countryData.name;
        capital.textContent = `Capital: ${countryData.capital}`;
        countryFlag.src = countryData.flag;
        countryFlag.style.display = 'block';
    } else {
        countryName.textContent = '';
        capital.textContent = '';
        countryFlag.style.display = 'none';
    }
}

countrySelect.addEventListener('change', displayCountryInfo);
populateCountries();