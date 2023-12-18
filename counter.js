// Set the target counts
const targetCounts = {
    happyStudent: 2000,
    video: 1600,
    mock: 800,
    questions: 1000
};

// Set the current counts
let currentCounts = {
    happyStudent: 2,
    video: 6,
    mock: 4,
    questions: 0
};

// Function to increment the count
function incrementCounter(counterId, targetCount) {
    const counterElement = document.getElementById(counterId);
    currentCounts[counterId]++;

    // Update the displayed count
    counterElement.innerText = currentCounts[counterId] + (counterId === 'questions' ? 'L+' : '+');

    // Stop incrementing when the target count is reached
    if (currentCounts[counterId] < targetCount) {
        setTimeout(() => incrementCounter(counterId, targetCount), 200); // Adjust the delay as needed (shorter delay)
    }
}

// Start incrementing the counters
incrementCounter('happyStudent', targetCounts.happyStudent);
incrementCounter('video', targetCounts.video);
incrementCounter('mock', targetCounts.mock);
incrementCounter('questions', targetCounts.questions);
