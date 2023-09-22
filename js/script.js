const form = document.getElementById("card--form");
const cardName = document.getElementById("holder--name--id");
const cardNumber = document.getElementById("holder--number--id");
const cardMonth = document.getElementById("holder--month--id");
const cardYear = document.getElementById("holder--year--id");
const cardCvc = document.getElementById("holder--cvc--id");
const thanksCard = document.querySelector(".section-cards-thanks");
const cardsForm = document.querySelector(".section-cards-form");
const thankyouButton = document.querySelector(".btn--submits");
console.log(thankyouButton);

const cardPin = document.querySelector(".card");
const holderName = document.querySelector(".holder--name");
const mmValue = document.getElementById("mm--value");
const yyValue = document.getElementById("yy--value");
const cvvValue = document.getElementById("card--cvv--value");
console.log(cvvValue.innerHTML);
// console.log(mmValue.innerHTML.slice(0, 2));

const cardName_1 = cardName.parentElement;
const cardNumber_1 = cardNumber.parentElement;
const cardMonth_1 = cardMonth.parentElement;
const cardYear_1 = cardYear.parentElement;
const cardCvc_1 = cardCvc.parentElement;
let cardName_11 = "";
// console.log("Card Number: ", cardCvc.parentElement);
// console.log("Card Number: ", cardCvc.previousElementSibling);
function nameSuccess(input, message) {
  const errorControl = input.parentElement;
  errorControl.className = "form--name success";
  if (cardName_1.className === "form--name error") {
    // console.log("false");
    let cardName_11 = false;
  } else if (cardName_1.className === "form--name success") {
    // console.log("true");
    let cardName_11 = true;
  } else {
    // console.log("nothing", cardName_1.className);
  }
  return cardName_11;
}

function nameError(input, message) {
  const errorControl = input.parentElement;
  const small = errorControl.querySelector("small");
  small.innerText = message;
  errorControl.className = "form--name error";
}

function numSuccess(input, message) {
  const errorControl = input.parentElement;
  errorControl.className = "form--number success";
}

function numError(input, message) {
  const errorControl = input.parentElement;
  const small = errorControl.querySelector("small");
  small.innerText = message;
  errorControl.className = "form--number error";
}

function monthSuccess(input, message) {
  const errorControl = input.parentElement;
  errorControl.className = "expiry--date success";
}

function monthError(input, message) {
  const errorControl = input.parentElement;
  // console.log(errorControl);
  const small = errorControl.querySelector("small");
  small.innerText = message;
  errorControl.className = "expiry--date error";
}

function yearSuccess(input, message) {
  const errorControl = input.parentElement;
  errorControl.className = "expiry--date success";
}

function yearError(input, message) {
  const errorControl = input.parentElement;
  const small = errorControl.querySelector("small");
  small.innerText = message;
  errorControl.className = "expiry--date error";
}

function cvvSuccess(input, message) {
  const errorControl = input.parentElement;
  errorControl.className = "form--cvc success";
}

function cvvError(input, message) {
  const errorControl = input.parentElement;
  const small = errorControl.querySelector("small");
  small.innerText = message;
  errorControl.className = "form--cvc error";
}

let myFields;
function checkInputs() {
  //get the values for the input fields
  const cardNameValue = cardName.value;
  const cardNumberValue = cardNumber.value;
  const cardMonthValue = cardMonth.value;
  const cardYearValue = cardYear.value;
  const cardCvcValue = cardCvc.value;

  if (cardNameValue === "") {
    nameError(
      cardName,
      `Better write your first and last name before I slaaaaaaap you😡😠😡😠`
    );
  } else if (cardNameValue.length <= 10) {
    nameError(
      cardName,
      "why is your name short like this!!😡😠😡😠 mtchewwwwwww!!!"
    );
  } else {
    nameSuccess(cardName);
  }

  if (cardNumberValue === "") {
    numError(cardNumber, "enter your card number naaaaaaaa!!!!😠😠😠😠");
  } else if (cardNumberValue.length <= 15) {
    numError(
      cardNumber,
      "why you de enter less than 16 digit number!!😠😠😠😠 Take time ooo!!!"
    );
  } else if (cardNumberValue.length > 16) {
    numError(
      cardNumber,
      "It's more than 16 charrecters, apologise before you proceed😠😠!!!"
    );
  } else {
    numSuccess(cardNumber);
  }

  if (cardMonthValue === "") {
    monthError(cardMonth, "😡😡");
  } else {
    monthSuccess(cardMonth);
  }

  if (cardYearValue === "") {
    yearError(cardYear, "🥶🥶");
  } else {
    yearSuccess(cardYear);
  }

  if (cardCvcValue === "") {
    cvvError(cardCvc, "😡😡 cannot be blank");
  } else {
    cvvSuccess(cardCvc);
  }

  // if (cardCvc_1.className === "form-cvc error") {
  //   console.log("false");
  // } else if (cardCvc_1.className === "form--cvc success") {
  //   console.log("true");
  // } else {
  //   console.log("nothing: ", cardCvc_1.className);
  // }

  // if(cardName_1.className === "form--name success" && cardNumber_1.className === "form--number success" && cardMonth_1.className === "expiry--date success") {
  //   console.log("true");
  // }
  // else {
  //   console.log("false");
  // }

  // console.log(cardCvc_1.className);
}
thankyouButton.addEventListener("submit", function (e) {
  e.preventDefault();
  cardPin.innerHTML = "";
  holderName.innerHTML = "";
  cvvValue.innerHTML = "";
  mmValue.innerHTML = "";
  thanksCard.classList.remove("success");
  cardsForm.classList.remove("completed");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cardNameValue = cardName.value;
  const cardNumberValue = cardNumber.value;
  const cardMonthValue = cardMonth.value;
  const cardYearValue = cardYear.value;
  const cardCvcValue = cardCvc.value;
  let allValues = {
    cardNameValue: cardNameValue,
    cardNumberValue: cardNumberValue,
    cardMonthValue: cardMonthValue,
    cardYearValue: cardYearValue,
    cardCvcValue: cardCvcValue,
  };

  // console.log(allValues);

  if (
    cardName_1.className === "form--name success" &&
    cardNumber_1.className === "form--number success" &&
    cardMonth_1.className === "expiry--date success" &&
    cardCvc_1.className === "form--cvc success" &&
    cardYearValue !== ""
  ) {
    console.log({ allValues });
    cardPin.innerHTML = allValues.cardNumberValue;
    holderName.innerHTML = allValues.cardNameValue;
    cvvValue.innerHTML = allValues.cardCvcValue;
    mmValue.innerHTML = allValues.cardMonthValue;
    // yyValue.innerHTML = allValues.cardYearValue;

    if (cardPin.innerHTML === allValues.cardNumberValue) {
      console.log("Yazid");
      thanksCard.classList.add("success");
      cardsForm.classList.add("completed");
    } 
  } 

  checkInputs();
});
