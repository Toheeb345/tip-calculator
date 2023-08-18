const btns = document.querySelectorAll(".btns *");
const customInput = document.querySelector(".btns input");
const bill = document.querySelector(".bill input");
const people = document.querySelector(".number input");
const reset = document.querySelector(".reset")
const labelError = document.querySelector(".error")
const numInput = document.querySelector(".number-input")
const amountPerson = document.querySelector(".amount-person")
const amountTotal = document.querySelector(".amount-total")


let selectedBtnValue = 0;
// Adding the active class to selected btns
btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btns.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.classList.remove("active");
      }
    });
    btn.classList.toggle("active");
    selectedBtnValue = parseFloat(btn.value);
    customInput.value = "";
  });
});


// Validating the people count input
function checkErr() {
    if (bill.value === 0 || bill.value === "") {
        labelError.classList.add("err-active");
        numInput.classList.add("err-active");
    }
    numInput.addEventListener("input", () => {
        labelError.classList.remove("err-active");
        numInput.classList.remove("err-active");
    })
}


customInput.addEventListener("input", () => {
    selectedBtnValue = parseFloat(customInput.value) || 0;
  });

// Calculating the total tip
function calcTotalTip() {
    let result = ((selectedBtnValue / 100) * people.value) * bill.value;
    console.log(selectedBtnValue);
    console.log(result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
    amountTotal.innerText = `$${result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Calculating the tip for just a single person
function calcSingleTip() {
    let singleResult = (selectedBtnValue / 100) * bill.value;
    amountPerson.innerText = `$${singleResult.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// activating all onClick of the btn
reset.addEventListener("click", () => {
    checkErr();
    calcSingleTip();
    calcTotalTip();
})



