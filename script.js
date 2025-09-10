// -----------------------------
// Part 2: Functions, Scope, Return Values
// -----------------------------

// Global variable (scope demo)
let globalVar = "I'm a global variable";

// Function with parameters & return value
function sumNumbers(a, b) {
  return a + b; // returns the result
}

// Local vs Global scope demo
function scopeDemo() {
  let localVar = "I'm a local variable";
  return `Global: ${globalVar} | Local: ${localVar}`;
}

// Display results when page loads
document.getElementById("sum-output").innerText = "Sum Result: " + sumNumbers(5, 7);
document.getElementById("scope-output").innerText = scopeDemo();


// -----------------------------
// Part 3: Combining CSS + JS
// -----------------------------

function animateBox(animationType) {
  const box = document.querySelector(".box");

  // Reset classes first
  box.classList.remove("slide", "fade");

  // Add animation class dynamically
  if (animationType === "slide") {
    box.classList.add("slide");
  } else if (animationType === "fade") {
    box.classList.add("fade");
  }
}

// Reset function
function resetBox() {
  const box = document.querySelector(".box");
  box.classList.remove("slide", "fade");
  box.style.opacity = "1"; // reset fade
  box.style.transform = "translateX(0)"; // reset slide
}
