import AddTask from "./AddTask";

const TodoIndex = ({ themeDark }) => {
    return (
        <div className="space-y-5 md:grid p-3">
            <div className={`text-2xl  ${themeDark ? "" : "text-[#220901]"}`}>
                <h1>React TODO Application</h1>
            </div>
            <>
                <AddTask />
            </>
        </div>
    )
}

export default TodoIndex;