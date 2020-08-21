function myFunction(clickdID) {
  let theStyle = document.getElementById(clickdID).style.backgroundColor;
  if(theStyle === "yellow"){
    let highlight = document.getElementById(clickdID);
  highlight.style.backgroundColor="gray";
  }else{
    let highlight = document.getElementById(clickdID);
  highlight.style.backgroundColor="yellow";
  }
} 