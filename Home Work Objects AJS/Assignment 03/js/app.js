let rName = document.getElementById('recipe-name');
let rIngredients = document.getElementById('ingredients');
let rInstructions = document.getElementById('instructions');
let btn = document.getElementById('btn');
let form = document.getElementById('form')
let tbody = document.getElementById('tbody')
function Recepies(name, ingredients, instructions) {
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;

}
let recepies = [];


form.addEventListener('submit', function(event) {
    event.preventDefault();
    let newRecipe = new Recepies(rName.value, rIngredients.value, rInstructions.value );
    recepies.push(newRecipe);
    console.log(recepies);
    displayItems(recepies, tbody)
    clearInput();
})

function clearInput() {
    rName.value = '';
    rIngredients.value ='';
    rInstructions.value = '';

}



function displayItems(data, tbody) {
    let tableData = '';
    tbody.innerHTML = '';
    data.forEach((rec) => {
        tableData += `
        <tr>
        <td>${rec.name}</td>
        <td>${rec.ingredients}</td>
        <td>${rec.instructions}</td></tr>`
    })
    tbody.innerHTML = tableData;

}