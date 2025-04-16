    // Time to play sound (24-hour format)
    const ttps = [5, 6, 7, 8, 14, 15, 16, 19, 20, 21];
    let lastPlayedHour = null;

    function playSound() {
      const audio = new Audio('./audio/notification.mp3'); // Replace with your actual sound file path or URL
      audio.play();
      console.log("Sound played at hour:", new Date().getHours());
    }

    function checkTimeAndPlaySound() {
      const now = new Date();
      const currentHour = now.getHours();

      if (ttps.includes(currentHour) && currentHour !== lastPlayedHour) {
        playSound();
        lastPlayedHour = currentHour;
      }

      // Reset lastPlayedHour at midnight to allow sound at early morning hours
      if (currentHour === 0 && lastPlayedHour !== null) {
        lastPlayedHour = null;
      }
    }

    // Check once every minute
    setInterval(checkTimeAndPlaySound, 60 * 1000);

    // Run immediately in case the page loads at the right time
    checkTimeAndPlaySound();