
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
      question: "Specific Gravity is important in",
      answers: {
        a: "Mix design",
        b: "Deleterious material identification",
        c: "Material property change",
        d: "All the above"
      },
      correctAnswer: "d"
    },

    {
      question: "Stock cements are avoided in concreting especially because of",
      answers: {
        a: "Moisture activity",
        b: "Chemical activity",
        c: "Thermal activity",
        d: "None of the above"
      },
      correctAnswer: "a"
    },

    {
      question: "The major factor which affect the Specific Gravity is",
      answers: {
        a: "Pores",
        b: "Moisture contents",
        c: "Both A and B",
        d: "None of these"
      },
      correctAnswer: "c"
    },
    {
      question: "According to standard the Specific Gravity of coarse aggregate should be in between",
      answers: {
        a: "27-29",
        b: "25-28",
        c: "315-319",
        d: "26-285 "
      },
      correctAnswer: "b"
    },
    {
      question: "Why is kerosene used to determine the Specific Gravity of cement? ",
      answers: {
        a: "Its Specific Gravity is higher than cement",
        b: "It does not react with cement as water does",
        c: "Its Specific Gravity is lower than cement",
        d: "None of these"
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
