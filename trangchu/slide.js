//---------------------------------silde-gioi-thieu------------------//
const bigImg = document.querySelector(".product-content-left-big-img img")
const smalImg = document.querySelectorAll(".product-content-left-small-img img")
smalImg.forEach(function(imgItem,x){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})



const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chitiet")
if(baoquan){
    baoquan.addEventListener("click",function(){
        document.querySelector(".product-content-right-buttom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-buttom-content-baoquan").style.display = "block"
    })
}
if(chitiet){
    chitiet.addEventListener("click",function(){
        document.querySelector(".product-content-right-buttom-content-baoquan").style.display = "none"
        document.querySelector(".product-content-right-buttom-content-chitiet").style.display = "block"
    })
}
const button = document.querySelector(".product-content-right-buttom-top")
if(button){
    button.addEventListener("click",function(){
        document.querySelector(".product-content-right-buttom-content-big").classList.toggle("activeB")
        
    })
}