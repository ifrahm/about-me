/*
 * Name: Ifrah Mohamed
 * Date: 10/15/19
 * Section: CSE 154 AL
 * This is the js file which is linked to index.html, it contains the click event listener.
 */
"use strict";
(function() {
  const HEX_DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                  "A", "B", "C", "D", "E", "F"];
  const HEX_LENGTH = 6;// Number of hexidecimal digits in a color code
  //  This code is from cse 154 section 4 excersice 3
  window.addEventListener("load", init);


  function init() {
    let colors = document.getElementById("color");
    colors.addEventListener("click", changeColor);
  }


  function changeColor(){
    let randomColor = "#";
    for (let i = 0; i < HEX_LENGTH; i++) {
      randomColor += HEX_DIGITS[Math.floor(Math.random() * HEX_DIGITS.length)];
    }
    document.body.style.backgroundColor = randomColor;
  }

   /**
    * Returns the element that has the ID attribute with the specified value.
    * @param {string} idName - element ID
    * @returns {object} DOM object associated with id.
    */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(selector) { // less common, but you may find it helpful
    return document.querySelector(selector);
  }

})();
