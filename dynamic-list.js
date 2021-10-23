function getValue(){
    var p=document.getElementById('dyn-list-input');
    if(p.value=='')
    {
        window.alert("aucun éléments fournis...")
    }else{
        signe=p.value.split(',');
        document.getElementById('dyn-list-input').value='';
        createLi(signe);
    }
 
}
function createLi(tableau){
    var ul=document.getElementById('list');

    for (let valeur of tableau)
    {
       var li=document.createElement('li');
       li.appendChild(document.createTextNode(valeur));
       ul.appendChild(li);
    }
}
var button=document.getElementById('dyn-list-btn');
button.addEventListener('click',getValue);
