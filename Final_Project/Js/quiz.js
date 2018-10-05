

(function() {
    const allQuestions = [
    {
    question: "The following are types of renewable energy except?",
    answers: {a: "Solar",b: "Hydroelectric",c: "Ocean",d: "Coal"},
    correctAnswer: "d"
  },
   {
    question: "What is the meaning of the word 'GEO'?",
    answers: {a: "Water",b: "Earth",c: "Ice",d: "Heat"},
    correctAnswer: "b"
  },
    {
    question: "The following are three major types of hydro plants except?",
    answers: {a: "Impoundment",b: "Run of river",c: "Dry steam",d: "Pumped storage"},
    correctAnswer: "c"
  }, 
    {
    question: "The following are advantages of hydro energy except?",
    answers: {a: "Source of energy",b: "No air pollution",c: "Disrupts aquatic habitat",d: "Easily replenished"},
    correctAnswer: "c"
  }, 
    {
    question: "The source of solar energy is the?",
    answers: {a: "Moon",b: "Sun",c: "Water",d: "Air"},
    correctAnswer: "b"
  }
];
    
    function buildQuiz(){
    // place to store the output
    const output = [];
    
    // for each question
    allQuestions.forEach(
        (currentQuestion,questionNumber) => {
        
        //list of answer choices
        const answers = [];
        
        //for each available answer
        for(letter in currentQuestion.answers){
            
            //adds a radio button
            answers.push(
              `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}
               </label>`  
            );
    }
    
    // add this question and its answer to the output
    output.push(`<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers">${answers.join("")}</div>
                </div>`
               );
    });

    // combine the output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
    }
    
    function showResults(){
        
    // gather answer conatiners from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");
    
    //keep track of user's answers
    let numCorrect = 0;
    
    allQuestions.forEach((currentQuestion,questionNumber) => {
        
    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;    
        //color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
        }else{
        answerContainers[questionNumber].style.color = "red";
        }
    });
    
    // show number of correct answers out of total
    resultContainer.innerHTML = `${numCorrect} Out of ${allQuestions.length}`;
}
   //Slide show 
   function showSlide(n){
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if(currentSlide===0){
            previousButton.style.display = 'none';
        }
        else{
            previousButton.style.display = 'inline-block';
        }
        if(currentSlide===slides.length-1){
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        }
        else{
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }  

   function showNextSlide(){
      showSlide(currentSlide + 1);
    }
    
    function showPreviousSlide(){
        showSlide(currentSlide - 1);
    }
    
    const quizContainer = document.getElementById('quiz');
    const resultContainer = document.getElementById('result');
    const submitButton = document.getElementById('submit');
    
    // display the quiz
    buildQuiz();
    
    const previousButton = document.getElementById('previous');
    const nextButton = document.getElementById('next');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
      
    showSlide(0);
    
    // on submit, show results
    submitButton.addEventListener('click',showResults);
    previousButton.addEventListener('click',showPreviousSlide);
    nextButton.addEventListener('click',showNextSlide);
      
})(); 