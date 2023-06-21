const decorPics = document.querySelectorAll('.js-welcome-pic');

let activeIndex = 0;

function toggleDecorPic() {
    decorPics.forEach(pic => pic.classList.remove('_visible'));
    decorPics[activeIndex].classList.add('_visible');
    activeIndex = (activeIndex + 1) % decorPics.length;
}

toggleDecorPic()

setInterval(toggleDecorPic, 6000);