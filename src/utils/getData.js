const URI = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '909532ae4d5f7f3ccbaf9cef6ebacad5';



const getData = async (ciudad) => {

    const URL_API = `${URI}${ciudad}&appid=${API_KEY}`;

    try{
        const response = await fetch(URL_API);
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.error('Error get Data',error);
    } 
}

export default getData;