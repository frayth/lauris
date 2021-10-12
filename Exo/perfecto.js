function perfect(nombre)
{
  let index=0;
  let sum=0;
  for(let i=1;i<nombre;i++)
    {
      if(nombre%i==0)
        {
          sum+=i;
          index++;
        }
    }
 if(nombre-sum==0)
   {
     console.log("ceci est un nombre perfecto.");
   }
  else if(nombre-sum<0)
    {
      console.log("ceci est un nombre abondant.");
    }else{
      console.log("ceci est un nombre deficient.");
    }
}
let nombre=8;
perfect(nombre);