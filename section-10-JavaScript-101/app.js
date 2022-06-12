// Step 1: Fill in these three consts by selecting the right nodes by their HTML ID's
const myName = document.getElementById("name"); // Fill this in
const age = document.getElementById("age"); // Fill this in.
const dogYears = document.getElementById("dogyears"); // Fill this in.

// Step 2. Set the values.
// Example: myNode.innerText = "something"
// Set `name` and `age` in here
myName.innerText = "Estee";
age.innerText = "25##++";

function showDogYears(age) {
  // Step 3. Cast `age` as a number
  age = Number(age);
  // dogYears.innerText = Number(age) * 7; - from solution
  // return Number(age) * 7; - from solution
  // I commented the two lines above cos I'm not sure that I need them if I make a slight change
  // still not sure but it works so I'll leave it like that
  return age * 7;
}

// Step 4. Set the parameter of showDogyears()
dogYears.innerText = showDogYears(35);

// Step 5. Select all the .fake-input classes and give them the class of .real-input. This may take a little "googling" to find the solution, but that's half of what web development is all about.
const fakeInputs = document.querySelectorAll(".fake-input");
fakeInputs.forEach((node) => {
  node.classList.add("real-input");
  node.classList.remove("fake-input");
});
