export function formatDate(date: Date): string {
  const year = date.getFullYear();
  let month: string | number = date.getMonth() + 1;
  month = month >= 10 ? month : '0' + month.toString();
  let day: string | number = date.getDate();
  day = day >= 10 ? day : '0' + day.toString();
  let hour: string | number = date.getHours();
  hour = hour >= 10 ? hour : '0' + hour;
  const min = date.getMinutes();
  let sec: string | number = date.getSeconds();
  sec = sec >= 10 ? sec : '0' + sec;

  return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
}
