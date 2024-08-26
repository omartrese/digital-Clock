function updateClock() {
    // Get the current date and time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format time with leading zeros if needed
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    // Combine into a time string
    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    // Display the time
    document.querySelector('span').innerHTML = '<h1>' + timeString + '</h1>';
}

// Initial call to display the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);