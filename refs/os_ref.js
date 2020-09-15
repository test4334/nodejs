const os = require('os');
//определить платформу
console.log(os.platform());
//архитиктуру
console.log(os.arch());

//возвращает объект с данными о ядрах
console.log(os.cpus());
//сколько свободной памяти
console.log(os.freemem());
//сколько всего памяти
console.log(os.totalmem());

//какая корневая директория
console.log(os.homedir());

/// sysntem uptime
console.log(os.uptime()/60);