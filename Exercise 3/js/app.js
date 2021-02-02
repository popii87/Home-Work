let fName = document.getElementById('fname');
let lName = document.getElementById('lname');
let pNumber = document.getElementById('phone');
let btn = document.getElementById('saveBtn');
let contacts = [];

function Contacts(fName, lName, pNumber) {
    this.firstName = fName;
    this.lastName = lName;
    this.phoneNumber = pNumber;
}


btn.addEventListener('click', function(e){
    let table = document.getElementById('tbody');
    let newContact = new Contacts(fName.value, lName.value, pNumber.value);
    contacts.push(newContact);
    displayContacts(contacts, table);
    
});

function displayContacts(contacts, table) {
    
    for(let i = 0; i < contacts.length; i++) {
        table.innerHTML += `<tr>
        <td>${contacts[i].firstName}</td>
        <td>${contacts[i].lastName}</td>
        <td>${contacts[i].phoneNumber}</td>
        </tr>`
    }
}