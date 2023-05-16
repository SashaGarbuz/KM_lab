const fetch = import('node-fetch');
// Функція для отримання даних про країну
async function getCountryData(countryName) {
    try {
        // Формування URL запиту до REST Countries API з використанням назви країни
        const url = `https://restcountries.com/v3.1/name/${countryName}`;

        // Виконання запиту і отримання відповіді
        const response = await import('node-fetch').then((module) => module.default(url));

        // Перетворення відповіді в формат JSON
        const data = await response.json();

        // Отримання потрібних даних з об'єкта
        const country = data[0].name.common;
        const capital = data[0].capital[0];
        const region = data[0].region;

        // Виведення даних в консоль
        console.log('Назва країни:', country);
        console.log('Назва столиці:', capital);
        console.log('Назва регіону:', region);
    } catch (error) {
        console.log('Сталася помилка:', error);
    }
}

// Зчитування назви країни з клавіатури
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введіть назву країни: ', (countryName) => {
    // Виклик функції для отримання даних про країну
    getCountryData(countryName);
    rl.close();
});
