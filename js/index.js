class cardInput{
  constructor(titl,cat,desc,url,social){
    this.Title = titl;
    this.Category = cat;
    this.Description = desc;
    this.URL = url;
    this.Social  = social;
  }
   
}


// Add the BUttons to the a new div element at the bottom of 
// Each .crd within each section that is clicked. 
function addElement (idClkd) {
 //document.body.onload = addElement; 
  // create a new div element 
  let newDiv = document.createElement("div"); 
  let newDiv2 = document.createElement("div"); 
  // new buttons 
  let DeleteBtn = document.createElement("BUTTON");   // Create a <button> element
  DeleteBtn.innerHTML = "Delete";     
  let EditBtn = document.createElement("button");   // Create a <button> element
  EditBtn.innerHTML = "Edit";               // Insert text
  // and give it some content 
  let newContent = document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div
  //newDiv.appendChild(newContent);  



  //let addin  = document.querySelector(".crd");

  // add the newly created element and its content into the DOM 

  let currentDiv = document.getElementById(idClkd);
  let addin  = document.querySelector("#"+idClkd);
  let addin2  = addin.querySelectorAll(".crd");
  let addin3  = currentDiv.querySelector("div.crd");
// Adds a Div to each .crd but only adds buttons to the last 1
  addin2.forEach(function(userItem) {
    let DeleteBtn = document.createElement("BUTTON");   // Create a <button> element
    DeleteBtn.innerHTML = "Delete";     
    let EditBtn = document.createElement("button");   // Create a <button> element
    EditBtn.innerHTML = "Edit";            
    let newDiv = document.createElement("div"); 
    newDiv.className = "btnEremove";
    newDiv.append(DeleteBtn);
    newDiv.append(EditBtn);
   // document.body.insertBefore(userItem,EditBtn); 
   // userItem.appendChild(EditBtn);
  //  console.log('time');
  // console.log(userItem);
    userItem.append(newDiv);
    
  });
  
}

// Remove elements 
function removeElm(idClkd){
  let addin  = document.querySelector("#"+idClkd);
  let addin2  = addin.querySelectorAll(".btnEremove");
  //let removeit = addin.getElementsByTagName("button");
  //let addin3  = currentDiv.querySelector("div.crd");
// Adds a Div to each .crd but only adds buttons to the last 1
  addin2.forEach(function(userItem) {
    userItem.parentNode.removeChild(userItem); 
    
  });
}

function myFunction(clickdID) {
  // Change or unchange the Three Selection row 
    let theStyle = document.getElementById(clickdID).style.backgroundColor;
  if(theStyle === "yellow"){
    let highlight = document.getElementById(clickdID);
    highlight.style.backgroundColor="transparent";
    removeElm(clickdID);
  }else{
    let highlight = document.getElementById(clickdID);
    highlight.style.backgroundColor="yellow";
    
    addElement(clickdID);


  }
} 


function createCard(){
  let cat = document.getElementById("category");
  let title = document.getElementById("title");
  let descrip = document.getElementById("descrip");
  let URl= document.getElementById("URl");
  let socialM = document.getElementById("socialM");
  
  let Category = '';
  let Title = '';
  let Description = '';
  let Url = '';
  let SocailMedia = '';
      // The input values of the input text
  if(cat === null){
    // Category = cat.default;
  }else {
    Category= cat.value;
  }
  if(title === null){
    // Title = title.default;
  } else{
    Title = title.value;
  }
  if(descrip === null){

  }else{
  Description = descrip.value;
  }
  if(URl === null){

  }else{
    Url = URl.value;
  }
  if(socialM === null){

  }else{
    SocailMedia = socialM.value;
  }


 
  // All the user input into a class with properties
  let uI = new cardInput(Title,Category,Description,Url,SocailMedia);
  console.log(uI.length);
  let re = [{"Category":uI.Category,"Title":uI.Title,"Description":uI.Description
      , "URL":uI.URL,"Social":uI.Social}];
  return re;
    // document.getElementById("test").innerHTML = "category"+uI.Category
    // + " title " + uI.Title + " Description "+uI.Description + " URL "
    // +uI.URL + " " + uI.Social ;
  

}

let userNn = new cardInput('f','f','s','a','s');
let userN = createCard();
console.log('str'+userN.Category);

