let convert = (sum, stavka) => sum * stavka;

function recalculate(summa_conv, currency_in, currency_out) {
    
    let summa = Number(summa_conv);
    
    if (!(summa === NaN)){

        const ST_RUB_USD = 1 / 60;
        const ST_RUB_EUR = 1 / 65;
        const ST_RUB_IENN = 25;
        const ST_USD_RUB = 60;
        const ST_USD_EUR = 1.1;
        const ST_USD_IENN = 1500;
        const ST_EUR_RUB = 65;
        const ST_EUR_USD = 1 / 1.1;
        const ST_EUR_IENN = 1625;
        const ST_IENN_RUB = 1 / 25;
        const ST_IENN_USD = 1  / 1500;
        const ST_IENN_EUR = 1 / 1625;

        //по условию задачи ставки конвертации хранятся внутри функции

        switch (true) {
            case currency_in === 'RUB': 
                switch (true) {
                    case currency_out === 'RUB':
                        return summa;
                    case currency_out === 'USD':
                        return convert(summa, ST_RUB_USD);
                    case currency_out === 'EUR':
                        return convert(summa, ST_RUB_EUR);
                    case currency_out === 'IENN':
                        return convert(summa, ST_RUB_IENN);
                    default:
                        return null;
                }
            case currency_in === 'USD':
                switch (true) {
                    case currency_out === 'RUB':
                        return convert(summa, ST_USD_RUB);
                    case currency_out === 'USD':
                        return summa;
                    case currency_out === 'EUR':
                        return convert(summa, ST_USD_EUR);
                    case currency_out === 'IENN':
                        return convert(summa, ST_USD_IENN);
                    default:
                        return null;
                }
            case currency_in === 'EUR':
                switch (true) {
                    case currency_out === 'RUB':
                        return convert(summa, ST_EUR_RUB);                       
                    case currency_out === 'USD':
                        return convert(summa, ST_EUR_USD);
                    case currency_out === 'EUR':
                        return summa;
                    case currency_out === 'IENN':
                        return convert(summa, ST_EUR_IENN);
                    default:
                        return null;
                }
            case currency_in === 'IENN':
                switch (true) {
                    case currency_out === 'RUB':
                        return convert(summa, ST_IENN_RUB);    
                    case currency_out === 'USD':
                        return convert(summa, ST_IENN_USD);
                    case currency_out === 'EUR':
                        return convert(summa, ST_IENN_EUR);
                    case currency_out === 'IENN':
                        return summa;
                    default:
                        return null;
                }
            default:
                return null;
        }
    }else{
        return 'Вы ввели некорректное число!';
    }
}

let summa_conv = prompt('Введите сумму средств:');
let currency_in = prompt('Введите валюту средств (RUB, USD, EUR, IENN):');
let currency_out = prompt('Введите валюту целевую (RUB, USD, EUR, IENN):');

console.log(recalculate(summa_conv, currency_in, currency_out));