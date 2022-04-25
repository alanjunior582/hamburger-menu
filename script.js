const hMenuCTag = document.querySelector(".hMenuC");
const overlayMenuTag = document.querySelector(".overlayMenu");
const hLine1Tag = document.querySelector(".Line1");
const hLine2Tag = document.querySelector(".Line2");
const hLine3Tag = document.querySelector(".Line3");
const liTag = document.getElementsByTagName("li");

hMenuCTag.addEventListener("click", () => {
    if (hMenuCTag.classList.contains("isOpened")) {
       overlayMenuTag.classList.remove ("showOverlayMenu");
       hLine2Tag.classList.remove ("hideLine2");
       hLine1Tag.classList.remove ("rotateplus45");
       hLine3Tag.classList.remove ("rotateminus45");
       hMenuCTag.classList.remove ("isOpened");
       for (let i = 0; i < liTag.length; i++ ) {
        liTag[i].classList.remove("moveLiTagUp");
    }
    }else {
       overlayMenuTag.classList.add ("showOverlayMenu");
       hLine2Tag.classList.add ("hideLine2");
       hLine1Tag.classList.add ("rotateplus45");
       hLine3Tag.classList.add ("rotateminus45");
       hMenuCTag.classList.add("isOpened");
       for (let i = 0; i < liTag.length; i++ ) {
           liTag[i].classList.add("moveLiTagUp");
       }
    }
});