let desc = document.getElementById("desc")
let name = document.getElementById("name")
let username = document.getElementById("username")
let passwordLength = document.getElementById("passwordLength")
let password = document.getElementById("password")
let saveButton = document.getElementById("saveButton")
let reloadButton = document.getElementById("reloadButton")

const generatePassword = (len) => {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numeric = "0123456789"
    const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`"

    const data = lowerAlphabet + upperAlphabet + numeric + symbol
    let generator = '';
    for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
    }
    return generator
}

const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
}

const savePassword = () => {
  //document.title = password.value
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent 
    (`
    ======================
    [WARNING CONFIDENTIAL]
    ======================\n
    please do not share to your friend !\n\n
    Author : ${name.value}\n
    Platform : ${desc.value}\n
    Username : ${username.value}\n
    Password : ${password.value}`)
    )
    saveButton.setAttribute('download', 'TypePass.txt')
}

const onReload = () => {
    location.reload();
    return false;
}