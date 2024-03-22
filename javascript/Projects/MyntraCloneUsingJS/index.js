let bagItems;
onLoad();

function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagItem();
}
function addToBag(itemsId){
    bagItems.push(itemsId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagItem();
}
function displayBagItem(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length > 0)
    {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}
function displayItemsOnHomePage(){
    let itemsContainerElement = document.querySelector('.items-container');
    console.log(itemsContainerElement);
    if(!itemsContainerElement){
        return;
    }
    const items = [{
    id: '001',
    item_image : '1.jpg',
    rating : {
        stars : 4.5,
        noOfReviews : 1.4
    },
    comapny_name : 'Calton London',
    item_name : 'Rhodium-Plated CZ Floral Studs',
    return_period: 14,
    delivery_date: '10 Oct 2023',
    price : {
        current_page : 606,
        original_price : 1045,
        discount : 42,
    }
},
{
    id: '002',
    item_image : '2.jpg',
    rating : {
        stars : 4.5,
        noOfReviews : 1.4
    },
    comapny_name : 'CUKOO',
    item_name : 'Women Padded Halter Neck Swimming Dress',
    return_period: 14,
    delivery_date: '10 Oct 2023',
    price : {
        current_page : 606,
        original_price : 1045,
        discount : 42,
    }
},
{
    id: '003',
    item_image : '3.jpg',
    rating : {
        stars : 4.5,
        noOfReviews : 1.4
    },
    comapny_name : 'NUEVOSDAMAS',
    item_name : 'Women Red & White Printed A-Line Knee-Length Skirts',
    return_period: 14,
    delivery_date: '10 Oct 2023',
    price : {
        current_page : 606,
        original_price : 1045,
        discount : 42,
    }
},
{
    id: '004',
    item_image : '4.jpg',
    rating : {
        stars : 4.5,
        noOfReviews : 1.4
    },
    comapny_name : 'ADIDAS',
    item_name : 'Indian Cricket ODI Jersey',
    return_period: 14,
    delivery_date: '10 Oct 2023',
    price : {
        current_page : 606,
        original_price : 1045,
        discount : 42,
    }
},
{
    id: '005',
    item_image : '5.jpg',
    rating : {
        stars : 4.5,
        noOfReviews : 1.4
    },
    comapny_name : 'Roadster',
    item_name : 'Pure Cotton T-shirt',
    return_period: 14,
    delivery_date: '10 Oct 2023',
    price : {
        current_page : 606,
        original_price : 1045,
        discount : 42,
    }
},
{
    id: '006',
    item_image : '6.jpg',
    rating : {
        stars : 4.5,
        noOfReviews : 1.4
    },
    comapny_name : 'Nike',
    item_name : 'Men ReactX Running Shoes',
    return_period: 14,
    delivery_date: '10 Oct 2023',
    price : {
        current_page : 606,
        original_price : 1045,
        discount : 42,
    }
},
{
    id: '007',
    item_image : '7.jpg',
    rating : {
        stars : 4.5,
        noOfReviews : 1.4
    },
    comapny_name : 'The Indian Garage Co',
    item_name : 'Men Slim Fit Regular Shorts',
    return_period: 14,
    delivery_date: '10 Oct 2023',
    price : {
        current_page : 606,
        original_price : 1045,
        discount : 42,
    }
},
{
    id: '008',
    item_image : '8.jpg',
    rating : {
        stars : 4.5,
        noOfReviews : 1.4
    },
    comapny_name : 'Nivea',
    item_name : 'Men Fresh Deodrant 150ml',
    return_period: 14,
    delivery_date: '10 Oct 2023',
    price : {
        current_page : 606,
        original_price : 1045,
        discount : 42,
    }
},]
let innerHTML = '';
items.forEach(items =>{
    innerHTML += `
    <div class="item-container">
        <img class="item-image" src="${items.item_image}" alt="itemImage">
        <div class="rating">
            ${items.rating.stars} ⭐ | ${items.rating.noOfReviews}k
        </div>
        <div class="company-name">${items.comapny_name}</div>
        <div class="item-name">${items.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${items.price.current_page}</span>
            <span class="original-price">Rs ${items.price.original_price}</span>
            <span class="discount">(${items.price.discount}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${items.id})">Add to Bag</button>
    </div>
`
})
itemsContainerElement.innerHTML = innerHTML;
}

