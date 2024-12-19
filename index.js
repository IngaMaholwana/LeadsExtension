let myLeads = []
const inputEl = document.getElementById("input-el")//const is the same as let but it is a constant and it cannot be changed
const inputBtn = document.getElementById("input-btn") 
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn") 

// localStorage.setItem("myName","Inga Maholwana")
// let name = localStorage.getItem("myName")
// console.log(name)

const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) // this is to get the data from local storage
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}



tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){ // get only the current tab
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// another way to get clicks from users this one below
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = "" // thiss so once inputed it be gone
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    
})

function render(leads){
    let listItems = "" // list variable list to hold all html
    for (let i =0;i < leads.length; i++){
        // listItems += "<li><a  target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        //template string can break into multiple lines ` these wei
        listItems += `
        <li>
            <a  target='_blank' href='${leads[i] }+ "'> 
            ${leads[i]} 
            </a>
        </li>`


        
    }
    ulEl.innerHTML = listItems // so it doesnt get manupulated multiple times safer out

}


