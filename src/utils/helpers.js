export const renderAge = age => {
    if(age >= 5 && age <= 20) return `${age} лет`
    const stringAge = String(age)
    const lastSymb = Number(stringAge[stringAge.length - 1])
    if(lastSymb === 1) return `${age} год`
    if(lastSymb > 1 && lastSymb < 5) return `${age} года`
    return `${age} лет`
}

