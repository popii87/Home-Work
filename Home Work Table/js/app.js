let btn = document.getElementById('btn');
// let table = document.getElementById('table');

// btn.addEventListener('click', function() {
//     let rows = parseInt(prompt('Input number of rows'));
//     let cells = parseInt(prompt('Input number of cell'));
//     for(i = 0; i < rows; i++) {
//         let newRow = table.insertRow(i);
//         for(c = 0; c < cells; c++) {
//             let newCell = newRow.insertCell(c);
//             newCell.textContent = `Row : ${i} Column ${c}`;
//             table.border = 2;
//         }
//     }

// })

let tableDiv = document.getElementById('tableDiv');

btn.addEventListener('click', function() {
    
    let table = document.createElement('table');
    let rows = parseInt(prompt('Input number of rows'));
    let cells = parseInt(prompt('Input number of cells'))
    for(i = 0; i < rows; i++) {
        let row = document.createElement('tr');
        table.appendChild(row);
        for( c = 0; c < cells; c++) {
            let cell = document.createElement('td');
            cell.appendChild(document.createTextNode(`Row: ${i} Column: ${c}`));
            row.appendChild(cell);
           
        }
    }
    table.setAttribute('border', '5');
    tableDiv.appendChild(table);
})

// Ova vtoroto mi e pointeresno deka ima poveke novi raboti, no ako prodolzev da koristam google veruvam ke najdev use nekolku resenija :), se nadevam ke ja prodiskutirame na cas...