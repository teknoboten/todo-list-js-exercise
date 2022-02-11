const newTask = (title, description) => {
  const task = {
    title, description, isComplete: false,

    logState: function() {
      console.log(`${this.title} is${this.isComplete ? " " : " not "}complete`);
    },

    markCompleted: function() {
      this.isComplete = true;
    },
  };
return task;
}


//Driver Code

const task1 = newTask("clean litter box", "find the 💩, pick it up");
const task2 = newTask("summit mount laundry", "find all the dirty clothes and wash them");
const tasks = [task1, task2];


// task2.logState();
// task2.markCompleted();
// task2.logState();
