const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const submit = document.getElementById("submit");
const dateError = document.querySelector("#dateError")
const monthError = document.querySelector("#monthError")
const yearError = document.querySelector("#yearError")
const dayOutput = document.getElementById("birthDay")
const monthOutput = document.getElementById("birthMonth")
const yearOutput = document.getElementById("birthYear")
let valid = true

submit.addEventListener("click", (e) => {
  dateValidation(e);
  monthValidation(e);
  yearValidation(e);
  age(e)
});



const dateValidation = (e) => {
  const invalid = () => {
    date.classList.add("invalid");
    document.getElementById("dateLabel").style.color = "hsl(0, 100%, 67%)";
    valid = false
  };
  if (date.value < 1) {
    dateError.innerHTML = "This field is required";
    invalid();
    e.preventDefault();
  } else if (date.value > 31) {
    dateError.innerHTML = "Must be a valid date";
    invalid();
    e.preventDefault();
  }  else if ((month.value === 4 || 6 || 9 || 11) && date.value > 30) {
    dateError.innerHTML = "Must be a valid date";
    invalid();
    e.preventDefault();
  }
};

const monthValidation = (e) => {
  const invalid = () => {
    month.classList.add("invalid");
    document.getElementById("monthLabel").style.color = "hsl(0, 100%, 67%)";
    valid = false
  };
  if (month.value < 1) {
    monthError.innerHTML = "This field is required";
    invalid();
    e.preventDefault();
  } else if (month.value > 12) {
    monthError.innerHTML = "Must be a valid month";
    invalid();
    e.preventDefault();
  }
};

const yearValidation = (e) => {
  const d = new Date();
  let currentYear = d.getFullYear();
  const invalid = () => {
    document.getElementById("yearLabel").style.color = "hsl(0, 100%, 67%)";
    year.classList.add("invalid");
    valid = false
  };
  if (year.value < 1) {
    yearError.innerHTML = "This field is required";
    invalid();
    e.preventDefault();
  } else if (year.value > currentYear) {
    yearError.innerHTML = "Must be in the Past";
    invalid();
    e.preventDefault();
  }
};

const age = (e) =>  {
  if (valid) {
    let DOB = `${month.value}/${date.value}/${year.value}` //get the birthdate from the input 
    let birthDate = new Date(DOB) //set the birthdate using the date object
    let ageDiff = Date.now() - birthDate //minus the birthDate from the current date 'it returns the value in milliseconds'
    let birthDay = new Date(ageDiff) //new Date() sets the birthday using the ageDiff which is in milliseconds
    let ageYear = birthDay.getUTCFullYear() - 1970 //this gets the year -1970 because jan 1st 1970 is the date when time started for unix computers
    let ageMonth = birthDay.getUTCMonth() // this gets the month
    let ageDate = birthDay.getUTCDate() - 1 //this gets the day 
    dayOutput.innerHTML = ageDate
    monthOutput.innerHTML = ageMonth
    yearOutput.innerHTML = ageYear
    e.preventDefault()
  } else {
    null
  }
    
}
//Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).