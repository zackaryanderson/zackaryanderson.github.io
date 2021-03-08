let scrollSpeed = 70;
let scroller = document.querySelector(".horizontal-scroll");

const horizScroll = (event) => {
    //turn off if y is at zero
    if (!event.deltaY) {
        return;
    }
    // 1 is up -1 is down
    let scrollDirection = (event.deltaY > 0) ? 1 : -1;
    scroller.scrollLeft += scrollSpeed * scrollDirection;
    let scrollLeft = Math.round(scroller.scrollLeft);
    let maxScrollLeft = Math.round( scroller.scrollWidth - scroller.clientWidth );

    if ((scrollDirection === -1 && scrollLeft > 0) || (scrollDirection === 1 && ScrollLeft < maxScrollLeft ) ){
        event.preventDefault();
        return true;
    }
}

scroller.addEventListener("mousewheel", horizScroll);