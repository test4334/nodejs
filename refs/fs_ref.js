const fs = require('fs');
const path = require('path');

mypath =  path.join(__dirname, 'notes','myNotes.txt');
//file system
// fs.mkdir(path.join(__dirname,'notes'), err => {
// if (err) throw err

// console.log('Папка была создана')
// })
// fs.writeFile(path.join(__dirname, 'notes','myNotes.txt'),
// 'Hello world!', err=>{
//     if (err) throw err
//     console.log('Файл был создан!')
//     fs.appendFile(
//         path.join(__dirname, 'notes','myNotes.txt'),
//         ' new content', err => {
//             if (err) throw err
//             console.log('Файл обновлен!')
//             readData();
//         }) 
// } )
// function readData(){
// fs.readFile(mypath,'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })
// }

fs.rename(mypath, path.join(__dirname, 'notes','myNotesRename.txt'), err => {
    if (err) throw err
    console.log('Файл переименован!')
} )