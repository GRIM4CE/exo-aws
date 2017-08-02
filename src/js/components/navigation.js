'use strict';

class Navigation {
  constructor() {
    this.window = window
    this.body = document.querySelector("body");
    this.hero = document.querySelector(".hero");
    this.heroHeight = this.hero.offsetHeight;
    this.header = document.querySelector(".page-header");
    this.headerNav = document.querySelector(".page-header-nav");
    this.headerNavOpenButton = document.querySelector(".page-header-open-button");
    this.headerNavCloseButton = document.querySelector(".page-header-close-button");
    this.bindButtons();
  }

  setHeaderState() {
    if (window.pageYOffset > this.heroHeight && this.header.getAttribute('data-state') !== 'fixed') {
      this.header.setAttribute('data-state', 'fixed');
    } else if (window.pageYOffset < this.heroHeight && this.header.getAttribute('data-state') === 'fixed') {
      this.header.setAttribute('data-state', 'float');
    }
  }

  setNavActive() {
    this.headerNav.setAttribute('data-state', 'active');
    this.headerNavOpenButton.setAttribute('data-state', 'inactive');
    this.body.setAttribute('data-state', 'inactive');
  }

  setNavInactive() {
    this.headerNav.setAttribute('data-state', 'inactive');
    this.headerNavOpenButton.setAttribute('data-state', 'active');
    this.body.setAttribute('data-state', '');
  }

  windowJumpFix() {
    this.setNavInactive();
    this.window.scrollTo(this.window.scrollX, this.window.scrollY - 60);
  }

  bindButtons() {
    this.headerNavOpenButton.addEventListener('click', this.setNavActive.bind(this));
    this.headerNavCloseButton.addEventListener('click', this.setNavInactive.bind(this));
    this.window.addEventListener('scroll', this.setHeaderState.bind(this));
    this.window.addEventListener("hashchange", this.windowJumpFix.bind(this));
  }
}

export default Navigation;
