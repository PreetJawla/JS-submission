// Create a variable to hold your NFTs
const NFTs = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(fruit, color, taste, weight) {
    const nft = {
        Fruit: fruit,
        Color: color,
        Taste: taste,
        Weight: weight
    };
    NFTs.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("NFT " + (i + 1) + ":");
        console.log("  Fruit: " + NFTs[i].Fruit);
        console.log("  Color: " + NFTs[i].Color);
        console.log("  Taste: " + NFTs[i].Taste);
        console.log("  Weight: " + NFTs[i].Weight);
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return NFTs.length;
}

// Call your functions below this line
mintNFT('Apple', 'Red', 'Sweet', '200g');
mintNFT('Banana', 'Yellow', 'Sweet', '150g');
mintNFT('Grapes', 'Green', 'Sour', '50g');

listNFTs();
console.log("Total Supply: " + getTotalSupply());
