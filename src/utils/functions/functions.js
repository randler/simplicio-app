export function currencyConvert(value, currency = 'us') {
    switch (currency) {
        case 'us':
            return parseFloat(value.value.replace('R$ ', '').replace(',', '.'))
        default:
            return value;
    }
}

export function formatCurrency(value, currency = 'pt-br') {
    switch (currency) {
        case 'pt-br':
            return  `R$ ${value.toLoacaleString('pt-BR')}`
    
        default:
            return `U$ ${value}`
    }
}

export function formatString(valueString) {
    return valueString.value.replace('R$ ', '').replace(',', '.')
}