const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector('#output-box');


function isBirthDateLucky(){
  const date= dateOfBirth.value;
  const sum = calculateSum(dateOfBirth.value);
  if(sum%luckyNumber.value === 0){
    outputBox.innerText = "Yayy!! Your birthday is Lucky! 🎉";
  } else{
    outputBox.innerText = "Your birthday is NOT Lucky!";
  }
}

function calculateSum(birthDate) {
  birthDate = birthDate.replaceAll("-","");
  let sum = 0;
  for(let digit=0;digit<birthDate.length;digit++){
    sum += Number(birthDate.charAt(digit));
  }
  return sum;
}

checkNumberButton.addEventListener('click',isBirthDateLucky);