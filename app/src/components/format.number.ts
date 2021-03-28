export const formatNumber = (number : number) : string => {
    if(`${number}`.length > 6) {
        return `${Math.floor(number / 1000000)}m`
    }
    else if(`${number}`.length > 3) {
        return `${Math.floor(number / 1000)}k`
    } else {
        return `${number}`;
    }
}