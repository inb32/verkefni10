
/**
 * Sækir Myndir frá nasa API. Til þess að sjá dæmi um json svari sjá apod.jsond
 */

// API lykill til að fá aðgang að nasa gögnum.
const API_KEY = 'LEwDNycmq8qouh8hBtr2bCkDD0RT6fMfbNmL0few';
// Slóð að sækja myndir frá. Dæmi um heila slóð https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-11-10
const URL = 'https://api.nasa.gov/planetary/apod';

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
  return(randomDate(new Date(2012, 0, 1), new Date()));

function contentLoaded(){

    const apodElement = document.getElementById("apod");

    fetch(`${URL}?api_key=${API_KEY}&date=${randomDate}`)
    .then(response => response.blob())
    .then(data=>{

        let media = "";
        if(data.media_type === "image"){
            media = `img src="${data.url}">`
        }else {
            media = `<iframe src ="${data.url}" width="560" height="315">`
        }
        apodElement.innerHTML = (` 
        
        <section class="apod">

        <img class="apod__image">
        ${media}
        <h2 class="apod__title">${data.title}</h2>
        <p class="apod__text">${data.explanation}</p>
        ` )
    });
}

/**
 * Sækir mynd af handahófi frá APOD API hjá nasa
 *
 * @returns {Promise} sem mun innihalda upplýsingar um mynd/myndband hjá nasa.
 */

window.addEventListener("DOMConentLoaded", contentLoaded)
