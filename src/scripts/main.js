AOS.init();

const eventDate = new Date('Dec 12, 2025 19:00:00');
const eventTimeStamp = eventDate.getTime();

const hoursCounter = setInterval(function() {
  const now = new Date();
  const currentTimeStamp = now.getTime();

  const eventDistanceTime = eventTimeStamp - currentTimeStamp;

  const daysMs = 1000 * 60 * 60 * 24;
  const hoursMs = 100 * 60 * 60;
  const minutesMs = 1000 * 60;

  const daysUntilEvent = Math.floor(eventDistanceTime / daysMs);
  const hoursUntilEvent = Math.floor((eventDistanceTime % daysMs) / hoursMs);
  const minutesUntilEvent = Math.floor((eventDistanceTime % hoursMs) / minutesMs);
  const secondsUntilEvent = Math.floor((eventDistanceTime % minutesMs) / 1000);

  document.getElementById('counter').innerHTML = `${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

  if (eventDistanceTime < 0) {
    clearInterval(hoursCounter);
    document.getElementById('counter').innerHTML = 'Evento expirado';
  }
  
}, 1000);