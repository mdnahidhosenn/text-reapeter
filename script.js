let generate = document.querySelector('.generate');
let input = document.getElementById('input');
let output = document.querySelector('.output')
let countNumber=document.querySelector('.count');
let copyBtn = document.querySelector('#copybtn')

let serialNumber = document.querySelector('.serial')
let repeat =document.querySelector('.repeat')









generate.addEventListener('click',()=>{

repeat.checked ? repeatNewLine() : defaults();
serialNumber.checked ? withSerialNumb() : '';

repeat.checked && serialNumber.checked ? repeatAndSerial() : '';
   
   }
 )
 




function repeatNewLine(){
  let text = '';
  let count=countNumber.value;
  for(i=1;i<=count;i++){

 text+=  input.value + ' ' +'<br>';
  }
  output.innerHTML=`${text}`;
}

function withSerialNumb(){
  let text=''
  let count=countNumber.value;
  for(i=1;i<=count;i++){

 text+= i + " " + input.value + ' '+' ';
  }
  output.innerHTML=`${text}`;
}

function defaults(){
      let text=''
  let count=countNumber.value;
  for(i=1;i<=count;i++){

 text+=  input.value + ' ';
  }
  output.innerHTML=`${text}`;
}

function repeatAndSerial(){
    let text=''
  let count=countNumber.value;
  for(i=1;i<=count;i++){

 text+= i + " " + input.value + ' ' +'<br>';
  }
  output.innerHTML=`${text}`;
}


copyBtn.addEventListener('click',copyCode)
  
  function copyCode (){

    if( ! output.innerText == ''){
      navigator.clipboard.writeText(output.innerText);
      copyBtn.innerText = 'check';
      setTimeout(() => {
       copyBtn.innerText = 'content_copy';
      }, 1000);
    }
   }

  



 