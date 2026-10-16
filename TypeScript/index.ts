type Status = "pending" | "done";
interface Task { title: string; status: Status; }

const tasks: Task[] = [
  { title: "Documentar API", status: "pending" },
  { title: "Revisar consultas", status: "done" },
];

function filterByStatus(items: Task[], status: Status): Task[] {
  return items.filter((item) => item.status === status);
}

console.log(filterByStatus(tasks, "pending"));
