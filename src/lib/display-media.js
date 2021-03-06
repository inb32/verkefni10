// todo vísa í rétta hluti með import

// breytur til þess að halda utan um html element nodes
let title; // titill fyrir mynd á forsíðu
let text; // texti fyrir mynd á forsíðu
let img; // mynd á forsíðu

let image; // object sem inniheldur núverandi mynd á forsíðu.
export function el(image, ...children) {
    const element = document.createElement(image);
  
    if (Array.isArray(children)) {
      children.forEach((child) => {
        if (typeof child === 'string') {
          element.appendChild(document.createTextNode(child));
        } else if (child) {
          element.appendChild(child);
        }
      });
    }
  
    return element;
  }

/*
 * Sækir nýja Mynd af handahófi frá Nasa API og birtir hana á forsíðunni
 * ásamt titli og texta.
 */
function getNewImage() {
  
}

/*
 * Vistar núverandi mynd í storage.
 */
function saveCurrentImage() {
    
        const newimg = document.createElement('newimg'); 
        img.src = fetch(); 
        document.getElementById('.favourites-page').appendChild(newimg); 
        down.innerHTML = "Image Element Added.";  
    }



/*
 * Upphafsstillir forsíðuna. Setur event listeners á takkana, og sækir eina mynd.
 *
 */

document.getElementById("new-image-button").addEventListener("click", function contentLoaded(){

    
  });

export default function init(apod) {

}

/*
 * Fall fyrir favourites.html. Sér um að sækja allar vistuðu myndirnar og birta þær ásamt
 * titlum þeirra.
 */
export function loadFavourites() {

}
