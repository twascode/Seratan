/* 
NOTES:
to make this asynchronous test work, you need to change parameters in the HTML file. 
take a look at click listener on the button, you will see "babypack".
change it to "starterpack". 
done!
*/
document.addEventListener("DOMContentLoaded", function (event) {
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

console.log('javascript ready...')

//! Responsive Navigation BAR 🎉
const showMobileNav = () => {
  var navbar = document.getElementById("navbar");
  navbar.className === "navibar" ? navbar.className += " responsive" : navbar.className = "navibar"
}

//! Notification Bell 
const notification = (pack) => {
  alert('notification checking..., please click OK to continue')
  return new Promise((success, failed) => {
    if (pack != "starterpack") failed("your pack is not starterpack, please read the notes on js file")
    setTimeout(() => {
      success("Notification Success! 👏")
    }, 1200)
  })
}

//! asynchronous trigger for notification bell
async function showPopup(params) {
  try {
    const popup = await notification(params);
    alert(popup)
  } catch (err) {
    alert(err)
  }
}

// $(document).ready(function() {
//     $('#fullpage').fullpage({
//         //options here
//         autoScrolling:true,
//         scrollHorizontally: true,    
//         anchors: ['section1', 'section2','section3']
//     });

//     //methods
//     $.fn.fullpage.setAllowScrolling(false);
// });


// function toggleID() {
//   var wid = $(window).width();
//   if (wid < 768) {
//     $("#no-slides").remove();
//   } else {
//     $("#slides").remove();
//   }
// }
// $(window).resize(function () {
//   toggleID();
// });


// $(window).resize( function(){
//   if(window.innerWidth > 768) {
//     $("#slides").removeClass("slide", "fp-slides");
//     console.log("tes1")
//   } else {
//     console.log("tes2")
//     $("#slides").addClass("slide");
//   }
// });
function removeClass() {
  // $(".slide").removeClass("slide");
  $(".fp-slidesNav").removeAttr();
}
removeClass();
function delSlideNav(x) {
  if (x.matches) { // If media query matches
    // $(".fp-slides").addClass();
    $("#slides").addClass("slide fp-table fp-is-overflow");
    $("#slides1").addClass("slide slide fp-table fp-is-overflow");
    $("#slides2").addClass("slide slide fp-table fp-is-overflow");
    $("#slides3").addClass("slide slide fp-table fp-is-overflow");
  } else {
    // $("#slides").addClass("slide");
    $(".fp-slidesNav").removeAttr();
    // $(".fp-slides").addClass("fpp");
    // $(".fp-slides").removeClass("fp-slides");
    // $("#slides").removeClass("slide");
    // $("#slides1").removeClass("slide");
    // $("#slides2").removeClass("slide");
    // $("#slides3").removeClass("slide");
    // $("#slides").each(function(i, x) {
    //   var item = x;
    //   $(item).removeClass("slide");
    //   $(item).removeClass("fp-slide");
    // });
    // $("#slides").removeClass("slide" );
    // $("#slides").removeClass("fp-slide" );
    // $(".fp-slidesNav").remove();
  }
}
// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 768px)")

// Call listener function at run time
$(window).resize(async function () {
  delSlideNav(x);
});

// console.log(del())
// Attach listener function on state changes
// x.addEventListener("change", function() {
//   delSlideNav(x);
// });
// var elems = document.getElementsByClassName('fp-slidesNav'),
//     elem;
// while(elems.length){
//     elem = elems.item(0);
//     elem.parentNode.removeChild(elem);
// }
new fullpage('#fullpage', {
  //options here
  scrollBar: true,
  navigation: true,
  anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8'],
  menu: '#myMenu',
  controlArrows: false,
  showActiveTooltip: false,
  slidesNavigation: true,
  slidesNavPosition: 'bottom',
  loopHorizontal: false,
  lockAnchors: true,
  // continuousHorizontal: true,
  // navigationTooltips: ['Home','About Us', 'tes'],
  showActiveTooltip: true,
  scrollingSpeed: 250,

})
