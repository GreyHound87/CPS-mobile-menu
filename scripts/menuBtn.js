function toggleBurgerButton() {
  var menu = document.getElementById("menu");
  var menuLogoWrapper = document.getElementById("menuLogoWrapper");
  var burgerButton = document.getElementById("burgerButton");
  var burgerLine1 = document.getElementById("burgerLine1");
  var burgerLine2 = document.getElementById("burgerLine2");
  var burgerLine3 = document.getElementById("burgerLine3");
  var logoLink = document.getElementById("logoLink");
  var logoImg = document.getElementById("logoImg");
  var searchButton = document.getElementById("searchButton");
  var navigation = document.getElementById("navigation");
  var navigationList = document.getElementById("navigationList");
  var navItem1 = document.getElementById("navItem1");
  var navLink1 = document.getElementById("navLink1");
  var navItem2 = document.getElementById("navItem2");
  var navLink2 = document.getElementById("navLink2");
  var navItem3 = document.getElementById("navItem3");
  var navLink3 = document.getElementById("navLink3");
  var navItem4 = document.getElementById("navItem4");
  var navLink4 = document.getElementById("navLink4");
  var navItem5 = document.getElementById("navItem5");
  var navLink5 = document.getElementById("navLink5");
  var navItem6 = document.getElementById("navItem6");
  var navLink6 = document.getElementById("navLink6");
  var navItem7 = document.getElementById("navItem7");
  var navLink7 = document.getElementById("navLink7");
  var navItem8 = document.getElementById("navItem8");
  var navLink8 = document.getElementById("navLink8");
  var modBtnWrapper = document.getElementById("modBtnWrapper");
  var callButton = document.getElementById("callButton");
  var chatButton = document.getElementById("chatButton");
  var profileButton = document.getElementById("profileButton");
  var mailtoLink = document.getElementById("mailtoLink");
  var calltoLink = document.getElementById("calltoLink");
  var langWrapper = document.getElementById("langWrapper");
  var langLink1 = document.getElementById("langLink1");
  var langLink2 = document.getElementById("langLink2");
  var langLink3 = document.getElementById("langLink3");
  var servicesBtnWrapper = document.getElementById("servicesBtnWrapper");
  var upenderException = document.getElementById("upenderException");
  var placeholder = document.getElementById("placeholder");
  var upenderBlurOverlay = document.getElementById("upenderBlurOverlay");
  
  var isButtonActive = burgerButton.classList.contains("menu__burger-btn--active");

  if (isButtonActive) {
    burgerButton.classList.remove("menu__burger-btn--active");
    burgerLine1.classList.remove("burger-btn__line--active");
    burgerLine2.classList.remove("burger-btn__line--active");
    burgerLine3.classList.remove("burger-btn__line--active");
    menuLogoWrapper.classList.remove("menu__logo-block--active");
    logoLink.classList.remove("menu__logo--active");
    logoImg.classList.remove("logo__img--active");
    searchButton.classList.remove("menu__search-btn--active");
    navigation.classList.remove("menu__navigation--active");
    navigationList.classList.remove("navigation__list--active");
    navItem1.classList.remove("navigation__item--active");
    navLink1.classList.remove("navigation__link-btn--active");
    navItem2.classList.remove("navigation__item--active");
    navLink2.classList.remove("navigation__link-btn--active");
    navItem3.classList.remove("navigation__item--active");
    navLink3.classList.remove("navigation__link-btn--active");
    navItem4.classList.remove("navigation__item--active");
    navLink4.classList.remove("navigation__link-btn--active");
    navItem5.classList.remove("navigation__item--active");
    navLink5.classList.remove("navigation__link-btn--active");
    navItem6.classList.remove("navigation__item--active");
    navLink6.classList.remove("navigation__link-btn--active");
    navItem7.classList.remove("navigation__item--active");
    navLink7.classList.remove("navigation__link-btn--active");
    navItem8.classList.remove("navigation__item--active");
    navLink8.classList.remove("navigation__link-btn--active");
    modBtnWrapper.classList.remove("menu__modal-block--active");
    callButton.classList.remove("menu__call-btn--active");
    chatButton.classList.remove("menu__chat-btn--active");
    profileButton.classList.remove("menu__profile-btn--active");
    mailtoLink.classList.remove("menu__mailto--active");
    calltoLink.classList.remove("menu__callto--active");
    langWrapper.classList.remove("menu__lang-block--active");
    langLink1.classList.remove("menu__lang-link--active");
    langLink2.classList.remove("menu__lang-link--active");
    langLink3.classList.remove("menu__lang-link--active");
    menu.classList.remove("menu--active");
    placeholder.classList.remove("placeholder--active");
    servicesBtnWrapper.classList.remove("services__btns-wrapper--hidden");
    upenderException.classList.remove("upender__exception--blurred");
    upenderBlurOverlay.classList.remove("upender__blur-overlay--active");
  } else {
    burgerButton.classList.add("menu__burger-btn--active");
    burgerLine1.classList.add("burger-btn__line--active");
    burgerLine2.classList.add("burger-btn__line--active");
    burgerLine3.classList.add("burger-btn__line--active");
    menuLogoWrapper.classList.add("menu__logo-block--active");
    logoLink.classList.add("menu__logo--active");
    logoImg.classList.add("logo__img--active");
    searchButton.classList.add("menu__search-btn--active");
    navigation.classList.add("menu__navigation--active");
    navigationList.classList.add("navigation__list--active");
    navItem1.classList.add("navigation__item--active");
    navLink1.classList.add("navigation__link-btn--active");
    navItem2.classList.add("navigation__item--active");
    navLink2.classList.add("navigation__link-btn--active");
    navItem3.classList.add("navigation__item--active");
    navLink3.classList.add("navigation__link-btn--active");
    navItem4.classList.add("navigation__item--active");
    navLink4.classList.add("navigation__link-btn--active");
    navItem5.classList.add("navigation__item--active");
    navLink5.classList.add("navigation__link-btn--active");
    navItem6.classList.add("navigation__item--active");
    navLink6.classList.add("navigation__link-btn--active");
    navItem7.classList.add("navigation__item--active");
    navLink7.classList.add("navigation__link-btn--active");
    navItem8.classList.add("navigation__item--active");
    navLink8.classList.add("navigation__link-btn--active");
    modBtnWrapper.classList.add("menu__modal-block--active");
    callButton.classList.add("menu__call-btn--active");
    chatButton.classList.add("menu__chat-btn--active");
    profileButton.classList.add("menu__profile-btn--active");
    mailtoLink.classList.add("menu__mailto--active");
    calltoLink.classList.add("menu__callto--active");
    langWrapper.classList.add("menu__lang-block--active");
    langLink1.classList.add("menu__lang-link--active");
    langLink2.classList.add("menu__lang-link--active");
    langLink3.classList.add("menu__lang-link--active");
    menu.classList.add("menu--active");
    placeholder.classList.add("placeholder--active");
    servicesBtnWrapper.classList.add("services__btns-wrapper--hidden");
    upenderException.classList.add("upender__exception--blurred");
    upenderBlurOverlay.classList.add("upender__blur-overlay--active");
  }
}

var upenderBlurOverlay = document.getElementById("upenderBlurOverlay");
upenderBlurOverlay.addEventListener("click", function() {
  if (upenderBlurOverlay.classList.contains("upender__blur-overlay--active")) {
    toggleBurgerButton();
  }
});

var burgerButton = document.getElementById("burgerButton");
burgerButton.addEventListener("click", toggleBurgerButton);






