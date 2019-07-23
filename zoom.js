/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: zoom.js
 *    /////////////////////////////////////////////
 *     Changed by: Ederson Cardoso on Jun 14, 2019.
 *             ID: 301033332
 *      Add pictures to favourite list.
 *    /////////////////////////////////////////////
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder; //opener is photos.htm and you get acess to the global var in it
var current = photoOrderArray[2];
var figFilename = "images/IMG_0" + current + ".jpg";
window.opener.figFilenameSm = "images/IMG_0" + current + ".jpg";

var index = window.location.search.substring(1).split('=')[1];

/* populate img element and create event listener */
function pageSetup() {
    document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
    //document.getElementById("newImage").src = index;
    createEventListener();
}

/* close window */
function closeWin() {
   window.close();
}

/* create event listener for close button */
function createEventListener() {
   var closeWindowDiv = document.getElementsByTagName("p")[0];
   if (closeWindowDiv.addEventListener) {
     closeWindowDiv.addEventListener("click", closeWin, false); 
   } else if (closeWindowDiv.attachEvent)  {
        closeWindowDiv.attachEvent("onclick", closeWin);
   }
   //add event listner to add to favorite
    var addFavouriteDiv = document.getElementsByTagName("p")[1];
    var favDiv = window.opener.document.getElementById("favourite");

    if (addFavouriteDiv.addEventListener) {
        if (favDiv.children.length > 5) {
            addFavouriteDiv.innerHTML = "Remove any favourite image to add more";
            addFavouriteDiv.addEventListener("click", closeWin, false);
        } else {
            addFavouriteDiv.innerHTML = "Add to Favourites";
            addFavouriteDiv.addEventListener("click", addToFavourite, false);
        }
    } else if (favoriteDiv.attachEvent) {
        addFavouriteDiv.attachEvent("onclick", addToFavourite);
    }
}

/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/* add to favorites */
function addToFavourite() {
    window.opener.postMessage('message', '*');
}

