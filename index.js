
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    // Print the state of a task to the console in a nice readable way
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
      // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
      markComplete: function() {
      this.complete = true;
    }
  }
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean cat litter", "take all the shit out of the box");
const task2 = newTask("Do laundry", "oh no");
const tasks = [task1, task2];


// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

task1.logState(); // Clean Cat Litter has not been completed
task1.markComplete();
task1.logState(); // Clean Cat Litter has been completed


