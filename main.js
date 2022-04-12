const workSections = document.querySelectorAll('.work');
const frontText = document.querySelectorAll('.front-text');
const backText = document.querySelectorAll('.back-text');
const windowWidth = window.screen.width;

function displayLinks() {
    for(let i = 0; i < frontText.length; i++) {
        for(let i = 0; i < backText.length; i++) {
            if (windowWidth <= 768) {
                frontText[i].addEventListener('click', () => {
                    frontText[i].style.display = 'none';
                });
            } else if (windowWidth > 768) {         
                frontText[i].addEventListener('hover', () => {

                });
            } 
        };
    };
}

displayLinks();