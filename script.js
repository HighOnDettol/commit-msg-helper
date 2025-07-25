// This is like finding the special boxes and buttons in our helper's house
const gitDiffInput = document.getElementById('gitDiffInput');
const generateButton = document.getElementById('generateButton');
const clearButton = document.getElementById('clearButton');
const helperIdeasDiv = document.getElementById('helperIdeas'); // Updated ID here

// This tells the helper what to do when someone clicks the "Ask Helper for Ideas!" button
generateButton.addEventListener('click', async () => {
    const diffText = gitDiffInput.value.trim(); // Get the text from the big box, and clean up extra spaces

    if (diffText === '') {
        helperIdeasDiv.innerHTML = '<p style="color: red;">Please paste your code changes first!</p>';
        return; // Stop here if the box is empty
    }

    helperIdeasDiv.innerHTML = '<p>Helper is thinking... 🧠</p>'; // Show that the helper is busy

    // *** THIS IS WHERE THE REAL AI WOULD GO LATER! ***
    // For now, let's pretend the AI gives us some good ideas based on ANYTHING you type.
    // In the future, this is where you'd connect to a real AI service!

    const fakeAiIdeas = [
        "feat: Add a new super cool rocket booster",
        "fix: Make sure the helper doesn't trip on stairs anymore",
        "refactor: Clean up the helper's internal wiring",
        "docs: Update helper's instruction manual",
        "chore: Give the helper a fresh coat of paint"
    ];

    // Let's add a little delay to make it feel like the helper is thinking hard!
    await new Promise(resolve => setTimeout(resolve, 1500)); // Wait 1.5 seconds

    let ideasHtml = '<h3>Helper Says: Here are some ideas!</h3><ul>';
    fakeAiIdeas.forEach(idea => {
        ideasHtml += `<li>${idea} <button class="copy-button" data-text="${idea}">Copy</button></li>`;
    });
    ideasHtml += '</ul>';

    helperIdeasDiv.innerHTML = ideasHtml; // Updated ID here

    // Make the "Copy" buttons work!
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', () => {
            const textToCopy = button.dataset.text;
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    const originalText = button.textContent;
                    button.textContent = 'Copied!';
                    setTimeout(() => {
                        button.textContent = originalText;
                    }, 1000); // Change back after 1 second
                })
                .catch(err => console.error('Could not copy text: ', err));
        });
    });
});

// This tells the helper what to do when someone clicks the "Clear" button
clearButton.addEventListener('click', () => {
    gitDiffInput.value = ''; // Empty the big text box
    helperIdeasDiv.innerHTML = ''; // Clear the helper's ideas // Updated ID here
});
