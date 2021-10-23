function switchTheme(){
 var theme=document.getElementById('theme-changer');
 if (theme.className=='dark')
 {
     theme.className='light';
 }else{theme.className='dark';}

}
var button=document.getElementById('switcher');
button.addEventListener('click',switchTheme);