const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getCar } = require('./controller.js')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/Car", getCar);

app.get("/api/picture", (req, res) => {
    const pictures = [
            "lake picture!",
            "mountain picture!",
            "animal picture",
    ];

    // choose random pictures
    let randomIndex = Math.floor(Math.random() * pictures.length);
    let randompicture = pictures[randomIndex];

    res.status(200).send(randompicture);
    
});

const {
    getMusics,
    deleteMusic,
    createMusic,
    updateMusic,
} = require("./controller");

app.get(`/api/musics`, getMusics);
app.delete(`/api/musics/:id`, deleteMusic);
app.post(`/api/musics`, createMusic);
app.put(`/api/musics/:id`, updateMusic)

app.listen(4000, () => console.log("Server running on 4000"));
