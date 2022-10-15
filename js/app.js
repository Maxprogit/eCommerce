const productData = [
    {
        index: '01',
        name: 'yellow tracksuite',
        image: 'img1.jpg',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo unde, tenetur tempora eveniet voluptas inventore!'

    },
    {
        index: '02',
        name: 'designer outfit',
        image: 'img2.jpg',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo unde, tenetur tempora eveniet voluptas inventore!'

    },
    {
        index: '03',
        name: 'chilling mood',
        image: 'img3.jpg',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo unde, tenetur tempora eveniet voluptas inventore!'

    },
]

const nxtBtn = document.querySelector('.nxt-btn')
let smImgContainer = document.querySelector('.sm-product-img-container')
let smImg = document.querySelector('.sm-product-img')
let productIndex = document.querySelector('.product-index')
let smProductDes = document.querySelector('.sm-product-des')

let productImgContainer = document.querySelector('.produc-img-container')
let productImg = document.querySelector('.product-img')
let backdroImg = document.querySelector('.backdrop-img')

let productDetail = document.querySelector('.product-detail')
let productName = document.querySelector('.product-name')
let productDes = document.querySelector('.product-des')

let currentProduc = 0

nxtBtn.addEventListener('click', () => {
    if(currentProduc >= productData.length -1){
        currentProduc = 0
    }else{
        currentProduc++
    }
    productIndex.innerHTML = productData[currentProduc].index
    smProductDes.innerHTML = productData[currentProduc].des.slice(0, 80)
})