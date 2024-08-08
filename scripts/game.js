const gameCards = document.querySelector(".game__cards");

async function getQuestion() {
  const response = await axios.get(
    "https://opentdb.com/api.php?amount=3&category=27&difficulty=easy&type=boolean"
  );
  const questions = response.data.results;
  console.log(questions);
  questions.forEach((questionObj) => {
    const card = document.createElement("div");
    card.classList.add("game__card");

    const questionText = document.createElement("p");
    questionText.classList.add("game__card__question");
    questionText.innerHTML = questionObj.question;
    card.appendChild(questionText);

    const trueButton = document.createElement("button");
    trueButton.textContent = "True";
    trueButton.classList.add("game__card__button--true");
    trueButton.classList.add("game__card__button");
    trueButton.addEventListener("click", () => {
      if (questionObj.correct_answer === "True") {
        alert("You made it!");
      } else {
        alert("Wrong! Try again");
      }
    });
    card.appendChild(trueButton);

    const falseButton = document.createElement("button");
    falseButton.textContent = "False";
    falseButton.classList.add("game__card__button--false");
    falseButton.classList.add("game__card__button");
    falseButton.addEventListener("click", () => {
      if (questionObj.correct_answer === "False") {
        alert("You made it!");
      } else {
        alert("Wrong! Try again");
      }
    });
    card.appendChild(falseButton);

    gameCards.appendChild(card);
  });
}

getQuestion();
