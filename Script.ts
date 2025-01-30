const inputTab = document.getElementById("input-tab") as HTMLInputElement;
const inputButton = document.getElementById("input-button") as HTMLButtonElement;

const AddTask = (): void => {
  if (!inputTab.value.trim()) return; // Prevent empty tasks

  const newDiv = document.createElement('div');
  const newButton = document.createElement('button');

  newButton.textContent = "Delete";
  newDiv.innerText = inputTab.value;

  // Append the button inside the div
  newDiv.appendChild(newButton);
  document.body.appendChild(newDiv);

  // Add delete functionality
  newButton.onclick = () => newDiv.remove();

  // Clear input field after adding task
  inputTab.value = "";
};

// Ensure the button exists before assigning event listener
if (inputButton) {
  inputButton.onclick = AddTask;
}
