const URI = 'API_URL_HERE';

const getData = async () => {

    try{
        const response = await fetch(URI);
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error) {
        console.error('Error get Data',error);
    } 
}

export default getData;