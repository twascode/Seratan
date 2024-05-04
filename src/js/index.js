/* 
NOTES:
to make this asynchronous test work, you need to change parameters in the HTML file. 
take a look at click listener on the button, you will see "babypack".
change it to "starterpack". 
done!
*/
document.addEventListener("DOMContentLoaded", function(event) {
    var cursor = document.querySelector(".custom-cursor");
    var links = document.querySelectorAll("a");
    var initCursor = false;
  
    for (var i = 0; i < links.length; i++) {
      var selfLink = links[i];
  
      selfLink.addEventListener("mouseover", function() {
        cursor.classList.add("custom-cursor--link");
      });
      selfLink.addEventListener("mouseout", function() {
        cursor.classList.remove("custom-cursor--link");
      });
    }
  
    window.onmousemove = function(e) {
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
  
    window.onmouseout = function(e) {
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
new fullpage('#fullpage', {
  //options here
  scrollBar: true,
  navigation: false,
  anchors: ['section1', 'section2','section3']
  // afterLoad: function(origin, destination, direction){
  //     console.log(`after load ${destination.index}, direction=${direction}` )
  // },
  // onLeave: function(origin, destination, direction){
  //      console.log(`on leave ${destination.index}, direction=${direction}` );
  // 		if(destination.index == 3 && direction=='down'){
  //       showPopup('starterpack');
  //   	}
  // }
})
