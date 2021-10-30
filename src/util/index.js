export function getDayFormat() {
  const date = new Date();
  const day = date.getDate();
  const mouth = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${year}-${mouth}-${day}`;
}
