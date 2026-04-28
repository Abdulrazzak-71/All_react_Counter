import { useRef, useState } from "react";
import TaskRUD from "./TaskRUD";

const AddTask = ({ themeDark }) => {
    const Task = useRef(null)
    const Time = useRef(null)
    const [Tasks, setTasks] = useState([
        {
            "task": "Study React basics",
            "timing": "08:00 AM - 09:30 AM"
        },
        {
            "task": "Practice JavaScript",
            "timing": "10:00 AM - 11:30 AM"
        },
        {
            "task": "Build small project",
            "timing": "12:00 PM - 02:00 PM"
        },
        {
            "task": "Lunch Break",
            "timing": "02:00 PM - 02:45 PM"
        },
        {
            "task": "Learn Node.js",
            "timing": "03:00 PM - 04:30 PM"
        },
        {
            "task": "MongoDB Practice",
            "timing": "05:00 PM - 06:00 PM"
        },
        {
            "task": "Revision & Notes",
            "timing": "07:00 PM - 08:00 PM"
        }
    ])
    const HandleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            task: Task.current.value,
            timing: Time.current.value,
        };

        setTasks((prev) => [...prev, newTask]);

        Task.current.value = "";
        Time.current.value = "";
    }
    return (
        <div className="md:flex space-y-5 gap-7 md:mx-auto p-3">
            <div className="grid place-content-center">
                <div className="grid place-content-center">
                    <div className={`p-3 space-y-5 rounded-3xl ${themeDark ? "Whiteshadow border-white" : "Redshadow"}`}>
                        <div className="text-center text-2xl font-bold">
                            <h1>Add Task To List</h1>
                        </div>
                        <form onSubmit={HandleSubmit} >
                            <div className="space-y-7">
                                <div className="grid grid-flow-row">
                                    <label className="font-thin text-xl px-3">Add Task</label>
                                    <input ref={Task} className="h-12 md:w-96  border-b-2 border-black px-1 text-black" type="text" placeholder="Enter Task" />
                                </div>
                                <div className="grid grid-flow-row">
                                    <label className="font-thin text-xl px-3">Set Time</label>
                                    <input ref={Time} className="h-12 md:w-96 border-b-2 border-black  px-1 text-black" type="time" />
                                </div>
                                <div className="flex">
                                    <input className="text-red-50 accent-[#00f5d4] cursor-pointer h-5 w-10" type="checkbox" />
                                    <label className="relative -top-1 -left-1 text-xl font-mono">Remind me</label>
                                </div>
                                <div className="text-white grid grid-cols-2 gap-3">
                                    <button className="bg-[#d90429] h-10 p-1 rounded-3xl">Clear Form</button>
                                    <button className="bg-[#7ae582] h-10 p-1 rounded-3xl">Add Task</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="">
                <TaskRUD Tasks={Tasks} setTasks={setTasks} />
            </div>
        </div>
    )
}

export default AddTask;