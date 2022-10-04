
var coinlist = require('./list.json');
var stringSimilarity = require('string-similarity');
function similarCoin(coin) {
    
    coinlistName = coinlist.map((coin) => {
        return coin.name
    })
    let result = stringSimilarity.findBestMatch(coin, coinlistName)
    //now get the coin symbol
    coinlist = coinlist.find((coin) => {
        return coin.name == result.bestMatch.target
    }
    )
    return coinlist.symbol

}
export default similarCoin