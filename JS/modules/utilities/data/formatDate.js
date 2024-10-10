// format: DD-MM-YYYY
export default function formatDate(date) {
  const extractDate = new Date(date).toLocaleDateString();

  const dateArr = extractDate.split("/");

  return `${dateArr[1].padStart(2, "0")}-${dateArr[0].padStart(2, "0")}-${
    dateArr[2]
  }`;
}
