export const getNumberOfDaysInMonth = (year : number, month : number) => {
    return new Date(year, month+1, 0).getDate();
}

export const toStringMinutesLeadWith0 = (nbr : number) => {
    if(nbr < 10){
        return `0${nbr}`;
    }
    return `${nbr}`;
}

export const getToday = () => {
    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    return today;
}