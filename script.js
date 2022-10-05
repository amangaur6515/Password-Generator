//select the inputs elements
const pwdLength=document.querySelector('#pwdLength');
const uppercase=document.querySelector('#uppercase');
const lowercase=document.querySelector('#lowercase');
const number=document.querySelector('#number');
const symbol=document.querySelector('#symbols');
const passwordDisplay=document.querySelector('.passwordDisplay')


function generateChar(start,end){
    const array=[];
    for(let i=start;i<=end;i++){
        array.push(String.fromCharCode(i));
    }
    return array;

}
//password elements array
const uppercase_characters=generateChar(65,90);
const lowercase_characters=generateChar(97,122);
const array_num=['0','1','2','3','4','5','6','7','8','9'];
const array_symbols=generateChar(33,47).concat(generateChar(58,64)).concat(generateChar(91,96)).concat(generateChar(123,126));




function generatePassword(passwordLength,includeUppercase,includeLowercase,includeNumber,includeSymbols){
     let pwd_array=[] 
     if(includeUppercase) pwd_array=pwd_array.concat(uppercase_characters);
     if(includeLowercase) pwd_array=pwd_array.concat(lowercase_characters);
     if(includeNumber) pwd_array=pwd_array.concat(array_num);
     if(includeSymbols) pwd_array=pwd_array.concat(array_symbols);
     const password=[];
     for(let i=0;i<passwordLength;i++){
        const idx=Math.floor(Math.random()*pwd_array.length+1);
        const char=pwd_array[idx];
        password.push(char);

     }
     const str=password.join('');
     return str
     
     
}

//preventing page from reloading on clicking submit
const form=document.querySelector('#form');
form.addEventListener('submit',(e)=>{
    e.preventDefault(); //it will prevent page from reloading 
    //call the generate passoword function when form is submitted
    const passwordLength=pwdLength.value ;
    const includeLowercase=lowercase.checked;
    const includeNumber=number.checked
    const includeSymbols=symbol.checked
    const includeUppercase=uppercase.checked
    
    const password=generatePassword(passwordLength,includeUppercase,includeLowercase,includeNumber,includeSymbols);
    passwordDisplay.innerText=password;
})

 