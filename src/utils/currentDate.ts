export function getCurrentFormattedDate(): string {
  const date = new Date();

  let day = date.getDate().toString();
  if (day.length === 1) day = '0' + day;

  let month = (date.getMonth() + 1).toString();
  if (month.length === 1) month = '0' + month;

  let hour = date.getHours().toString();
  if (hour.length === 1) hour = '0' + hour;

  let minutes = date.getMinutes().toString();
  if (minutes.length === 1) minutes = '0' + minutes;

  const year = date.getFullYear().toString();

  return `${hour}:${minutes} ${day}.${month}.${year}`;
}