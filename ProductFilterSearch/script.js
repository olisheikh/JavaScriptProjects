let product_list = {
    data: [
        {
            productName: 'High Neck',
            category:'Regular',
            price:120,
            img: "assets/high-neck.jpg"
        },
        {
            productName: 'Jackets',
            category:'Regular',
            price:320,
            img: "assets/jackets.jpg"
        },
        {
            productName: 'Swater',
            category:'Pants',
            price:220,
            img: "assets/swater.jpg"
        },  
        {
            productName: 'T-Shirt',
            category:'T-Shirt',
            price:150,
            img: "assets/t-shirt.jpg"
        },
        {
            productName: 'Tops',
            category:'Tops',
            price:200,
            img: "assets/tops.jpg"
        },
        {
            productName: 'Jackets',
            category:'Regular',
            price:320,
            img: "assets/jackets.jpg"
        },
        {
            productName: 'High Neck',
            category:'Regular',
            price:120,
            img: "assets/high-neck.jpg"
        },
        {
            productName: 'Jackets',
            category:'Regular',
            price:320,
            img: "assets/jackets.jpg"
        },
        {
            productName: 'Swater',
            category:'Pants',
            price:220,
            img: "assets/swater.jpg"
        },
        {
            productName: 'T-Shirt',
            category:'T-Shirt',
            price:150,
            img: "assets/t-shirt.jpg"
        },
        {
            productName: 'Tops',
            category:'Tops',
            price:200,
            img: "assets/tops.jpg"
        },
        {
            productName: 'Jackets',
            category:'Regular',
            price:320,
            img: "assets/jackets.jpg"
        },
    ]
}

for (let i of product_list.data) {
    let card = document.createElement('div');

    card.classList.add('card', i.category, "hide");

    let imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');

    let img = document.createElement('img');
    img.setAttribute('src', i.img);
    imgContainer.appendChild(img);
    card.appendChild(imgContainer);

    let con = document.createElement("div");
    con.classList.add("con");

    let name = document.createElement('h5');
    name.classList.add('product-name');
    name.innerText = i.productName.toUpperCase();
    con.appendChild(name);

    let price = document.createElement('h6');
    price.innerText = `${i.price}`;
    con.appendChild(price);

    card.appendChild(con);
    document.getElementById('products').appendChild(card);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll('.button-value');
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    let containerName = document.querySelectorAll('.card');

    containerName.forEach((elements) => {
        if (value.toUpperCase() == 'all'.toUpperCase()) {
            elements.classList.remove('hide');
        } else {
            if (elements.classList.contains(value)) {
                elements.classList.remove('hide');
            } else {
                elements.classList.add('hide');
            }
        }
    });
}

document.getElementById('search-button').addEventListener('click', () => {
    let searchInput = document.getElementById('search-input').value;
    let productName = document.querySelectorAll('.product-name');
    let cards = document.querySelectorAll('.card');

    productName.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove('hide');
        } else {
            cards[index].classList.add('hide');
        }
    })
});

window.onload = () => {
    filterProduct('all');
};