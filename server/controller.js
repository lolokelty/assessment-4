const musics = require('./db.json');
let globalId = 11;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["All your hard work will soon pay off!",
            "Allow compassion to guide your decisions!",
            "An acquaintance of the past will affect you in the near future!",
            "He who knows he has enough is rich!",
            "From now on your kindness will lead you to success!",
            "If your desires are not extravagant, they will be granted!",
            "He who knows himself is enlightened"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getCar: (req, res) => {
        const cars = ["240sx",
                "350Z",
                "Toyota 86",
                "Subaru WRX",
                "EK Hatch",
                "Honda civic",
                "BRZ",
                "Skyline",
                "Supra"];

                let randomIndex = Math.floor(Math.random() * cars.length);
                let randomCar = cars[randomIndex];

                res.status(200).send(randomCar);
    },

    ///--Music--///
    getMusics: (req, res) => {
        res.status(200).send(musics);
    },
    
    deleteMusic: (req, res) => {
        let musicIndex = musics.findIndex((music) => music.id === parseInt(req.params.id));
        musics.splice(musicIndex, 1);
        res.status(200).send(musics);
    },
    
    createMusic: (req, res) => {
        let { title, rating, imageURL } = req.body;
        
        let newMusic = {
        id: globalId,
        title: title,
        rating: rating,
        imageURL: imageURL
        };
    
        musics.push(newMusic);
        res.status(200).send(musics)
        globalId++
        },
        
    updateMusic: (req, res) => {
    let requestId = req.params.id;
        let musicIndex = musics.findIndex((music) => music.id === parseInt(req.params.id))
        
        if (req.body.type === "plus") {
            musics[musicIndex].rating++
        } else if (req.body.type === "minus") {
            musics[musicIndex].rating--
        }
        res.status(200).send(musics);
    }
};







