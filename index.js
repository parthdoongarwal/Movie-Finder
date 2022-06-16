const apiKey = "a27443b1"
const img = document.getElementById("img")
const title  = document.getElementById("title")
const imbdratingg = document.getElementById("imdbrating")
const released = document.getElementById("released")
const runTime = document.getElementById("runtime")
const actors = document.getElementById("actors")
const genre = document.getElementById("genre")
const langauage = document.getElementById("language")
const plot = document.getElementById("plot")
const director = document.getElementById("director")
const body = document.getElementById("body")

const loader = document.getElementById("loaderr")

async function getMovie(){
    
    const movieInput = document.getElementById("Movie-input").value;
    const yearInput = document.getElementById("year-input").value;





    
    let urll = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieInput}` 
    if (yearInput != ""){
        urll = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieInput}&y=${yearInput}` 
    }

//  `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieInput}`
    console.log(movieInput)
    loader.classList.add("loader");
    const url = urll
    const fetc = await fetch(url)
    const responce = await fetc.json()
    loader.classList.remove("loader")

if (responce.Response == "False"){

        title.textContent = `Movie Was Not Found`
  
        img.src = ""
        imbdratingg.textContent = "" 
        released.textContent = ""
        runTime.textContent = ""
        actors.textContent = ""
        genre.textContent = ""
        langauage.textContent = "" 
        plot.textContent = ""
        director.textContent = ""
   
}else{

        img.src = responce.Poster
        title.textContent = `Title: ${responce.Title}`
        imbdratingg.textContent = `Metascore: ${responce.Metascore}`
        released.textContent = `Released: ${responce.Released}`
        runTime.textContent = `Runtime: ${responce.Runtime}`
        actors.textContent = `Actors: ${responce.Actors}`
        genre.textContent = `Genre: ${responce.Genre}`
        langauage.textContent = `language: ${responce.Language}`
        plot.textContent = `plot:  ${responce.Plot}`
        director.textContent = `director: ${responce.Director}`
    }
}
