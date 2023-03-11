const complimentBtn = document.getElementById("complimentButton")
const getFortuneBtn = document.getElementById('fortuneButton')
const getCarBtn = document.getElementById('carButton')
const form = document.querySelector('form')
const musicsContainer = document.querySelector('#musics-container')

const baseURL = `http://localhost:4000/api/musics`

// --complement --//
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
    
};
complimentBtn.addEventListener('click', getCompliment)


///--Fortune Handler Event--///
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
    
}
getFortuneBtn.addEventListener('click', getFortune);


///--Car Handler Event--///
const getCar = () => {
    axios.get("http://localhost:4000/api/car/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
    
}
getCarBtn.addEventListener('click', getCar);


/// --Counter-- ///
const counterText = document.querySelector('#counter')
const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')
const plusBtn = document.querySelector('#plus-btn')

let count = 0;

function increase() {
    count++
    counterText.textContent = count
    // console.log(count)
}

function decrease() {
    count--
    counterText.textContent = count
    // console.log(count)
}

function reset() {
    count = 0
    counterText.textContent = count
    // console.log(count)
}

minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)
plusBtn.addEventListener('click', increase)

///music///
const musicsCallback = ({ data: musics }) => displayMusics(musics)
const errCallback = err => console.log(err.response.data)

const getAllMusics = () => axios.get(baseURL).then(musicsCallback).catch(errCallback)
const createMusic= body => axios.post(baseURL, body).then(musicsCallback).catch(errCallback)
const deleteMusic= id => axios.delete(`${baseURL}/${id}`).then(musicsCallback).catch(errCallback)
const updateMusic= (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(musicsCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let rating = document.querySelector('input[name="ratings"]:checked')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        rating: rating.value, 
        imageURL: imageURL.value
    }

    createMusic(bodyObj)
    title.value = ''
    rating.checked = false
    imageURL.value = ''
}

function createmusicCard(music) {
    const musicCard = document.createElement('div')
    musicCard.classList.add('music-card')

    musicCard.innerHTML = 
    `<img alt='music cover' src=${music.imageURL} class="music-cover"/>
    <p class="music-title">${music.title}</p>
    <div class="btns-container">
    <button onclick="updateMusic(${music.id}, 
        'minus')">-</button>
    <p class="music-rating">${music.rating} stars</p>
    <button onclick="updateMusic(${music.id}, 
        'plus')">+</button></div>
    <button onclick="deleteMusic(${music.id})">delete</button>`


    musicsContainer.appendChild(musicCard)
}

function displayMusics(arr) {
    musicsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createmusicCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllMusics()


// which has an input, button, and h1 element. When you press the button, the HTML inside of the h1 element will replace with the value of the input.//
const Database = require("@replit/database");
const db = new Database();
const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/ajaxcall", async function(req, res) {
// db.set("this works?", "it does").then(() => {console.log(db.get("this works?"))});
res.send(req.query.keyUse);
})

app.get('/:id', function(request, response){
fs.readFile(`${request.url == '/ajaxcall' ? '/ajaxcall' : String(request.url).substring(1)}`, null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
        response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
        }
        response.end();
    });
});