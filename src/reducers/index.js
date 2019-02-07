import { uniqueId } from "../actions";

const mockTasks = [
  {
    id: uniqueId(),
    title: "Learn Redux",
    description: "The store, actions, and reducers, oh my!",
    status: "In Progress",
  },
  {
    id: uniqueId(),
    title: "Peace on Earth",
    description: "No big deal.",
    status: "In Progress",
  },
];

export default function tasks(state = { tasks: mockTasks }, action) {
  switch (action.type) {
    case "CREATE_TASK":
      return { tasks: [...state.tasks, action.payload] };


    case "EDIT_TASK":
      return {
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return { id: task.id, ...action.payload.params };
          }
          return task;
        }),
      };
    default:
      return state;
  }
}
