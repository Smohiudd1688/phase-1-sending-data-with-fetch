// Add your code here
function submitData (name, email) {
    const userData = {
        name: name,
        email: email
    };
    
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userData),
    };

    return fetch ("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(object => {
        const userID = object['id'];
        const p = document.createElement('p');
        p.textContent = userID;

        document.body.appendChild(p);
    })
    .catch(error => {
        const p = document.createElement('p');
        p.textContent = error.message;
        document.querySelector('body').appendChild(p);
    });
}




