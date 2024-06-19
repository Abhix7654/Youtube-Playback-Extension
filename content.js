console.log('YouTube Speed Controller script loaded.');

function displayNotification(message) {
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '50%';
  notification.style.left = '50%';
  notification.style.transform = 'translate(-50%, -50%)';
  notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  notification.style.color = 'white';
  notification.style.padding = '10px 20px';
  notification.style.borderRadius = '5px';
  notification.style.zIndex = '10000';
  notification.style.fontSize = '16px';
  notification.innerText = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    document.body.removeChild(notification);
  }, 2000);
}

document.addEventListener('keydown', function(event) {
  const video = document.querySelector('video');
  if (!video) {
    console.log('No video element found.');
    return;
  }

  let playbackRate;
  switch (event.key) {
    case 'z':
      playbackRate = 1.0;
      video.playbackRate = playbackRate;
      displayNotification('Playback speed set to normal.');
      break;
    case 'x':
      playbackRate = 1.25;
      video.playbackRate = playbackRate;
      displayNotification('Playback speed set to 1.25x.');
      break;
    case 'c':
      playbackRate = 1.5;
      video.playbackRate = playbackRate;
      displayNotification('Playback speed set to 1.5x.');
      break;
    case 'v':
      playbackRate = 1.75;
      video.playbackRate = playbackRate;
      displayNotification('Playback speed set to 1.75x.');
      break;
    case 'b':
      playbackRate = 2.0;
      video.playbackRate = playbackRate;
      displayNotification('Playback speed set to 2x.');
      break;
    default:
      console.log('Key not mapped for speed control.');
      return;
  }

  // Simulate a UI update event
  const rateChangeEvent = new Event('ratechange');
  video.dispatchEvent(rateChangeEvent);
});
