const { WorkflowJS } = require('@vhidvz/wfjs');
 
// Define activities
const sayHelloJohn = {
  id: 'sayHelloJohn',
  execute: (context) => {
    console.log('Hello John');
    return 'done';
  },
};
 
const sayHelloAlice = {
  id: 'sayHelloAlice',
  execute: (context) => {
    console.log('Hello Alice');
    return 'done';
  },
};
 
const defaultGreeting = {
  id: 'defaultGreeting',
  execute: (context) => {
    console.log(`Hello, ${context.input.name}`);
    return 'done';
  },
};
 
// Define the workflow model
const workflow = {
  activities: [
    {
      id: 'checkName',
      execute: (context) => {
        const name = context.input.name;
        if (name === 'John') {
          return 'sayHelloJohn';
        } else if (name === 'Alice') {
          return 'sayHelloAlice';
        } else {
          return 'defaultGreeting';
        }
      },
    },
    sayHelloJohn,
    sayHelloAlice,
    defaultGreeting,
  ],
  startActivityId: 'checkName',
};
 
// Initialize workflow engine
const engine = new workflow();
 
// Input for the workflow
const context = {
  input: {
    name: 'John', // Change this to test different inputs
  },
};
 
// Run the workflow
engine.run(workflow, context).then((result) => {
  console.log('Workflow completed:', result);
});