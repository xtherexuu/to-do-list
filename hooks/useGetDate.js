export default function (date) {
  if (!date) {
    return null;
  }
  const currentDayDate = new Date();
  currentDayDate.setHours(0, 0, 0, 0);
  const taskDate = new Date(date);
  taskDate.setHours(0, 0, 0, 0);
  const dateString = taskDate.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  if (taskDate.getTime() < currentDayDate.getTime()) {
    return { date: dateString, color: "gray" };
  } else if (taskDate.getTime() === currentDayDate.getTime()) {
    return { date: "Today!", color: "red" };
  } else {
    return { date: dateString, color: "blue" };
  }
}
