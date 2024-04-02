const prroducs = document.querySelector('.prroducs')



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


function addcard(index){
  alert(index)
}


   data.map((item,index)=>{
    prroducs.innerHTML +=`
    <div class="card">
    <img src="${item.img}">
    <p>${item.name}</p>
    <span>$${item.price}</span>
    <button onclick="addcard(${index})"  >Add to Cart</button>
    </div>
    
    `;
   });















