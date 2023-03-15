const fs = require("fs");

//1

// Define the path of the new file
const filePath = "./test.txt";

// Define the content of the new file
const fileContent = "Hello, world!";

// Write the content to the new file using the fs module
fs.writeFile(filePath, fileContent, (error) => {
  if (error) {
    console.error(`Error writing file: ${error.message}`);
  } else {
    console.log(`File created successfully at ${filePath}.`);
  }
});

//2
const copyFilePath = "./test2.txt";
fs.readFile(filePath, (error, data) => {
  if (error) {
    console.error(`Error reading file: ${error.message}`);
  } else {
    // Write the content to the copy file
    fs.writeFile(copyFilePath, data, (error) => {
      if (error) {
        console.error(`Error writing file: ${error.message}`);
      } else {
        console.log(
          `File copied successfully from ${filePath} to ${copyFilePath}.`
        );
      }
    });
  }
});

fs.rename("./test.txt", "./hello.txt", (error) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log("renamed file");
  }
});

const directoryPath = "./";

// Read the contents of the directory using the fs module
fs.readdir(directoryPath, (error, files) => {
  if (error) {
    console.error(`Error reading directory: ${error.message}`);
  } else {
    console.log(`Files in ${directoryPath}:`);
    files.forEach((file) => {
      console.log(file);
    });
  }
});

// Delete the file using the fs module
fs.unlink("./test2.txt", (error) => {
  if (error) {
    console.error(`Error deleting file: ${error.message}`);
  } else {
    console.log(`deleted successfully.`);
  }
});
