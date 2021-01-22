let firstHeader = document.getElementById('myTitle');
firstHeader.textContent = '';
firstHeader.textContent = 'Indeed! Very cool page';
console.log(firstHeader);

let secondHeader = document.getElementsByTagName('div') [2].firstElementChild;
secondHeader.innerText = 'This header is changed too!';

let header3 = secondHeader.nextElementSibling;
header3.textContent = 'And this one changed! ';

let firstParagraph = document.getElementsByClassName('paragraph') [0];
firstParagraph.textContent = 'There we go, we changed the paragraph';

let secondParagraph = document.getElementsByClassName('second') [0];
secondParagraph.innerText = 'Easy, we can change everything!';
