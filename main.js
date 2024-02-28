var add = document.getElementById('add');
// console.log(add);
var inputField = document.getElementById('input');

add.addEventListener('click', function(){
    var input = document.getElementById('input').value;

    if (!input) {
        return;
    }

    // console.log(input);

    var text = document.createTextNode(input);
    // console.log(text);

    var newli = document.createElement('li');
    newli.appendChild(text);

    newli.style.margin = "10px 0"; 
    //add margin

    // console.log(newli);

    var newitem = document.getElementById('olitem');
    newitem.appendChild(newli);

   

    inputField.value = ''; 
    // clear input field after adding item



})