//store the products array in localstorage as "products"

function Product(t, d, p, i){
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
  }

function myFunction(e){
  e.preventDefault();
  let form = document.getElementById("products");
  let type = form.type.value;
  let desc = form.desc.value;
  let price = form.price.value;
  let image = form.image.value;

  let s1 = new Product(type, desc, price, image);

  let prdtArr =JSON.parse(localStorage.getItem("products")) || [];

  prdtArr.push(s1);

  localStorage.setItem("products",JSON.stringify(prdtArr));

  console.log(s1);
}