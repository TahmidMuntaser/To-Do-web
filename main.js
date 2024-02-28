var add = document.getElementById('add');
// console.log(add);

add.addEventListener('click', function(){
    var input = document.getElementById('input').value;

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



})