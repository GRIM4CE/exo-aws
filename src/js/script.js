'use strict';
import Navigation from './components/navigation';

function appInit() {
  // Init Mobile Nav
  if (document.querySelector(".mobile-hamburger-button-container")) {
    const navigation  = new Navigation ();
  }
}

appInit();
