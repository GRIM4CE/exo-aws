'use strict';
import Navigation from './components/navigation';

function appInit() {
  // Init Mobile Nav
  if (document.querySelector(".page-header")) {
    const navigation  = new Navigation ();
  }
}

appInit();
