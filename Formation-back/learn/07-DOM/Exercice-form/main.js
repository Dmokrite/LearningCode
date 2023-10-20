const friendsList = document.getElementById('friendsList');
const box = document.querySelector('.box');
const box2 = document.querySelector('.box2');
const passionsCopy = [...passions];

function createParagraph(text) {
    const paragraph = document.createElement('p');
        paragraph.textContent = text;
    return paragraph;
}

function createDivWithFlexDisplay() {
    const div = document.createElement('div');
        div.style.display = 'flex';
    return div;
}

function createImage(src, width, height) {
    const img = document.createElement('img');
        img.src = src;
        img.style.width = width;
        img.style.height = height;
    return img;
}

function createButton(text) {
    const button = document.createElement('button');
        button.textContent = text;
    return button;
}

function displayFriendInfo(friend) {
    box.innerHTML = '';
    document.getElementsByClassName('right')[0].style.display = 'flex';
    const infoContainer = createDivWithFlexDisplay();
    const coverImg = createImage(`public/cover/${friend.cover}`, '100%', '70%');
    const photoThumbnail = createImage(`public/${friend.photo}`, '50px', '50px');
          photoThumbnail.style.marginLeft = '15px';
    const nameParagraph = createParagraph(friend.name);
          nameParagraph.style.fontWeight = 'bold';
          nameParagraph.style.fontSize = '25px';
    const dataContainer = createDivWithFlexDisplay();
          dataContainer.style.marginLeft = '15px';
    const adresseParagraph = createParagraph(friend.adresse);
    const nParagraph = createParagraph(`N°${friend.n}`);
    const locationContainer = createDivWithFlexDisplay();
          locationContainer.style.marginLeft = '15px';
    const cpParagraph = createParagraph(friend.cp);
    const villeParagraph = createParagraph(friend.ville);
    const paysParagraph = createParagraph(friend.pays);
          paysParagraph.style.marginLeft = '20px';
    const adressParagraph = createParagraph(friend.adress);
          adressParagraph.style.marginLeft = '65px';

    dataContainer.appendChild(adresseParagraph);
    dataContainer.appendChild(nParagraph);
    locationContainer.appendChild(cpParagraph);
    locationContainer.appendChild(villeParagraph);
    infoContainer.appendChild(photoThumbnail);
    infoContainer.appendChild(nameParagraph);

    box.appendChild(coverImg);
    box.appendChild(infoContainer);
    box.appendChild(adressParagraph);
    box.appendChild(locationContainer);
    box.appendChild(dataContainer);
    box.appendChild(paysParagraph);
}

function displayPassions(friendId) {
    const friend = friends.find(f => f.id === friendId);
    const friendPassions = friend.passions.map(passionId => {
    const passion = passions.find(p => p.id === passionId);
    return passion? { title: passion.title, description: passion.description } : null;
    });

    box2.innerHTML = '<h3> Ses passions</h3>';
    /*friendPassions.forEach(passion => {
        if (passion) {
            const passionTitleButton = createButton(passion.title);

            box2.appendChild(passionTitleButton);

            const passionDescription = createParagraph(passion.description);
            passionDescription.style.display = 'none';

            box2.appendChild(passionDescription);

            passionTitleButton.addEventListener('click', () => {
                passionDescription.style.display = passionDescription.style.display === 'none' ? 'block' : 'none';
            });
        }
    });*/
    for (const passion of friendPassions) {
        if (passion) {
            const passionTitleButton = createButton(passion.title);

                box2.appendChild(passionTitleButton);

            const passionDescription = createParagraph(passion.description);
                passionDescription.style.display = 'none';

                box2.appendChild(passionDescription);

                passionTitleButton.addEventListener('click', () => {
                passionDescription.style.display = passionDescription.style.display === 'none' ? 'block' : 'none';
            });
        }
    }

    const addButton = createButton('Ajouter Passion');

        box2.appendChild(addButton);

        addButton.addEventListener('click', () => {
            document.getElementById('passionPopup').style.display = 'block';
    });
}

function addPassion(friendId, title, description) {
    const newPassionObj = {
        id: passionsCopy.length + 1,
        title: title,
        description: description,
    };
    if(title !==undefined){
        passionsCopy.push(newPassionObj);

        const newPassionTitleButton = createButton(title);
    
        const newPassionDescription = createParagraph(description);
            newPassionDescription.style.display = 'none';

        box2.insertBefore(newPassionDescription, box2.childNodes[box2.childNodes.length - 2]);
        box2.insertBefore(newPassionTitleButton, box2.childNodes[box2.childNodes.length - 2]);

        newPassionTitleButton.addEventListener('click', () => {
            newPassionDescription.style.display = newPassionDescription.style.display === 'none' ? 'block' : 'none';
        })
    };
}

const friendId = 1;
    addPassion(friendId);

for (const friend of friends) {
    const listItem = document.createElement('li');
        listItem.textContent = friend.name;
        listItem.addEventListener('click', () => {
            displayFriendInfo(friend);
            displayPassions(friend.id);
        });
    friendsList.appendChild(listItem);
}

document.getElementById('openPassionPopup').addEventListener('click', () => {
    document.getElementById('passionPopup').style.display = 'block';
});


document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('passionPopup').style.display = 'none';
});

document.getElementById('passionForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('passionTitle').value;
    const description = document.getElementById('passionDescription').value;

    if (title && description) {
        
        addPassion(friendId, title, description);

        document.getElementById('passionPopup').style.display = 'none';

        document.getElementById('passionTitle').value = '';
        document.getElementById('passionDescription').value = '';
    }
});

document.getElementById('passionPopup').addEventListener('click', (event) => {
    if (event.target === document.getElementById('passionPopup')) {
        document.getElementById('passionPopup').style.display = 'none';
    }
});
