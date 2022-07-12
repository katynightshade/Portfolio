const worksDiv = document.querySelector('.works');

const workArray = [
    {
        title: 'Restaurant Site',
        preview: 'https://katynightshade.github.io/sushi-kanpai/',
        ghLink: 'https://github.com/katynightshade/sushi-kanpai',
    },
    {
        title: 'Tic-Tac-Toe',
        preview: 'https://katynightshade.github.io/tic-tac-toe/',
        ghLink: 'https://github.com/katynightshade/tic-tac-toe',
    },
    {
        title: 'Library Application',
        preview: 'https://katynightshade.github.io/library-app/',
        ghLink: 'https://github.com/katynightshade/library-app',
    },
    {
        title: 'Admin Dashboard',
        preview: 'https://katynightshade.github.io/admin-dashboard/',
        ghLink: 'https://github.com/katynightshade/admin-dashboard',
    },
    {
        title: 'Wild Wonders Sign-Up',
        preview: 'https://katynightshade.github.io/sign-up/',
        ghLink: 'https://github.com/katynightshade/sign-up',
    },
    {
        title: 'Recipes of the Realms',
        preview: 'https://katynightshade.github.io/Recipes/',
        ghLink:'https://github.com/katynightshade/Recipes',
    },
    {
        title: 'Simple Calculator',
        preview: 'https://katynightshade.github.io/calculator/',
        ghLink: 'https://github.com/katynightshade/calculator',
    },
    {
        title: 'Etch-A-Sketch',
        preview: 'https://katynightshade.github.io/Etch-a-sketch/',
        ghLink: 'https://github.com/katynightshade/Etch-a-sketch',
    },
    {
        title: 'Rock, Paper, Scissors',
        preview: 'https://katynightshade.github.io/Rock-Paper-Scissors/',
        ghLink: 'https://github.com/katynightshade/Rock-Paper-Scissors',
    },
    /*
    {
        title:,
        preview:,
        ghLink:,
    }
    */
];

(function createDivs() {
    for (let i = 0; i < workArray.length; i++) {
        const flipCard = document.createElement('div');
        flipCard.classList.add('flip-card');
        
        const frontDiv = document.createElement('div');
        frontDiv.classList.add('front-div');

        const workTitle = document.createElement('p');
        workTitle.classList.add('front-text');
        workTitle.textContent = workArray[i].title;
        frontDiv.appendChild(workTitle);

        const backDiv = document.createElement('div');
        backDiv.classList.add('back-text');

        const workPre = document.createElement('a');
        workPre.classList.add('work-links');
        workPre.href = workArray[i].preview;
        workPre.textContent = 'View Live Website';
        
        const linkGH = document.createElement('a');
        linkGH.classList.add('work-links');
        linkGH.href = workArray[i].ghLink;
        linkGH.textContent = 'View Code on GitHub';

        backDiv.append(workPre, linkGH);

        flipCard.append(frontDiv, backDiv);

        worksDiv.appendChild(flipCard);
    } 
})();
