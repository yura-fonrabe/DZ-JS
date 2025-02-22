let res = prompt('Введите язык (en, ru, de) :');

switch (true) {
    case res === 'en':
        console.log('Good afternoon!');
        break;
    case res === 'ru':
        console.log('Добрый день!');
        break;
    case res === 'de':
        console.log('Guten Tag!');
        break;
    default:
        console.log('Ciao!')
}