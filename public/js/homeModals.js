const items = document.querySelectorAll('.item');
const hideButtons = document.querySelectorAll('.hideButton');

for (let item of items){
    item.addEventListener('click', function(e){
        console.log(e.target.className)
        if(e.target.className !== 'hideButton' ){
            item.lastChild.style.display= 'block';
        }
        else{
            item.lastChild.style.display= 'none';
        }
    })
}





