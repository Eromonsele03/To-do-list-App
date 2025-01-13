console.log("Hello");
const inputTab = document.getElementById("input-tab");
const inputButton= document.getElementById("input-button");

AddTask = () =>{
  const newDiv = document.createElement('div')
  const newButton = document.createElement('button')
  newButton.textContent = "Delete"

  newDiv.id='dynamic-div'
  const dynamicDiv = document.getElementById('dynamic-div')
  //dynamicDiv.textContent = "And"
  newDiv.innerText= inputTab.value
  document.body.appendChild(newDiv)
  document.body.appendChild(newButton)
  newButton.onclick = () =>{
    newDiv.remove()
    newButton.remove()
  }
}
inputButton.onclick = () => {
 AddTask();
  inputTab.value=""
}
