//Работаем со строкой как с массивом символов
function crypto(word) {

    let ind_sr = Math.floor(word.length / 2);
    let arr1 = word.slice(0, ind_sr);
    let arr2 = word.slice(ind_sr);

    let ind_1 = Math.floor(arr1.length / 2);
    let ind_2 = Math.floor(arr2.length / 2);

    [arr1[0], arr1[ind_1]] = [arr1[ind_1], arr1[0]];
    [arr2[0], arr2[ind_2]] = [arr2[ind_2], arr2[0]];

    return arr2.concat(arr1);
}

function check(password, psw_check) {

    if (!password || !psw_check) {
        return false
    }
    return password === crypto(psw_check);
}

// -------------------------------------------------------------------------------------
let psw = prompt('Введите пароль латиницей:').toLocaleLowerCase();
let encryptedPassword = crypto(psw);
let psw2 = prompt('Введите пароль латиницей:').toLocaleLowerCase();
console.log(check(psw2, encryptedPassword));