import './TaskPicker.css'

const TaskPicker = ({ onPick, pickedTask }) => {
  return (
    <div className="task-picker">
      <button className="pick-task-btn" onClick={onPick}>
        🎯 Pick Next Task
      </button>
      
      {pickedTask && (
        <div className="picked-task">
          <span className="picked-label">Next task:</span>
          <div className="picked-task-info">
            <span className="picked-task-text">{pickedTask.text}</span>
            <span className="picked-task-section">({pickedTask.section})</span>
            {pickedTask.urgent && <span className="picked-task-urgent">🔥</span>}
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskPicker
