// List of slides, for which we want to hide the
// navigation (header and footer).
var hideNavigationFor = [0]

// Show or hide the navigation, depending on the current slide.
function showHideNavigation() {
  // The index of the current slide. Note: starts
  // with 0 (first slide's index = 0)
  var slideIndex = swiper.activeIndex

  // If the current slide is included in our list,
  // we add a class called 'hide-navigation' to the
  // body, otherwise we remove it. Now we can just
  // show/hide the navigation with css.
  if (hideNavigationFor.includes(slideIndex)) {
    document.body.classList.add('hide-navigation')
  } else {
    document.body.classList.remove('hide-navigation')
  }
}

// Setup swiper.
var swiper = new Swiper('.swiper-container', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
})

// Everytime swiper changes the slide, we call the
// 'showHideNavigation' function, which shows or
// hides the navigation, depending on the current
// slide.
swiper.on('slideChange', showHideNavigation)

// We have to call the function manually once at the
// beginning (If we wan't to hide the navigation for
// the first slide, because swiper's 'slideChange' only
// fires if we change to another slide).
showHideNavigation()