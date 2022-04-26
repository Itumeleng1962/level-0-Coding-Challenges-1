/*let vowelCount = str => {
  const vowels = /[aeiou]/gi;
  const result = str.match(vowels);
  const count = result.length;

  console.log(vowelCount);
}*/
function count_Vowels(str)
{
    let stringArray = Array.from(str.toLowerCase());
    let count = 0;
    let output = "Vowels : ";
    for (i = 0; i < str.length; i++)
    {
        if (stringArray[i] == 'a' || stringArray[i] == 'e' || stringArray[i] == 'i'
                || stringArray[i] == 'o' || stringArray[i] == 'u')
        {
             output += stringArray[i] +",";
            count++;
        }
    }
    return output;
}

console.log(count_Vowels("Tenacious"));
