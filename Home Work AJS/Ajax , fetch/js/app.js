let checkBtn = document.getElementById('btn');
checkBtn.addEventListener('click', function() {
    $.ajax({
        url: 'http://api.open-notify.org/astros.json',
        method: 'GET',
        success: function(response) {
            console.log(response);
            let astronauts = response.people
            let list = document.getElementById('list');
            for(let astronaut of astronauts) {
                list.innerHTML += `<li>${astronaut.name}</li>`;
            }
        },
        error: function(error) {
            alert('Something went wrong');
        }
    })
})


let clickBtn = document.getElementById('btnClick')
clickBtn.addEventListener('click', function() {
    let tBody = document.getElementById('tbody');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
         for(let operator of data) {
             tBody.innerHTML += `
            <tr>
            <td>${operator.name}</td>
            <td>${operator.email}</td>
            </tr>`
        }
    })
    .catch(error => {
        alert('Something went wrong');
    })
})


