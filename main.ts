
  import inquirer from "inquirer";
  const answer= await inquirer.prompt ([
      {
         type:"number",
         name:"num1",
         message:"Enter the first number:"
      },
      {
          type:"number" ,
          name:"num2",
          message: "Enter the second number:"
      },
      {
          type:"list",
          name:"operator",
          message:"select the operator you want to the perform:",
          choices:["add", "subtract","multiply","divide"]
      }
  ])
  let result:number;
  switch(answer.operator){
      case"add":
      result = answer.num1 + answer. num2;
      console.log(result);
      break;
      case"subtract":
      result = answer.num1 - answer. num2;
      console.log(result);
      break;
      case"multiply":
      result = answer.num1 * answer. num2;
      console.log(result);
      break;
      case"divide":
      result = answer.num1 /answer. num2;
      console.log(result);
      break;
  }
  
      
  
      
      