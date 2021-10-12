export function toDateTime(secs) {
  var t = new Date(1970, 0, 1); // Epoch
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  t.setSeconds(secs);
  return {
    date: t.toLocaleDateString("en-US", options),
    time: t.toLocaleTimeString()
  };
}
