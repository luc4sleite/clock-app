async function getIp() {
    try {
        const response = await fetch('https://api.ipify.org/?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function showLocation() {
    const ip = await getIp();
    const apiUrl = `https://api.ipbase.com/v2/info?apikey=6zya6oHfBkMRYp3iri5i2Ua4ZUEbeQlS0ekeo8Wf&language=en&ip=${ip}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        const city = data.data.location.city.name;
        const cityElement = document.getElementById("city");
        cityElement.textContent = city;
        
        const country = data.data.location.country.alpha2;
        const countryElement = document.getElementById("country");
        countryElement.textContent = country;
    } catch (error) {
        console.error(error);
        alert("It wasn't possible to get the current location");
    }
}

showLocation();
