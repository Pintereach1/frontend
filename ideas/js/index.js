function collapse(item){
     
    var lineHeight = item.css('line-height') !== 'normal' ? parseInt(item.css('line-height')) : parseInt(item.css('font-size')) * 3.7;
    var height = item.height();
    if (lineHeight < height) {
        item.css({'height': lineHeight + 'px', overflow:'hidden'});
        item.children('a.toggle').length==0 && item.append("<a href='#' class='toggle'>(more)</a>");
    } 
}

$('div.item').each(function () {
collapse($(this));
});


$('a.toggle').click(function (event) {
    event.preventDefault();

var toggle=$(this);
    var item=toggle.parent('div');
    if(toggle.text()=='(more)'){         
       toggle.text('(less)');
       item.css({'overflow':'auto', 'height':'auto'});
       }else{
       toggle.text('(more)');
           collapse(item);
       }
});