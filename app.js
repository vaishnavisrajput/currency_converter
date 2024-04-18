const url = 'https://currency-converter13.p.rapidapi.com/convert?from=USD&to=BRL&amount=1';



const dropDowns = document.querySelectorAll(".dropdown select")

for (let select of dropDowns){
    for(code in countryList){
        const options = document.createElement("option");
        options.innerText = code;
        options.value = code;
        select.append(options);;
    }
    
}











/*const url = 'https://currency-converter13.p.rapidapi.com/convert?from=USD&to=BRL&amount=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59218c6c3amsh038d614cef0cdeep13b11ejsnf7275c34d1cc',
		'X-RapidAPI-Host': 'currency-converter13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/