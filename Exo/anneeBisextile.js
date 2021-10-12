function testBisexialite(annee)
{
  if (annee%4===0 && annee%100===0 && annee%400===0)
    {
      return true;
    }else{
      return false;
    }
}
let annee=2000;
if (testBisexialite(annee))
  {
    console.log("l'annee "+annee+" est une année bisextile.");
  }else{
    console.log("l'annee "+annee+" n'est pas une année bisextile.");
  }