const fs = require('fs');

let now = new Date();

console.log(`Запуск: ${now}`);

fs.appendFile('./launch.logs', `Запуск: ${now}\n`, function(error) {
    if (error) throw error;
});