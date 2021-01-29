let firstInput = $("#firstInput");
let secondInput = $('#secondInput');
let btn = $('#btn');

btn.on('click', function() {
    let firstInputV = firstInput.val();
    let secondInputV = secondInput.val();
    let h1 = $('<h1></h1>').text(`${firstInputV}`).css('color',`${secondInputV}`);
    btn.after(h1);

});