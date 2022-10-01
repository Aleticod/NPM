const messages = [
    "This is where it all begins ...",
    "Commit committed",
    "Version control is awful",
    "This commit is a lie"
];

const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
    funnyCommit
};