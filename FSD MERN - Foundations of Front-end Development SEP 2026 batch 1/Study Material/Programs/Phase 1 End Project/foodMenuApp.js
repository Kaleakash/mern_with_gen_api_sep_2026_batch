//alert("JS Code loaded...")
let  BASE_URL ="https://www.themealdb.com/api/json/v1/1/categories.php"
function loadFoodDetails() {
    // fetch(BASE_URL)
    // .then(response=>response.json())
    // .then(result=>console.log(result.categories))
    // .catch(error=>console.log(error))
    // .finally(()=>console.log("Data Loaded.."))

     fetch(BASE_URL)
    .then(response=>response.json())
    .then(result=>{
        let foodDetails = result.categories
        foodDetails.forEach(menu=> {
            let divTag = document.createElement("div")
            // image creation and set attribute 
            let foodImage = document.createElement("img")
            foodImage.setAttribute("src",menu.strCategoryThumb)
            foodImage.setAttribute("width","150px")
            foodImage.setAttribute("height","150px")

            let foodCategoryTag = document.createElement("b")
            let foodCategoryContent = document.createTextNode(menu.strCategory+" : ")
            foodCategoryTag.appendChild(foodCategoryContent)


            let foodDescriptionTag = document.createElement("i")
            let foodDescriptionContent = document.createTextNode(menu.strCategoryDescription)
            foodDescriptionTag.appendChild(foodDescriptionContent)


            divTag.appendChild(foodImage)
            divTag.appendChild(foodCategoryTag)
            divTag.appendChild(foodDescriptionTag)
            // append div tag to existing body tag 
            //document.getElementsByTagName("body")[0].appendChild(divTag)
            document.getElementById("result").appendChild(divTag)
        })
    })
    .catch(error=>console.log(error))
    .finally(()=>console.log("Data Loaded.."))
}