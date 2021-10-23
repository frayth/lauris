function tester(sentence)
{
  sentence=sentence.toUpperCase();
  let alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  for(let i=0;i<alphabet.length;i++)
    {
      if (sentence.indexOf(alphabet[i])<0)
        {
          return false;
        }
    }
 return true;

}
let test="The quick brown fox jumps over the lazy dog.";
                
console.log(tester(test));