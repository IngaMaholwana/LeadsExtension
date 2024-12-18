let myLeads = ["www.dumydata.com","ya ya","www.epiclead.co.za"]
const inputEl = document.getElementById("input-el")//const is the same as let but it is a constant and it cannot be changed
const inputBtn = document.getElementById("input-btn") 
const ulEl = document.getElementById("ul-el")





// another way to get clicks from users this one below
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    // myLeads.push(inputEl.value)
    console.log(myLeads)
})

let listItems = "" // list variable list to hold all html
for (let i =0;i < myLeads.length; i++){
    listItems += "<li>" + myLeads[i] + "</li>"
    

    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // ulEl.textContent += myLeads[i] + " " this way they will show as a the way written above inner makes em list
    // anothe alternative to inner
    // const li = document.createElement("li") //create element
    // li.textContent = myLeads[i] // set text
    // ulEl.append(li) //append to ul
     
}
ulEl.innerHTML = listItems