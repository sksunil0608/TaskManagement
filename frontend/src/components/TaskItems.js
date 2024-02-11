import React from "react";
const TaskItems =  ({ tasks, onTaskUpdate, onTaskDelte }) => {
  const handleTaskStatusChange = async (taskId) => {
    const newStatus = true
    onTaskUpdate(taskId,newStatus)
  };
  return (
    <div className="">
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody className="">
          {tasks.length !== 0 &&
            tasks.map((task, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-select" : "bg-unselect"} ${
                  task.status ? "line-through" : ""
                } text-white opacity-[0.9] border border-black rounded-lg`}
              >
                <td className="px-4 py-2">{task.id}</td>
                <td className=" px-4 py-2">{task.title}</td>
                <td className="px-4 py-2">{task.description}</td>
                <th className="px-4 py-2">
                  {task.status ? (
                    <div>
                      <button className="text-green-400 text-2xl">
                        <svg
                          className="h-8 w-8 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div>
                      <input
                        type="checkbox"
                        onChange={() => handleTaskStatusChange(task.id)}
                        className="w-4 h-4"
                      />
                    </div>
                  )}
                </th>
                <th>
                  <button
                    onClick={() => {
                      onTaskDelte(task.id);
                    }}
                  >
                    <svg
                      className="h-8 w-8 text-red-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      />{" "}
                      <line x1="9" y1="9" x2="15" y2="15" />{" "}
                      <line x1="15" y1="9" x2="9" y2="15" />
                    </svg>
                  </button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskItems;
