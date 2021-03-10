let tbody = document.getElementById('tbody');


async function getStarships() {
    let result = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await result.json();
    console.log(data);
    showDocument(data, tbody);
}
getStarships();

const showDocument = (documents, tbody) => {
    let tableData = '';
    tbody.innerHTML='';
    documents.forEach(doc => {
        tableData += `<tr>
        <td>${doc.name}</td>
        <td>${doc.address.city}</td>
        </tr>`
    })
    tbody.innerHTML = tableData;
}