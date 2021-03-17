
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "The purpose of using fine aggregate in concrete is to ",
      answers: {
        a: "Fill voids",
        b: "Workability agent",
        c: "Both A and B",
        d: "Provide strength"
      },
      correctAnswer: "c"
    },

    {
      question: "Which of the following will float in water? The density of water is 1g/ml",
      answers: {
        a: "Object 1: m = 5g and v = 2ml",
        b: "Object 2: m = 3g and v = 4ml",
        c: "Object 3: m = 3g and v = 1ml",
        d: "Object 4: m = 4g and v = 3ml"
      },
      correctAnswer: "a"
    },

    {
      question: "Presence of large number of deleterious materials on aggregate results in high Specific Gravity value. ",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
        question: "The Specific Gravity of cement is greater than 3.19, it indicates that ",
        answers: {
          a: "It has more moisture content",
          b: "The cement is not minced finely as per the industry standard",
          c: "Both A and B",
          d: "None of these"
        },
        correctAnswer: "d"
      },
    {
        question: "According to the IS Code, Zone IV aggregate is finer than Zone I aggregate.",
    answers: {
          a: "No",
          b: "Yes"
        },
        correctAnswer: "b"
      }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
