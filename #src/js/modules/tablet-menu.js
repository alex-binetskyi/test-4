var $tabletBurger = $('.header__tablet-button');
var $tabletList = $('.header__tablet-list');
var $headerSurface = $('.header__surface');

$tabletBurger.click(function(){
  var flag = $tabletBurger.hasClass("header__tablet-button--open-menu");
    if(!flag){
      $tabletBurger.addClass("header__tablet-button--open-menu");
      $tabletList.addClass("header__tablet-list--open-menu");
      $headerSurface.addClass("header__surface--tablet-opened");
    } else {
      $tabletBurger.removeClass("header__tablet-button--open-menu");
      $tabletList.removeClass("header__tablet-list--open-menu");
      $headerSurface.removeClass("header__surface--tablet-opened");
    }
});
