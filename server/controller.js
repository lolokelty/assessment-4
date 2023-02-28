module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    }

},

getFortune = (req,res) => {
    const fortunes = ["All your hard work will soon pay off!", 
    "Allow compassion to guide your decisions!", 
    "An acquaintance of the past will affect you in the near future!", 
    "He who knows he has enough is rich!",
    "From now on your kindness will lead you to success!", 
    "If your desires are not extravagant, they will be granted!", 
    "He who knows himself is enlightened"];

    let randomIndex = math.floor(math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
}