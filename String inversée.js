function reverse(sentence)
{
  let phrase='';
  let taille=sentence.length;
  let j=1;
 for(let i=0;i<taille;i++)
   {
     phrase+=sentence[taille-j];
     
     j++;
     
   }
  return phrase;
  
}

let phrase='pouetmoine';
console.log(reverse(phrase));
