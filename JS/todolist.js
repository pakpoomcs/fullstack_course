let input = prompt("What would you like to do?")
const todo = ['Collect eggs', 'Clean cat litter box']

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        for (let i = 0; i < todo.length; i++) {
            console.log(todo[i])
        }
    }
    input = prompt("What would you like to do?")
}
console.log('OK quitting')