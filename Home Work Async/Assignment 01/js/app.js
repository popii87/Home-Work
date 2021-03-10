const getDocuments = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/users',
            method: 'GET',
            success: (response) => {
                resolve(response);
            },
            error: (err) => {
                reject(err);
            }
        })
    })
}

const showDocuments = (documents) => {
    documents.forEach(doc => {
        console.log(`${doc.name}`);
    });
}
getDocuments()
.then(data => {
    console.log('We got it');
    showDocuments(data)
})
.catch(err => console.log(err))
.finally(()=>console.log('We did it'))




