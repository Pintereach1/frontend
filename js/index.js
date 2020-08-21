function myFunction(clickdID) {
  // Change or unchange the Three Selection row 
  let theStyle = document.getElementById(clickdID).style.backgroundColor;
  if(theStyle === "yellow"){
    let highlight = document.getElementById(clickdID);
  highlight.style.backgroundColor="transparent";
  }else{
    let highlight = document.getElementById(clickdID);
  highlight.style.backgroundColor="yellow";
  }
} 


function createCard(){
  let cat = document.getElementById("category");
  let title = document.getElementById("title");
  let descrip = document.getElementById("descrip");
  let URl= document.getElementById("URl");
  let socialM = document.getElementById("socialM");
  
  // The input values of the input text
  let Category = cat.value;
  let Title = title.value;
  let Description = descrip.value;
  let URL = URl.value;
  let SocailMedia = socialM.value;
  
 
    document.getElementById("test").innerHTML = "category"+Category
    + " title " + Title + " Description "+Description + " URL "
    +URL + " " + SocailMedia ;

}

