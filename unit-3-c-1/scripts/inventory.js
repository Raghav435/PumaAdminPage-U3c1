 let myData = JSON.parse(localStorage.getItem("products"));
 console.log(myData);

 myData.map(function(ele, index){
     let div = document.createElement("div");

     let type = document.createElement("p")
     type.innerText = ele.type;

     let description = document.createElement("p");
     description.innerText = ele.desc;

     let price = document.createElement("p");
     price.innerText = ele.price;

     let image = document.createElement("img");
     image.src = ele.image;

     let btn = document.createElement("button");
     btn.innerText = "Remove";
     btn.style.cursor = "pointer";
     btn.setAttribute("id","remove_product")
     btn.addEventListener("click", function(){
         removeFun(ele, index);
     })

     div.append( image, type, description, price, btn);
     document.querySelector("#all_products").append(div);
     console.log(myData);
 });

 function removeFun(ele, index){
     console.log(ele, index);
     myData.splice(index, 1);

     console.log(myData);

     localStorage.setItem("products", JSON.stringify(myData));
     window.location.reload();
 };