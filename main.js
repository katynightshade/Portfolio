const worksDiv = document.querySelector('title-display');

const titleArray = [
    'Restaurant Site',
    'Tic-Tac-Toe',
    'Library Application',
    'Admin Dashboard',
    'Wild Wonders Sign-Up',
    'Recipes of the Realms',
    'Simple Calculator',
    'Etch-A-Sketch',
    'Rock, Paper, Scissors'
];

for (let i = 0; i < titleArray.length; i++) {
    const workTitle = document.createElement('p');
    workTitle.classList.add('front-text');
    workTitle.textContent = titleArray[i];
    //how to append worktitle to worksdiv
}

