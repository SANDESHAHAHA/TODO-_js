
var tasks=[]

function addTask(){
    const taskInput=document.getElementById('todoInput')
    var taskValue=taskInput.value
    //checking if iput is empty or not
    if(taskValue.trim()!=="")
    {
        // add Task
        tasks.push({
        text: taskValue,
            completed: false
        })
        taskInput.value=""
        // console.log(tasks)
        updateTodolist()

    }
}
function updateTodolist(){
const todolist=document.getElementById('todolist')
todolist.innerHTML=""
tasks.forEach((task)=>{
    var listItem=document.createElement('li')
        listItem.textContent=task.text
        listItem.className=task.completed ? 'completed':""
        listItem.onclick=function(){
            toggleCompleted(task)
        }
        todolist.appendChild(listItem)
})
// function to calculate todos ,completed
updatAggregate()
}
function toggleCompleted(task){
    task.completed=!task.completed
    updateTodolist()
}
function updatAggregate()
{
    var totalTasks=document.getElementById('totaltask')
    var completedTasks=document.getElementById('completedtask')
    var total=tasks.length
    
   var completed=tasks.reduce((acc,task)=>{
   return task.completed ? acc+1 :acc
   },0)
   totalTasks.textContent=total
   completedTasks.textContent =completed
}
function filterTasks(){
    var searchInput=document.getElementById('searchInput')
    var searchValue=searchInput.value.toLowerCase()
 var filteredTasks=tasks.filter((task)=>{
    return task.text.toLowerCase().includes(searchValue)
})
//update todolist with filteredTask 
updateTodolistFilteredTask(filteredTasks)
}

function updateTodolistFilteredTask(filteredTasks)
{
    var todolist= document.getElementById('todolist')
    todolist.innerHTML=""
    filteredTasks.forEach((task)=>{
        var listItem=document.createElement('li')
        listItem.textContent=task.text
        listItem.className=task.completed ? 'completed':""
        listItem.onclick=function(){
            toggleCompleted(task)
        }
        todolist.appendChild(listItem)
    })
    
}