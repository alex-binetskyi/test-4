var $searchButton = $(".header__search-button");
var $searchForm = $(".header__search-form");
var $searchInput = $(".header__search-input");
var $navigation = $(".header__navigation");
var $menuAll = $(".header__menu-all");
var $userList = $(".header__user-list");
var $shortMenu = $(".header__short-menu");
var $searchCancel  = $(".header__search-cancel");
var $logo  = $(".header__logo");

$searchButton.click(function(evt){
  var flag = $searchButton.hasClass("header__search-button--search-opened");
  var screenWidth = window.innerWidth;
  if(!flag){
    evt.preventDefault();
    if(screenWidth >= 860) {
      $searchButton.addClass("header__search-button--search-opened");
      $searchForm.addClass("header__search-form--search-opened");
      $searchInput.addClass("header__search-input--search-opened");
      $headerSurface.addClass("header__surface--search-opened");
      $navigation.addClass("header__navigation--search-opened");
      $menuAll.addClass("header__menu-all--search-opened");
      $userList.addClass("header__user-list--search-opened");
      $shortMenu.addClass("header__short-menu--search-opened");
      $searchCancel.addClass("header__search-cancel--search-opened");
    }
    else {
      $searchButton.addClass("header__search-button--search-opened");
      $searchInput.addClass("header__search-input--search-opened");
      $logo.addClass("header__logo--search-opened");
      $userList.addClass("header__user-list--search-opened");
      $tabletBurger.addClass("header__tablet-button--search-opened");
      $searchForm.addClass("header__search-form--search-opened");
      $searchCancel.addClass("header__search-cancel--search-opened");
    }
  }
});

$searchCancel.click(function(){
  var screenWidth = window.innerWidth;
  if(screenWidth >= 860) {
    $searchButton.removeClass("header__search-button--search-opened");
    $searchForm.removeClass("header__search-form--search-opened");
    $searchInput.removeClass("header__search-input--search-opened");
    $headerSurface.removeClass("header__surface--search-opened");
    $navigation.removeClass("header__navigation--search-opened");
    $menuAll.removeClass("header__menu-all--search-opened");
    $userList.removeClass("header__user-list--search-opened");
    $shortMenu.removeClass("header__short-menu--search-opened");
    $searchCancel.removeClass("header__search-cancel--search-opened");
  } else {
    $searchButton.removeClass("header__search-button--search-opened");
    $searchInput.removeClass("header__search-input--search-opened");
    $logo.removeClass("header__logo--search-opened");
    $userList.removeClass("header__user-list--search-opened");
    $tabletBurger.removeClass("header__tablet-button--search-opened");
    $searchForm.removeClass("header__search-form--search-opened");
    $searchCancel.removeClass("header__search-cancel--search-opened");
  }
});
