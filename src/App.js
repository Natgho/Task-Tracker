import './App.css';
import Header from "./Components/Header";
import {useState} from "react";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/addTask";

function App() {
    const [tasks, setTasks] = useState([])
    const [showAdd, setShowAdd] = useState(false)
    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

    //Add Task
    const addTask = (task) => {
        const newTask = {id: tasks.length + 1, ...task}
        setTasks([...tasks, newTask]);
    }

    return (
        <div className="container">
            <Header title="Task Tracker" showAdd={showAdd} setShowAdd={setShowAdd}/>
            {showAdd && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks}
                                       onDelete={deleteTask}
                                       onToggle={toggleReminder}/> : 'No Tasks to Show'}
        </div>
    );
}

export default App;
