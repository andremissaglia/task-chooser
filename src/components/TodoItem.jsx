import './TodoItem.css'

const TodoItem = ({ task, onToggle, onToggleUrgent, onRemove }) => {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''} ${task.urgent ? 'urgent' : ''}`}>
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
        />
        <span className="checkmark"></span>
      </label>
      
      <span className="task-text">{task.text}</span>
      
      <div className="task-controls">
        <button
          className={`urgency-btn ${task.urgent ? 'urgent' : 'normal'}`}
          onClick={onToggleUrgent}
          title={task.urgent ? 'Mark as normal' : 'Mark as urgent'}
        >
          {task.urgent ? '🔥' : '📝'}
        </button>
        
        <button
          className="remove-btn"
          onClick={onRemove}
          title="Remove task"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default TodoItem
