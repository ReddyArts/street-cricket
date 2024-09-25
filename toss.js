document.getElementById('flipButton').addEventListener('click', function() {
    const coinVideo = document.getElementById('coinVideo');
    const result = document.getElementById('result');

    // Show the video
    coinVideo.style.display = 'block';
    
    // Play the video
    coinVideo.play();

    // After the video ends, show the result
    coinVideo.onended = function() {
        // Randomly choose heads or tails
        const isHeads = Math.random() < 0.5;
        result.textContent = isHeads ? 'You got Heads!' : 'You got Tails!';
        
        // Hide the video again
        coinVideo.style.display = 'none';
    };
});

