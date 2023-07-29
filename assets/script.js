
//ajout du lien
fetch("https://jsonplaceholder.typicode.com/users") 
    .then(res => res.json())
    .then(users => {
        let columnsHtml = "<div class='user-columns'>";
        users.forEach((element, index) => {
            // Chemin d'accès à l'image correspondant à l'utilisateur
            // affichage des photos telechargee
            let imagePath = `./photo_users/${index + 1}.jpg`; 

            //les donnees json vers html
            //affichage
            let column = `
                <div class='user-column'>
                    <img src='${imagePath}' alt='${element.username}' >
                    <h2>${element.username}</h2>
                    <p><strong>Name:</strong> ${element.name}</p>
                    <p><strong>Email:</strong> ${element.email}</p>
                    <p><strong>Address:</strong> ${element.address.street}</p>
                    <p><strong>Contact:</strong> ${element.phone}</p>
                    <p><strong>Website:</strong> ${element.website}</p>
                    <p><strong>Company:</strong> ${element.company.name}</p>
                </div>
            `;
            columnsHtml += column;
        });
        columnsHtml += "</div>";

        document.getElementById("users-list").innerHTML = columnsHtml;
    })
    .catch(error => console.error(error));
