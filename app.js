
const cursor = document.querySelector('.cursor');
const cursorLinks = document.querySelectorAll('.cursor-link');

let canvas = document.querySelector('body');

const moveCursor = (e)=> {
  let rect = canvas.getBoundingClientRect();
  let mouseX = e.clientX - rect.left;
  let mouseY = e.clientY - rect.top;
   
  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`; 
}

document.addEventListener('mousemove', moveCursor)

if (cursorLinks) {

    cursorLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('-active');
            cursor.classList.add('-primary');
        });

        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('-active');
            cursor.classList.remove('-primary');
        });
    });
}