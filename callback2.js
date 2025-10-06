
function performAction(message, callback) {
  console.log(message); 
  callback(); }

function afterAction() {
  console.log("Action completed!");
}

performAction("Starting the process...", afterAction);