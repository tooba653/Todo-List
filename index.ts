#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
let todos: string [] = [];
let condition = true;

//Print welcome message
console.log(chalk.bold.rgb(204,204,204)(`\n \t\t <<<<<<<<=================>>>>>>>>`));
console.log( chalk.bold.rgb(204,204,204)("\n \t\t WELCOME TO TODO LIST APPLICATION\n"));
console.log(chalk.bold.rgb(204,204,204)(`\t \t <<<<<<<<<===================>>>>>>>> \n`));


let main = async () => {
   while (condition){
    let option = await inquirer.prompt([
        {
            name:"choice",
            type:"list",
            message:"Select an option you want to do",
            choices:["Add task","Delete task","Update task","View Todo List","Exit"]
        }
    ]);
    if(option.choice === "Add task"){
        await addTask()
    }
    else if(option.choice === "Delete task"){
        await deleteTask()
    }
    else if (option.choice ==="Update task"){
        await  updateTask()
    }
    else if(option.choice === "View Todo List"){
        await viewTask()
    }
    else if(option.choice ==="Exit"){
        condition = false;
    }
   }
}
//function to add task
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:"Enter your new task"
        }
    ]);
    todos.push(newTask.task);
    console.log(`\n ${newTask.task} Your Task added Successfully`);
}
//function to view Task
let viewTask = () => {
    console.log("\n Your Todo-list: \n");
    todos.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
}

main();

// function to delete a task from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Enter the `index no` of the Task you want to delete"
        }
    ]);
    let deletedTask = todos.splice(taskIndex.index -1, 1);
    console.log(`\n ${deletedTask} This Task deleted successfully from your TodoList`)
}
//function to Update a task  
let updateTask = async () => {
    await viewTask()
    let update_task_index = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Enter the `index no` You want to update:",
        },
        {
            name:"new_task",
            type:"input",
            message:"Now enter new task name"
        }
    ]);
    todos[update_task_index.index -1] = update_task_index.new_task
    console.log(`\n Task at index no ${update_task_index.index -1}Updated Successfully [for updated list check option:"View Todo List" ]`)
    
}


















