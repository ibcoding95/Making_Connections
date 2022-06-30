// Change the User name to Lebron James

const newName = document.querySelector('#change')

function nameChange(){
    newName.innerText = 'Lebron James'
}

// Decrease the number of Requests

count = 2
countElement = document.querySelector('#decrease')

function removeUser(element) {
    count--
    countElement.innerText = count 
    element.remove()
}

// Increase when the the accept button is clicked
count2 = 418
countElement2 = document.querySelector ('#increase')

function increaseConn(element){
    count2++
    countElement2.innerText = count2
    element.remove()
}


