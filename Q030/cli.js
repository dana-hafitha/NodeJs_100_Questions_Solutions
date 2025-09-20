// Function to print the help message.
function printHelp() {
    console.log("this command is used to print the uppercase of the string inserted after insetrtinr the argument'--upper'.");
    console.log("any other argument will print these messages.");
}

const arguments = process.argv.slice(2);

if (arguments[0] === '--upper' && typeof arguments[1] === "string") {
  console.log(arguments[1].toUpperCase());
} 
else {
  printHelp();
}


