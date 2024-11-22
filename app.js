const container = document.querySelector(".container1")

fetch("https://dummyjson.com/products")
.then((res) => res.json())
.then((res) => {
    console.log(res);
    console.log(res.products);
    res.products.map((item)=> {
        container.innerHTML += `<div class="card m-5" style="width: 18rem; ">
        <img src="${item.thumbnail}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description.slice(0,30)}...</p>
            <a href="#" class="btn btn-primary" onclick="showMore(${item.id})">Show More</a>
        </div>
        </div> `
    });
})
.catch((err)=> {
    console.log(err);
})
  

const showMore = (id) => {
    console.log(id);
    localStorage.setItem("id", id);
    window.location = "singleProduct.html";
};
