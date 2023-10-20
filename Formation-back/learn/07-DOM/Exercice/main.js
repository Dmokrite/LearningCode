const datas = [
    {
        "src" : "public/monstre1.jpg",
        "title" : "Boule verte",
        "alt" : "Monstre poilu vert",
        "id" : 1
    },
    {
        "src" : "public/monstre2.jpg",
        "title" : "Tentaculos",
        "alt" : "Pieuvre bleue à rayures",
        "id" : 2
    },
    {
        "src" : "public/monstre3.jpg",
        "title" : "Monstre à sucette",
        "alt" : "Monstre à sucette",
        "id" : 3
    },
    {
        "src" : "public/monstre4.jpg",
        "title" : "Triglobuleux",
        "alt" : "Monstre à 3 zieux",
        "id" : 4
    },
    {
        "src" : "public/monstre5.jpg",
        "title" : "Diablotin",
        "alt" : "Diable rouge",
        "id" : 5
    },
    {
        "src" : "public/monstre6.jpg",
        "title" : "Chewbacca rose",
        "alt" : "Monstre poilu rose",
        "id" : 6
    }
];

function createThumbnail(data) {
    const img = document.createElement('img');
        img.src = data.src;
        img.alt = data.alt;
        img.title = data.title;
        img.dataset.id = data.id;
        img.width = 150;
        img.height = 150;
    return img;
}

function createElementTitle(text) {
    const title = document.createElement('h3');
          title.textContent = text;
    return title;
}

function showPreview(data, preview) {
    const previewImg = createThumbnail(data);
          previewImg.classList.add('preview-image');

    const title = createElementTitle(data.title);
          title.style.fontWeight = 'bold';
          title.style.marginTop = '10px';
          title.style.color = "green"
          title.style.textShadow = "2px 2px 2px rgb(36, 205, 228)"

    const deleteButton = createDeleteButton(preview);

    const imageContainer = document.createElement('div');
          imageContainer.classList.add('image-container');
          imageContainer.appendChild(previewImg);

    preview.innerHTML = '';
    preview.appendChild(title);
    preview.appendChild(imageContainer);
    preview.appendChild(deleteButton);
}

function createDeleteButton(preview) {
    const deleteButton = document.createElement('button');
          deleteButton.textContent = 'X';
          deleteButton.classList.add('delete-button');
          deleteButton.addEventListener('click', () => {
          clearPreview(preview);
        }
    );

    return deleteButton;
}

function clearPreview(preview) {
    preview.innerHTML = '';
}

function createImageGallery(gallery, preview, datas) {
    for (const data of datas) {
        const thumbnail = createThumbnail(data);
              thumbnail.addEventListener('click', () => {
                showPreview(data, preview);
            });
        gallery.appendChild(thumbnail);
    }
}

const gallery = document.querySelector('.galery');
const preview = document.querySelector('.preview');

createImageGallery(gallery, preview, datas);
