

//  configurationObject = {
//     method: 'POST',
//     headers: {
//         "Content-type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Buddy",
//         dogBreed: "Fluffey Boy",
//         dogDescription: "The bestest of pups"
//     })
// }


// const submitData = (name, email) => {
//     fetch('http://localhost:3000/users', {
//         method: 'POST',
//         headers: {
//         "Content-type": "application/json", 
//         "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             name: name,
//             email: email,
//         })
//         .then(res => res.json())
//         .then(data => data.id)
//     } 
// )};

const submitData = (userName, userEmail) => {
    
    const newUser ={
    name: userName,
    email: userEmail,
    }

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
        "Content-type": "application/json", 
        "Accept": "application/json"
        },
        body: JSON.stringify(newUser)

    })
    .then(res => res.json())
    .then(data => addUser(data))
    .catch(error => handleError(error))
}

function addUser (newUser) {
    let newId = document.createElement('p');
    newId.textContent = newUser.id
    document.body.append(newId)
}

function handleError(error){
    let newError = document.createElement('p')
    newError.textContent = error.message
    document.body.append(newError)
}