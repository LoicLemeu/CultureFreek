const items = document.querySelectorAll('.item');
const hideButtons = document.querySelectorAll('.hideButton');

for (let item of items){
    item.addEventListener('click', function(e){
        if(e.target.className == '' ){
            item.lastChild.style.display= 'block';
        }
        else{
            item.lastChild.style.display= 'none';
        }
    })
}