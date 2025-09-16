// Upgrades

class Upgrade {
    constructor(
        upgradeId,
        name,
        description,
        maxLevel,
        price,
        priceScaling,
        currency,
        effect,
    ) {
        this.ID = upgradeId;
        this.Name = name;
        this.Description = description;
        this.Level = 0;
        this.MaxLevel = maxLevel;
        this.BasePrice = price;
        this.Currency = currency;
        this.Scaling = priceScaling,
            this.Effect = effect; // should be a function with one parameter upgradeLevel
    }

    priceAtLevel(level) {
        return this.BasePrice * (this.Scaling ^ level)
    }


}