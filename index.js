let btnEl=document.getElementById("btn");
let birthdayEl=document.getElementById("birthday");
let result=document.getElementById("result");

function getAge(birthdayValue) {
  const currentDate=new Date();
  const birthDate=new Date(birthdayValue);
  let Age=currentDate.getFullYear()-birthDate.getFullYear();
  const month=currentDate.getMonth()-birthDate.getMonth();

  if(month< 0|| month===0 && currentDate.getDate()< birthDate.getDate()) {
    Age--;
  }
  return Age;
}
function calculateAge() {
    const birthdayValue=birthdayEl.value;
    if(birthdayValue==="") {
        alert("Please enter the birthday")
    }
    else {
        const age=getAge(birthdayValue)
        result.innerText=`Your age is ${age} ${age > 1 ? "years" : 'year'} old`
    }
}
btnEl.addEventListener('click', calculateAge)
