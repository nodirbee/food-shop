const prroducs = document.querySelector('.prroducs');
const openbasket = document.querySelector('#openbasket') ;
const openbasketmodal = document.querySelector('.openbasketmodal');
const tbody = document.querySelector('tbody');

const data = [
  {
    id: 1,
    img: "./img/item_01-480x480 1.png",
    name: "Cheeseburger With Salad",
    price: 18,
    count:1,
  },
  {
    id: 2,
    img: "./img/Burger.png",
    name: "Beef Burger",
    price: 15,
    count:1,
  },
  {
    id: 3,
    img: "./img/item_01-480x480 1 (1).png",
    name: "Royel Cheeseburger",
    price: 16,
    count:1,
  },
  {
    id: 4,
    img: "./img/item_01-480x480 1 (2).png",
    name: "Black Gambugrer",
    price: 14,
    count:1,
  },
  {
    id: 5,
    img: "./img/item_01-480x480 1 (3).png",
    name: "Chicken Burger",
    price: 15,
    count:1,
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
    <span>$${item.price}</sp
    count:1,an>
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

  tbody.innerHTML+=`
  <tr>
  <td>${item.id}</td>
  <td> <img src="${item.img}" /> </td>
  <td>${item.name}</td>
  <td>${item.price}</td>
  <td id="count-controller"> <button>-</button>   ${item.count} <button>+</button>     </td>
  <td> <button id="del">del</button>  </td>
</tr>
  
  
  
  
  `
})








































