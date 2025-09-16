// player data

const playerDataTemplate = {
    Currencies: {
        testingCurrency: 0,
    },
    Upgrades: {},
}

export var playerData;

export function loadData(dataString) {
    // Presumably this data string should be JSON encoded in Base64
    // Why is it like this? I actually don't know but it seems to be like tradition or something

    let realData = atob(dataString)

}