const skillsContainer = document.getElementById("container");
const addedSkills = []; //
const input = document.getElementsByTagName("input")[0];
input.addEventListener("keyup", (e) => {
  const enteredValue = input.value.trim();
  const key = e.key;
  if (key === "Enter" && enteredValue) {
    const b = document.createElement("b");
    b.innerText = enteredValue;
    b.className = "chip";
    addedSkills.push(enteredValue);
    appendNewElementAtFront(b);
    input.value = "";
  }
  key === "Enter" && !enteredValue && (input.value = "");
});

function appendNewElementAtFront() {
  skillsContainer.innerHTML = "";
  for (let i = 0; i < addedSkills.length; i++) {
    const b = document.createElement("b");
    b.innerText = addedSkills[i];
    b.className = "chip";
    b.addEventListener("click", removeElement);
    skillsContainer.appendChild(b);
  }
  skillsContainer.appendChild(input);
}

function removeElement(e) {
  // addedSkills = ["c++", "java", "python"]
  /*
                <div id="container">
                    <b class="chip">C++</b>
                    <b class="chip">javascript</b>
                    <input />
                </div>
            */
  const targetElement = e.target; // <b class="chip">java</b>
  const value = targetElement.innerText; // value = java
  let index = addedSkills.indexOf(value); // index = 1
  addedSkills.splice(index, 1); // addedSkills = ["c++", "python"]
  e.target.remove();
}

const parent = document.getElementsByClassName("parent")[0];
        const child = document.getElementsByClassName("child")[0] ;

        child.addEventListener("click", (e) => {
            console.log("child clicked")
            console.log(e.cancelBubble) // false
            e.stopPropagation();
            console.log(e.cancelBubble) // true
        });

        parent.addEventListener("click", (e) => {
            console.log("parent clicked")
        });