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

for (let i =0;i < myLeads.length; i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // ulEl.textContent += myLeads[i] + " " this way they will show as a the way written above inner makes em list
    // anothe alternative to inner
     
}