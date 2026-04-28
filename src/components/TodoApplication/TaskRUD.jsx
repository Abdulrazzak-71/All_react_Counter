import { Pen, Trash2 } from "lucide-react";
const TaskRUD = ({ Tasks, setTasks }) => {
    const HandleDelete = (index) => {
        setTasks(
            Tasks.filter((item, ind) => ind !== index)
        )
    }

    return (
        <div className={`Redshadow space-y-5 p-3 overflow-y-scroll md:h-[32rem] md:w-[42rem] no-scrollbar rounded-2xl`}>
            {
                Tasks.map((item, index) =>
                    <div key={index} className="flex">
                        <div className="bg-red-300 h-10 w-10 grid place-content-center rounded-full p-1">
                            <span>{index + 1}.</span>
                        </div>
                        <div className="grid place-content-center grid-cols-2">
                            <h1>{item.task}</h1>
                            <span>{item.timing}</span>
                        </div>
                        <div className="grid grid-cols-2 ">
                            <button onClick={() => HandleDelete(index)}>
                                <Trash2 />
                            </button>
                            <button>
                                <Pen />
                            </button>
                        </div>
                    </div>

                )
            }

        </div>
    )
}

export default TaskRUD;