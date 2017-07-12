'use strict';

class Navigation {
  constructor() {
    this.mobileButton = document.querySelector('.mobile-hamburger-button-container');
    this.mobileNav = document.getElementById('header-navigation');
    this.bindButtons();
  }

  toggleNavigation() {
    this.mobileButton.setAttribute('data-state', this.mobileButton.getAttribute('data-state') === 'active' ? 'inactive' : 'active');
    this.mobileNav.setAttribute('data-state', this.mobileNav.getAttribute('data-state') === 'active' ? 'inactive' : 'active');
  }

  bindButtons() {
    this.mobileButton.addEventListener('click', this.toggleNavigation.bind(this));
  }
}

export default Navigation;
