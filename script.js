function updateTime() {
    // Get the <p> element with the id 'timer'
    const timerElement = document.getElementById('timer');
    
    // Get the current date and time
    const now = new Date();

    // Extract the year, month, and day from the current date
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const day = String(now.getDate()).padStart(2, '0');

    // Extract the hours, minutes, and seconds from the current time
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Determine if it's AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;

    // Create a formatted time string in MM/DD/YYYY, HH:MM:SS AM/PM format
    const formattedTime = `${month}/${day}/${year}, ${formattedHours}:${minutes}:${seconds} ${ampm}`;
    
    // Update the content of the timer element with the formatted time string
    timerElement.textContent = formattedTime;
}

// Call updateTime once immediately to show the current time right away
updateTime();

// Set an interval to update the timer every second (1000 milliseconds)
setInterval(updateTime, 1000);
