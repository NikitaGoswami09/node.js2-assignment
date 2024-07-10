const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);

// Check if there are enough arguments
if (args.length < 1) {
  console.log("Please provide an operation and the necessary arguments.");
  process.exit(1);
}

const operation = args[0];
const file = args[1];
const content = args[2];

// Function to read a file
function readFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      return;
    }
    console.log(data);
  });
}

// Function to delete a file
function deleteFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file: ${err.message}`);
      return;
    }
    console.log(`File '${filePath}' deleted`);
  });
}

// Function to create a file
function createFile(filePath) {
  fs.writeFile(filePath, '', (err) => {
    if (err) {
      console.error(`Error creating file: ${err.message}`);
      return;
    }
    console.log(`File '${filePath}' created`);
  });
}

// Function to append content to a file
function appendToFile(filePath, content) {
  fs.appendFile(filePath, content + '\n', (err) => {
    if (err) {
      console.error(`Error appending to file: ${err.message}`);
      return;
    }
    console.log(`Content appended to the file '${filePath}'`);
  });
}

// Function to rename a file
function renameFile(oldPath, newPath) {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error(`Error renaming file: ${err.message}`);
      return;
    }
    console.log(`File '${oldPath}' renamed to '${newPath}'`);
  });
}

// Function to list files and directories in a directory
function listDirectory(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error listing directory: ${err.message}`);
      return;
    }
    files.forEach(file => {
      console.log(file);
    });
  });
}

// Perform the operation based on the first argument
switch (operation) {
  case 'read':
    if (file) {
      readFile(file);
    } else {
      console.log("Please provide a file name to read.");
    }
    break;
  case 'delete':
    if (file) {
      deleteFile(file);
    } else {
      console.log("Please provide a file name to delete.");
    }
    break;
  case 'create':
    if (file) {
      createFile(file);
    } else {
      console.log("Please provide a file name to create.");
    }
    break;
  case 'append':
    if (file && content) {
      appendToFile(file, content);
    } else {
      console.log("Please provide content and a file name to append.");
    }
    break;
  case 'rename':
    if (file && content) {
      renameFile(file, content);
    } else {
      console.log("Please provide the old file name and the new file name.");
    }
    break;
  case 'list':
    if (file) {
      listDirectory(file);
    } else {
      console.log("Please provide a directory path to list.");
    }
    break;
  default:
    console.log(`Invalid operation '${operation}'`);
}
