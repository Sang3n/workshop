console.log("hellow js")

// Could be GET or POST/PUT/PATCH/DELETE
fetch('https://dummyjson.com/products')
.then(response=> {
    return  response.json()}
     )
.then((jsonData)=>{
    console.log (jsonData.product.map ((product) =>`${product.title}, Price:${product.price}`))

}
)