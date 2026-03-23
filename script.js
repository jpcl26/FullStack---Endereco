// script.js

// Function to fetch address data from ViaCEP API
async function fetchAddress(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        if (!response.ok) throw new Error('Error fetching data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Example usage:
// const cep = '01001-000'; // Example CEP
// fetchAddress(cep).then(data => console.log(data));