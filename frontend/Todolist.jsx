// import React, { useState } from 'react';
// import './App.css';

// export default function TodoList() {
//     const [tasks, setTasks] = useState([]);
//     const [input, setInput] = useState('');

//     const addTask = () => {
//         if (input.trim() === '') return;
//         setTasks(prevTasks => [...prevTasks, input]);
//         setInput('');
//     };

//     const deleteTask = (index) => {
//         const updated = tasks.filter((_, i) => i !== index);
//         setTasks(updated);
//     };

//     const moveTaskUp = (index) => {
//         if (index === 0) return;
//         const newTasks = [...tasks];
//         [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
//         setTasks(newTasks);
//     };

//     const moveTaskDown = (index) => {
//         if (index === tasks.length - 1) return;
//         const newTasks = [...tasks];
//         [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
//         setTasks(newTasks);
//     };

//     return (
//         <div className="project-container h-[400px] w-[600px] 
//         text-center  border-0.1 shadow-2xl border- bg-[#1f1f1f] rounded-2xl">
//             <h1 className="heading text-6xl font-bold text-[#fff3f3] mb-[40px] mt-[17px]">To-Do List</h1>
//             <div className='input-container flex content-center items-center justify-center  m-[20px] '>
//                 <input
//                     type="text"
//                     value={input}
//                     placeholder="         Enter a task..."
//                     onChange={(e) => setInput(e.target.value)}
//                     className="input-text flex-[0.7] p-[12px 20px] text-[16px] outline-0
//                     rounded-tl-[10px] rounded-bl-[10px] pl-[10px]  bg-white h-[40px] "
//                 />
//                 <button className="add-button bg-green-500 h-[40px] w-[60px] 
//                 rounded-tr-[10px] rounded-br-[10px]" onClick={addTask}>Add</button>
//             </div>
//             <div className="bottom-container flex flex-col items-center">
//                 {tasks.map((task, index) => (
//                     <div key={index} className="inner-task flex justify-between 
//                     items: center bg-white w-[500px] p-[15px] mb-[15px] rounded-[12px]">
//                         <p className="inner-text text-[18px] font-bold text-[#333] 
//                         text-left break-words whitespace-normal ml-[20px]">{task}</p>
//                         <div className="button-group ">
//                             <button className="butt-delete bg-red-600 text-white 
//                             w-[90px] h-[35px] border-0 rounded-[8px] font-bold cursor-pointer" onClick={() => deleteTask(index)}>Delete</button>
//                             <button className="butt-move-up bg-[#3498db] 
//                             text-white border-0 rounded-[5px] cursor-pointer font-bold
//                             hover:bg-[#3498db] transition-colors duration-200 w-[40px] h-[35px] 
//                             mr-[5px] ml-[5px]" onClick={() => moveTaskUp(index)}>↑</button>
//                             <button className="butt-move-down  bg-gray-600 
//                             text-white border-0 rounded-[5px] cursor-pointer font-bold
//                             hover:bg-gray-600 transition-colors duration-200 w-[40px] h-[35px] 
//                             mr-[5px] " onClick={() => moveTaskDown(index)}>↓</button>
//                         </div>
//                     </div>

//                 ))}

//             </div>
//         </div>
//     );
// }





















import React, { useState } from 'react';
import './App.css';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // Logic unchanged
  const addTask = () => {
    if (input.trim() === '') return;
    setTasks(prevTasks => [...prevTasks, input]);
    setInput('');
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const moveTaskUp = (index) => {
    if (index === 0) return;
    const newTasks = [...tasks];
    [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
    setTasks(newTasks);
  };

  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) return;
    const newTasks = [...tasks];
    [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-100 px-4 w-screen">
      <div
        className="
          w-full max-w-[640px]
          rounded-2xl border border-zinc-800/60 bg-zinc-900/80
          shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]
          backdrop-blur
          animate-fade-up
          transition-all duration-300 ease-out
          hover:shadow-[0_28px_80px_-24px_rgba(0,0,0,0.7)]
          hover:-translate-y-0.5
        "
      >
        <h1 className="text-center text-5xl font-semibold tracking-tight text-zinc-100 pt-6 pb-2">
          To-Do List
        </h1>

        <div className="flex items-center gap-2 px-5 pb-5">
          <input
            type="text"
            value={input}
            placeholder="Enter a task..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') addTask();
            }}
            className="
              flex-1 h-11 rounded-xl
              bg-zinc-800/70 text-zinc-100 placeholder:text-zinc-500
              px-3.5 outline-none
              ring-1 ring-inset ring-zinc-700/70
              focus:ring-2 focus:ring-sky-500/60
              transition-all duration-200 ease-out
            "
            aria-label="Task input"
          />
          <button
            className="
              h-11 px-4 rounded-xl font-medium
              bg-emerald-500 text-white
              hover:bg-emerald-400 active:bg-emerald-600
              transition-all duration-200 ease-out
              focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70
              hover:scale-[1.02] active:scale-[0.98]
              shadow-[0_8px_20px_-10px_rgba(16,185,129,0.6)]
            "
            onClick={addTask}
          >
            Add
          </button>
        </div>

        <div className="flex flex-col items-center gap-3 pb-6 px-4">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="
                group w-full max-w-[560px]
                rounded-xl bg-[#313131] text-zinc-300
                shadow-sm ring-1 ring-zinc-200
                px-4 py-3
                flex items-center justify-between gap-3
                transition-all duration-200 ease-out
                hover:shadow-md hover:-translate-y-0.5
                animate-pop
              "
            >
              <p className="text-[17px] font-semibold tracking-tight break-words whitespace-normal flex-1">
                {task}
              </p>
              <div className="flex items-center gap-2">
                <button
                  className="
                    bg-[#ef8354] text-white h-9 px-3 rounded-lg font-semibold
                    hover:bg-[#ffa882] active:bg-[#fc966b]
                    transition-all duration-200 ease-out
                    hover:scale-[1.02] active:scale-95
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ef8354]/60
                  "
                  onClick={() => deleteTask(index)}
                  aria-label="Delete task"
                  title="Delete"
                >
                  Delete
                </button>

                <button
                  className="
                    bg-[#ffffff] text-white h-9 w-10 rounded-md font-bold
                    hover:bg-[#a8a8a8] active:bg-[#ffffff]
                    transition-all duration-200 ease-out
                    hover:scale-[1.02] active:scale-95
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a8a8a8]/60
                  "
                  onClick={() => moveTaskUp(index)}
                  aria-label="Move up"
                  title="Move up"
                >
                  ↑
                </button>

                <button
                  className="
                    bg-[#bfc0c0] text-white h-9 w-10 rounded-md font-bold
                    hover:bg-[#f1f3f3] active:bg-[#8d8e8e]
                    transition-all duration-200 ease-out
                    hover:scale-[1.02] active:scale-95
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bfc0c0]/60
                  "
                  onClick={() => moveTaskDown(index)}
                  aria-label="Move down"
                  title="Move down"
                >
                  ↓
                </button>
              </div>
            </div>
          ))}

          {tasks.length === 0 && (
            <div
              className="
                text-zinc-500 text-sm py-8
                transition-opacity duration-300 ease-out
              "
            >
              No tasks yet. Add the first one!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}











