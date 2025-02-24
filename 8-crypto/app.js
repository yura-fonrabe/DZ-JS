/* используем метод шифрофания с помощью кодового слова */
const str_in   = 'abcdefghijklmnopqrstuvwxyz1234567890';
const str_out  = 'fonrabe1234567890cdghijklmpqstuvwxyz';

function crypto (array_1) {
    
    let word = '';
    for (let i = 0; i < array_1.length; i++) {
        
        a = array_1[i];
        index = str_in.indexOf(a);
        word += str_out[index];
    }
    return word;
}
 
function check (password, psw_check) {

    let word = '';
    let arr = password.split('');
    
    for (let i = 0; i < arr.length; i++) {

        a = arr[i];
        index = str_out.indexOf(a);
        word += str_in[index];
    }
    
    if (word === psw_check) {
        return true;
    }
    return false;
}

// -------------------------------------------------------------------------------------
let psw = prompt('Введите пароль латиницей:').toLocaleLowerCase();
let password = crypto(psw.split(''));
console.log(password);

let psw_check = prompt('Введите пароль для проверки латиницей:').toLocaleLowerCase();
console.log(check(password, psw_check));