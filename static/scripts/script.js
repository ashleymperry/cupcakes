const cupcakeDetails = document.createElement("div");
const newCupcake = document.createElement("li");
let form = document.querySelector('form');
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    let data = {
        flavor: form.flavor.value,
        rating: form.rating.value,
        size: form.size.value,
        image: form.image.values
    };
    let res = await axios.post('/api/cupcakes', data=data);
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let link = document.createElement('a');
    link.innerText = `${data.size} ${data.flavor} ${data.rating}`;
    li.appendChild(link);
    ul.appendChild(li);
    
    let inputs = document.querySelectorAll('input');
    for (let input of inputs ) {
        input.value = '';
    }
});
let list = document.querySelector('ul');
window.addEventListener('DOMContentLoaded', async function(e) {
    let res = await axios.get('/api/cupcakes');
    console.log(res);
    for ( let cupcake of res.data.cupcakes ) {
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.innerText = `${cupcake['size']} ${cupcake['flavor']} ${cupcake['rating']}`;
        li.appendChild(link);
        list.appendChild(li);
    }
});

//window.onload=function(){
let deleteBtn = document.getElementById("delete-button");
deleteBtn.addEventListener("click", function() {
  let item = document.getElementById("flavor").value;
  let text = document.createTextNode(flavor);
  let li = document.createElement('li');
  let btn = document.createElement("button");
  btn.textContent = "x";
  btn.style.marginLeft = "10px";
  li.appendChild(text);
  li.appendChild(btn);
  document.getElementById('cupcakes').appendChild(li);
  btn.addEventListener('click', function() {
    this.parentElement.remove();
})
})
//}

//cupcakeDetails.append(deleteButton);
//newCupcake.append(cupcakeDetails);
