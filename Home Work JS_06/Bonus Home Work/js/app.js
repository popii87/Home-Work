let div = document.getElementById('myDiv');
let h1 = document.createElement('h1');

let list = document.createElement('ul');

let recipe = prompt('Name of recipe');
let nameOfRecipe = document.createTextNode(recipe);
h1.appendChild(nameOfRecipe);
div.appendChild(h1);

function listOfIngredients() {
    let num = parseInt(prompt('Number of Ingredients'));
    for(i = 0; i < num; i++) {
        let ing = prompt(`enter ingredient ${i+1}`);
        list.innerHTML += `<li>${ing}</li>`;
        div.appendChild(list);
    }
}
listOfIngredients();