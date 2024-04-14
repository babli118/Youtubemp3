function DurationDisplay({ durationInSeconds }) {
  // Function to convert seconds to hours, minutes, and seconds
  function convertDuration(seconds) {
    // Calculate hours
    const hours = Math.floor(seconds / 3600);

    // Calculate remaining seconds after accounting for hours
    const remainingSeconds = seconds % 3600;

    // Calculate minutes
    const minutes = Math.floor(remainingSeconds / 60);

    // Calculate remaining seconds
    const remainingSecondsFinal = remainingSeconds % 60;

    return { hours, minutes, seconds: remainingSecondsFinal };
  }

  // Convert duration to hours, minutes, and seconds
  const { hours, minutes, seconds } = convertDuration(durationInSeconds);

  // Render the duration
  return (
    <div>
      {hours > 0 && <span>{hours}:</span>}
      {hours > 0 && minutes < 10 && <span>0</span>}
      {minutes}:{seconds < 10 ? "0" : ""}
      {seconds}
    </div>
  );
}

export default DurationDisplay;
