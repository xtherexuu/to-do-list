export default function (subtasks) {
  let counter = 0;
  if (subtasks.length) {
    subtasks.forEach((element) => {
      element.done ? (counter += 1) : null;
    });
    const progress = counter / subtasks.length;
    return progress.toFixed(2);
  } else {
    return null;
  }
}
