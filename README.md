Frontend Mentor - Age calculator app solution
This is a solution to the Age calculator app challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Table of contents
Overview
The challenge
Links
My process
Built with
What I learned
Continued development
Useful resources
Author
Acknowledgments
Note: Delete this note and update the table of contents based on what sections you keep.

Overview
The challenge
Users should be able to:

View an age in years, months, and days after submitting a valid date through the form
Receive validation errors if:
Any field is empty when the form is submitted
The day number is not between 1-31
The month number is not between 1-12
The year is in the future
The date is invalid e.g. 31/04/1991 (there are 30 days in April)
View the optimal layout for the interface depending on their device's screen size
See hover and focus states for all interactive elements on the page
Bonus: See the age numbers animate to their final number when the form is submitted
Screenshot


Links
Solution URL: [Add solution URL here](https://github.com/Kehinde13/ageCalculator)
Live Site URL:[ Add live site URL here](https://kehinde13.github.io/ageCalculator/)

My process
Built with
Semantic HTML5 markup
CSS custom properties
Flexbox
CSS Grid
Mobile-first workflow
vanilla javavScript

What I learned
-i learnt how to work with the date object, which was bit tricky at first. but then i understood it after spending some time on it
-i also practised working with form validation 

<h1>Some HTML code I'm proud of</h1>

const proudOfThisFunc = () => {
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
}


Continued development
I plan to keep working with the date object so as to understand it more

Useful resources
[Example resource 1](https://www.w3resource.com/javascript-exercises/javascript-date-exercise-18.php) - This helped me to get the calculate age function

Author
- Github - [Balogun Kehinde](https://github.com/Kehinde13)
- Frontend Mentor - [@Kehinde13](https://www.frontendmentor.io/profile/Kehinde13)
- LinkedIn - [Balogun Kehinde](linkedin.com/in/kehinde-balogun-9a1078223)
