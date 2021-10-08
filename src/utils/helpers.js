export const renderAge = n => {
    const arr = ['год', 'года', 'лет']
    return `${n} ${arr[(n % 100 > 4 && n % 100 < 20) ? 2
        : [2, 0, 1, 1, 1, 2][(n % 10 < 5) ? n % 10 : 5]]}`;
}