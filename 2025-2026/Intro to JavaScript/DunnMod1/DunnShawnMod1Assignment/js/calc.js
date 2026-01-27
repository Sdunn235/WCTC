/* Mortgage Formula:
   M = P * ( r(1 + r)^n ) / ( (1 + r)^n - 1 )
   P = loan amount, r = monthly rate, n = total months */
function calculateMortgage() {
  let P = Number(document.getElementById("principal").value);
  let annualRate = Number(document.getElementById("annualRate").value);
  let years = Number(document.getElementById("years").value);

  let r = (annualRate / 100) / 12;
  let n = years * 12;
  let M;

 
    let powerTerm = Math.pow(1 + r, n);
    M = P * (r * powerTerm) / (powerTerm - 1);
  

  // Format as dollars with 2 decimal places
  document.getElementById("monthlyPayment").textContent = "$" + M.toFixed(2);

  console.group("Mortgage Calculator IPO");
  console.log("P:", P, "annualRate:", annualRate, "years:", years);
  console.log("r:", r, "n:", n, "M:", M);
  console.groupEnd();
}

/* Compound Interest Formula:
   A = P * (1 + r/n)^(n*t) */
function calculateCompound() {
  let P = Number(document.getElementById("P").value);
  let rPercent = Number(document.getElementById("r").value);
  let n = Number(document.getElementById("n").value);
  let t = Number(document.getElementById("t").value);

  let r = rPercent / 100;
  let A = P * Math.pow(1 + (r / n), n * t);
  let interestEarned = A - P;

  // Format both as dollars with 2 decimal places
  document.getElementById("A").textContent = "$" + A.toFixed(2);
  document.getElementById("interest").textContent = "$" + interestEarned.toFixed(2);

  console.group("Compounding Interest IPO");
  console.log("P:", P, "r%:", rPercent, "n:", n, "t:", t);
  console.log("A:", A, "Interest Earned:", interestEarned);
  console.groupEnd();
}
