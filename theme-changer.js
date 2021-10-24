function switchTheme(){
    var ul=document.getElementById('theme-changer');
    ul.classList.toggle('dark');
}
var button=document.getElementById('switcher');
button.addEventListener('click',switchTheme);