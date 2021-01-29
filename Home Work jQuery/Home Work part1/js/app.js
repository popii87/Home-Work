let input = $('#new-input');
let btn = $('#greet');
let h1 = $('#heading');

btn.on('click', function() {
    let newInput = input.val();
    h1.text(`Hello there ${newInput}!`);
})