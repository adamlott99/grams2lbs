const GRAMS_PER_POUND = 453.592;
const OUNCES_PER_POUND = 16;
const GRAMS_PER_OUNCE = GRAMS_PER_POUND / OUNCES_PER_POUND;

class PoundsOunces {
    constructor(pounds, ounces) {
        this.pounds = pounds;
        this.ounces = ounces;
    }
}

export function gramsToPoundsOunces(grams) {
    const pounds = Math.floor(grams / GRAMS_PER_POUND);
    const ounces = (grams % GRAMS_PER_POUND) / GRAMS_PER_OUNCE;
    return new PoundsOunces(pounds, ounces);
}