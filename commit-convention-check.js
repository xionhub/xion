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
  // Check if the commit message starts with a Gitmoji
  const gitmojiRegex = /^:[^:\s]+:/;
  if (!gitmojiRegex.test(message)) {
    console.error('Commit message must start with a Gitmoji.');
    return false;
  }

  // Check if the length of the commit message is at least 7 characters
  if (message.length < 7) {
    console.error('Commit message must be at least 7 characters long.');
    return false;
  }

  // Additional custom validation logic can be added here

  // If all checks pass, the commit message is considered valid
  return true;
}
