// Multiplier system?
// no numbers past 1.8e308

class Multiplier {
    constructor() { // Creates a new multiplier
        this.Base = []; // Base, all numbers here add together
        this.Multiplicative = []; // Multiplicative, this part of the multiplier is a product
        this.Exponential = []; // Exponential, where the exponents go
    };

    get base() {
        let returnVal = 0;

        for (var i = 0; i < this.Base.length; i++) {
            returnVal += this.Base[i]
        }

        return returnVal
    }

    get multi() {
        let returnVal = 0;

        for (var i = 0; i < this.Multiplicative.length; i++) {
            returnVal *= this.Multiplicative[i]
        }

        return returnVal
    }

    get totalMulti() {
        let returnVal = this.base * this.multi

        for (var i = 0; i < this.Exponential.length; i++) { // I don't know if this works, but it's not immediately relevant?
            returnVal ^= this.Exponential[i]
        }

        return returnVal
    }

    applyMultiplier(number) {
        return number * this.totalMulti
    }
}