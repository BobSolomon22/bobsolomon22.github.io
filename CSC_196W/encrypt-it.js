/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    console.log("Window loaded!");
    document.getElementById('12').addEventListener("change", radioHandler);
    document.getElementById('24').addEventListener("change", radioHandler);
    document.getElementById('encrypt-it').addEventListener("click", encrypt);
    document.getElementById('reset').addEventListener("click", reset);
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function radioHandler() {
    let radios = document.querySelectorAll('input[type="radio"][name="text-size"]');
    for(const element of radios) {
      if(element.value == '12pt' && element.checked == true) {
        document.getElementById('input-text').style.fontSize = '12px';
        document.getElementById('result').style.fontSize = '12px';
      }
      else if(element.value == '24pt' && element.checked == true) {
        document.getElementById('input-text').style.fontSize = '24px';
        document.getElementById('result').style.fontSize = '24px';
      }
    }
  }

  function shuffle(text) {
    let input = text.split("");

    for(let i = input.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let temp = input[i];
      input[i] = input[j];
      input[j] = temp;
    }

    return input.join("");
  }

  function encrypt() {
    let pt = String(document.getElementById("input-text").value);
    let ct = "";
    
    pt = pt.toLowerCase();

    if(document.getElementById('cipher-type').value == "random") {
      ct = shuffle(pt);
      
    }
    else if(document.getElementById('cipher-type').value == "shift") {
      for(let i=0; i < pt.length; i++) {
        if(pt[i] < 'a' || pt[i] > 'y') {
          ct += pt[i];
        }
        else if(pt[i] == 'z') {
          ct += 'a';
        }
        else {
          let letter = pt.charCodeAt(i);
          let resultLetter = String.fromCharCode(letter + 1);
          ct += resultLetter;
        }
      }
    }

    if(document.getElementById('all-caps').checked) {
      ct = ct.toUpperCase();
    }

    document.getElementById('result').innerHTML = ct;
  }

  function reset() {
    document.getElementById('input-text').value = "";
    document.getElementById('result').innerHTML = "";
  }
})();
