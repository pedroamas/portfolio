import Dexie from "dexie";

const db = new Dexie("tasksDB");
db.version(1).stores({
  tasks: "++id,name,completed",
});

export function getTasks() {
  return db.tasks.toArray();
}

export function newTask(task) {
  const newTask = { name: task.name, completed: false };
  return db.tasks.add(newTask);
}

export function deleteTask(task) {
  return db.tasks.delete(task.id);
}

export function updateTask(task) {
  const editObject = { id: task.id };
  if (task.name) editObject.name = task.name;
  if (task.completed !== undefined) editObject.completed = task.completed;
  return db.tasks.update(task.id, editObject);
}
