//GETTING A REFERENCE FOR THE RATING STATE
const ratingState = document.querySelector('.rating--state');

//GETTING A REFERENCE FOR THE RESPONSE STATE
const responseState = document.querySelector('.response--state');

//GETTING A REFERENCE FOR THE RATING INPUT
const ratingInput = document.querySelector('.ratings');

//GETTING A REFERENCE FOR THE RATING OUTPUT
const ratingOutput = document.querySelector('.rating span');

//GETTING A REFERENCE FOR THE BUTTON
const submitBtn = document.querySelector('button');




//FUNCTION FOR GETTING THE RATING
let rating = 0;
const ratingValue = (option) => {
    rating = option.textContent;
    return rating;
}

//Function for reseting the field 
const resetOption = () => {
    Array.from(ratingInput.children).forEach(ratingOption => {
        ratingOption.classList.remove('selected');
    });
}


Array.from(ratingInput.children).forEach(ratingOption => {
    ratingOption.addEventListener('click', e => {
        e.stopPropagation();
        resetOption();//Clear all fields
        
        //If the option is clicked add a class, else remove the class
        e.target ? ratingOption.classList.add('selected') : ratingOption.classList.remove('selected');

        //Get the value of the option selected
        ratingValue(e.target);
    });
});

//Output the rating
submitBtn.addEventListener('click', () => {
    ratingState.style.display = 'none';
    responseState.style.display = 'flex';
     
    ratingOutput.textContent = rating;
});

//Revert back to normal if the body is clicked
responseState.addEventListener('click', () => {
    ratingState.style.display = 'flex';
    responseState.style.display = 'none';
     
    rating = 0;
    ratingOutput.textContent = rating;

    Array.from(ratingInput.children).forEach((ratingOption) => {
        if(ratingOption.classList.contains('selected')) {
            ratingOption.classList.remove('selected');
        }
    });
});