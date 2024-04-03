const prroducs = document.querySelector('.prroducs');
const openbasket = document.querySelector('#openbasket') ;
const openbasketmodal = document.querySelector('.openbasketmodal');

const data = [
  {
    id: 1,
    img: "./img/item_01-480x480 1.png",
    name: "Cheeseburger With Salad",
    price: 18,
  },
  {
    id: 2,
    img: "./img/Burger.png",
    name: "Beef Burger",
    price: 15,
  },
  {
    id: 3,
    img: "./img/item_01-480x480 1 (1).png",
    name: "Royel Cheeseburger",
    price: 16,
  },
  {
    id: 4,
    img: "./img/item_01-480x480 1 (2).png",
    name: "Black Gambugrer",
    price: 14,
  },
  {
    id: 5,
    img: "./img/item_01-480x480 1 (3).png",
    name: "Chicken Burger",
    price: 15,
  },
];

const basket = JSON.parse(localStorage.getItem('banan')) || []

function addcard(index) {
  basket.push(data[index])
  localStorage.setItem('banan', JSON.stringify(basket))

}


data.map((item, index) => {
  prroducs.innerHTML += `
    <div class="card">
    <img src="${item.img}">
    <p>${item.name}</p>
    <span>$${item.price}</span>
    <button onclick="addcard(${index})"  >Add to Cart</button>
    </div>
    
    `;
});

let son = 0;

openbasket.addEventListener("click", function (){
  son++;

if(son%2===0){
  openbasketmodal.style.transform = "translateY(0px)";
}
else{
  openbasketmodal.style.transform = "translateY(-600px)";
}
});



// open modal boxga olkaldagi get qilip chiqarish


basket.map((item)=>{

openbasketmodal.innerHTML+=`

<div class="basketbox">
<span>${item.id}</span>
<img src="${item.img}" alt="">
<p>${item.nami}</p>
<p>${item.price}</p>
<div>
    <button>x</button>
</div>

</div>

`;
})











































