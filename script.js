const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');
const cardWrapper = document.querySelector('.content-main__list');

const deployPrefix = '/abito/';

const productsList = [
    {
        id: 0,
        title: 'Первый товар',
        price: '170 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png',
        url: deployPrefix + 'product.html'
    },
    {
        id: 1,
        title: 'Второй товар',
        price: '171 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png',
        url: deployPrefix + 'product.html'
    },
    {
        id: 2,
        title: 'Третий товар',
        price: '172 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png',
        url: deployPrefix + 'product.html'
    },
    {
        id: 3,
        title: 'Четвертый товар',
        price: '173 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png',
        url: deployPrefix + 'product.html'
    },
    {
        id: 4,
        title: 'Пятый товар',
        price: '174 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png',
        url: deployPrefix + 'product.html'
    },
    {
        id: 5,
        title: 'Шестой товар',
        price: '175 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './images/card-img.png',
        url: deployPrefix + 'product.html'
    }
]

const renderProducts = (products) => {
    cardWrapper.innerHTML = '';

    products.forEach((product) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="${product.url}" class="content-main__list-item" data-id="${product.id}">
                <div class="content-main__list-item--img">
                    <img src="${product.img}" alt="${product.title}">
                </div>
                
                <h5 class="content-main__list-item--title">
                    ${product.title}
                </h5>
                <strong class="content-main__list-item--price">
                    ${product.price}
                </strong>

                <div class="content-main__list-item--desc-box">
                    <span class="content-main__list-item--desc">
                        ${product.address}
                    </span>                                
                    <span class="content-main__list-item--desc">
                        ${product.date}
                    </span>
                </div>
            </a>
        `);
    })
}

const searchProducts = (products, search) => {
    return products.filter(product => product.title.includes(search) || product.price.includes(search));
}

cardWrapper.style.justifyContent = 'flex-start';
cardWrapper.style.gap = '30px';

renderProducts(productsList);

searchBtn.addEventListener('click', () => {
    renderProducts(searchProducts(productsList, searchInput.value));
});