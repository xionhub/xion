#!/usr/bin/env node

const fs = require('fs');

const commitMsgFile = process.env.HUSKY_GIT_PARAMS;

if (!commitMsgFile) {
  console.error('HUSKY_GIT_PARAMS environment variable is missing.');
  process.exit(1);
}

const commitMsg = fs.readFileSync(commitMsgFile, 'utf-8').trim();

// Your custom commit message validation logic here
const isValid = validateCommitMessage(commitMsg);

if (!isValid) {
  console.error('Invalid commit message. Please follow the specified rules.');
  process.exit(1);
}

function validateCommitMessage(message) {
  // Implement your own validation logic here
  // Check for Gitmoji, message length, etc.
  return true; // Return true if the message is valid, false otherwise
}
