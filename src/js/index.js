/* 
NOTES:
to make this asynchronous test work, you need to change parameters in the HTML file. 
take a look at click listener on the button, you will see "babypack".
change it to "starterpack". 
done!
*/
document.addEventListener("DOMContentLoaded", function (event) {
  passive: true
  var cursor = document.querySelector(".custom-cursor");
  var links = document.querySelectorAll("a");
  var initCursor = false;

  for (var i = 0; i < links.length; i++) {
    var selfLink = links[i];

    selfLink.addEventListener("mouseover", function () {
      cursor.classList.add("custom-cursor--link");
    });
    selfLink.addEventListener("mouseout", function () {
      cursor.classList.remove("custom-cursor--link");
    });
  }

  window.onmousemove = function (e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    if (!initCursor) {
      // cursor.style.opacity = 1;
      TweenLite.to(cursor, 0.3, {
        opacity: 1
      });
      initCursor = true;
    }

    TweenLite.to(cursor, 0, {
      top: mouseY + "px",
      left: mouseX + "px"
    });
  };

  window.onmouseout = function (e) {
    TweenLite.to(cursor, 0.3, {
      opacity: 0
    });
    initCursor = false;
  };
});
function delSlideNav(x) {
  if (x.matches) { 
    $("#slides").addClass("slide fp-table ");
    $("#slides1").addClass("slide slide fp-table ");
    $("#slides2").addClass("slide slide fp-table ");
    $("#slides3").addClass("slide slide fp-table ");
  } else {
    $(".fp-slidesNav").removeAttr();
  }
}
// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 768px)")
delSlideNav(x);

// Call listener function at run time
$(window).resize(async function () {
  delSlideNav(x);
  passive: true
});
new fullpage('#fullpage', {
  //options here
  // scrollBar: true,
  navigation: true,
  anchors: ['Beranda', 'Product', 'About-us', 'Shipping', 'Source', 'Custom-order', 'Growing', 'Footers'],
  menu: '#myMenu',
  controlArrows: false,
  // showActiveTooltip: true,
  slidesNavigation: true,
  slidesNavPosition: 'bottom',
  loopHorizontal: false,
  // continuousHorizontal: true,
  // navigationTooltips: ['Home','About Us', 'tes'],
  showActiveTooltip: true,
  scrollingSpeed: 1050,
  fitToSectionDelay: 5000,

})
