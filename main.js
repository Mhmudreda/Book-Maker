
/*
let lable1 = document.getElementById('siteName');
let lable2 = document.getElementById('SiteURL');
let btnProduct = document.getElementById('btn')


let newContainer = [];

 function addProduct ()
{
    let product = {
        Name:lable1.value,
        Url:lable2.value,
        
    }

    newContainer.push(product)
    console.log(newContainer)
}


btnProduct.addEventListener('click', addProduct)
*/







let sitName = document.getElementById('siteName');
let website = document.getElementById('SiteURL');
let submitBtn = document.getElementById('submitBtn')
let deleteSitesbtn = document.getElementById("deleteSites");

let newContainer ;



if(localStorage.getItem("me") != null)
{
    newContainer =JSON.parse( localStorage.getItem("me"));
    displayProduct (newContainer);
}
else
{
    newContainer = [];
}

function addProduct(){
    let product= {

        Name:sitName.value,
        URL:website.value,
    }
    newContainer.push(product)
    
    localStorage.setItem('me', JSON.stringify(newContainer) )

    displayProduct(newContainer) ;


    clearForm();


}

submitBtn.addEventListener("click" , function(){
    addProduct();
})


function clearForm(){

    sitName.value="";
    website.value='';

}

function displayProduct(newContainer) {
 let cartoona =''
  for (let i = 0; i < newContainer.length; i++) {
    cartoona +=` <tr >

                        
    <td>${newContainer[i].Name}</td>
    <td><button class="btn btn-primary"  >  <a href="${website.value}">visite </a> </button></td>
    <td><button onclick="deletedProduct(${i})" class="btn btn-danger ">delete</button></td>


    </tr>
`
    
  }
  document.getElementById('tableBody').innerHTML = cartoona;
}

function deletedProduct(delet){
    newContainer.splice(delet,1);
    localStorage.setItem("me",JSON.stringify(newContainer));

    displayProduct(newContainer);
}
