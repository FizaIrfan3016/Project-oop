#! /usr/bin/env node
// Import packages that use in this program.
import inquirer from "inquirer";
import chalk from "chalk";


// Create Student class for student name.
class Student {
    name:string
    constructor(n:string){
        this.name=n
    }
}

// Create Person class for Student name array to add student name in list.
class Person {
    students:Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }

}


const persons= new Person

const programStart = async (persons:Person) =>{
    // Create a do/while loop for again recycle the program.
    do {
    console.log(chalk.cyanBright.italic("Welcome!"));
    const answers = await inquirer.prompt([
        {
            name:"Select",
            type:"list",
            message:"Whom would you like to interact with?",
            choices:[
                'staff',
                'Student',
                 'exit'
                ]
        }
    ])

    if(answers.Select == 'staff'){
        console.log(chalk.redBright.bgGray("You approch the staff room.Please feel free to ask any question."));
        
    }else if (answers.Select == 'Student'){
        const ans = await inquirer.prompt([
            {
                name:"student",
                type:"input",
                message:"Enter the name of the students you want to engage with:"
            }
        ])
        const student = persons.students.find(val => val.name == ans.student)    
        
        if (!student){
            const name = new Student (ans.student)
            persons.addStudent(name)
            console.log(chalk.blueBright.bgWhiteBright(`Hello I am ${name.name}. Nice to meet you.`));
            console.log(chalk.cyan.bold("New student added"));
            console.log(chalk.redBright.bold("Current student list."));
            console.log(persons.students);  
        } else {
            console.log(chalk.redBright.italic(`Hello I am ${Student.name}. Nice to see you again.`));
            console.log(chalk.blueBright("Existing student list"));
            console.log(persons.students); 
        }
    } else if (answers.Select == "exit"){
        console.log(chalk.cyanBright.bold("Exiting the program!"));
        process.exit()
        
    }
}while(true)
}
programStart(persons)