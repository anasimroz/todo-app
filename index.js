
// var todoTasks = ['hello world', 'hello'] 


// function addTodo() {
//   var userInput = document.getElementById('input').value
//   todoTasks.push(userInput)
//   generateList()
// }

// function generateList () {
//   document.getElementById('main').innerText = ''
//   todoTasks.forEach(function (task) {
//     var h4 = document.createElement('h4') 
//     var text = document.createTextNode(task)
//     h4.appendChild(text)
//     var deletebtn = document.createElement("button")
//         deletebtn.innertext = "DELETE"
//     document.getElementById('main').appendChild(h4).appendChild(button)
//   })
// }

// generateList()



// var todoTasks = ['hello', 'hello world'] 


// function addTodo() {
//   var userInput = document.getElementById('input').value
//   todoTasks.push(userInput)
//   generateList()
// }

// function generateList () {
//    for (var i = 0; i < todoTasks.length; i++) {

//   document.getElementById('main').innerText = ''
//   todoTasks.forEach(function (task) {
//     var h4 = document.createElement('h4') 
//     var text = document.createTextNode(task)
//     h4.appendChild(text)
    

//     // DELETE BUTTON 
//     var deletebtn = document.createElement("button")
//      deletebtn.innerText = ("DELETE")
//      deletebtn.onclick = del(i)
     
     
//     // EDIT BUTTON
//     var editbtn = document.createElement("button")
//     editbtn.innerText = ("EDIT")
//     document.getElementById('main').appendChild(h4).appendChild(deletebtn)
//   })
// }
// }

// function del(i){
//      return function() {
//         todoTasks.splice(i,1)
//         generateList()
//     }
// }

// generateList()


    

var todoTasks = []

function addTodo(){
    var userinput = document.getElementById("input").value
    var  main = document.getElementById("ol")
    var Todo = [{
        addTodo:userinput,
        createdAt:new Date().toLocaleString(),
    }]
    todoTasks.push(Todo)
    console.log(todoTasks)
    gen()

}

//         // generating list;
function gen(){
    document.getElementById("ol").innerText = ""
    for(var i = 0; i < todoTasks.length; i++){
        var li = document.createElement("li")
        var list = document.createTextNode(todoTasks[i].Todo)
        li.appendChild(list)
        ol.appendChild(li)

//         // creating delete btn;
        var  btn_1 = document.createElement("button")
        btn_1.id = "Delete"
        btn_1.innerText = "Delete"
        li.appendChild(btn_1)
        btn_1.onclick = dlt(i)

//         // creating edit btn
        var  btn_2 = document.createElement("button")
        btn_2.id = "Edit"
        btn_2.innerText = "Edit"
        li.appendChild(btn_2)
        // btn_2.onclick = dlt(i)

//         // creating done button
        var  btn_3 = document.createElement("button")
        btn_3.id = "Done"
        btn_3.innerText = "Done"
        li.appendChild(btn_3)
        // btn_3.onclick = dlt(i)

}
}
        //delete btn functionality;
function dlt(i){
    return function(){
        todoTasks.splice(i,1)
        gen()
    }
}