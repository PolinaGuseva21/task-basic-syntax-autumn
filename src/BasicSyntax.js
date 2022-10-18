export function romanToInteger(str) {
    let result = 0;
    for (let i = 0; i < str.length - 1; i++) {
        if (getNumber(str[i]) > getNumber(str[i + 1])) {
            result += getNumber(str[i]);
        } else {
            if (getNumber(str[i]) == getNumber(str[i + 1])) {
                result += getNumber(str[i]) + getNumber(str[i + 1]);
                i++;
            } else {
                result -= getNumber(str[i]);
            }
        }
        if (i == str.length - 2) {
            result += getNumber(str[i + 1]);
        }
    }
    return result;
}

function getNumber(str) {
    switch (str) {
        case 'M':
            return 1000;
        case 'D':
            return 500;
        case 'C':
            return 100;
        case 'L':
            return 50;
        case 'X':
            return 10;
        case 'V':
            return 5;
        case 'I':
            return 1;
        default:
            return 0;
    }
}
