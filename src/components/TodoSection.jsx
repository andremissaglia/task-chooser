import { useState } from 'react'
import TodoItem from './TodoItem'
import './TodoSection.css'

const TodoSection = ({ 
  title, 
  tasks, 
  onAddTask, 
  onToggleTask, 
  onToggleUrgent, 
  onRemoveTask,
  onRemoveSection,
  canRemove
}) => {
  const [newTaskText, setNewTaskText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTaskText.trim()) {
      onAddTask(newTaskText)
      setNewTaskText('')
    }
  }

  const completedCount = tasks.filter(task => task.completed).length
  const totalCount = tasks.length

  return (
    <section className="todo-section">
      <div className="section-header">
        <h2>{title}</h2>
        <div className="section-header-controls">
          <span className="task-count">
            {completedCount}/{totalCount}
          </span>
          {canRemove && (
            <button
              className="remove-section-btn"
              onClick={onRemoveSection}
              title={`Remove ${title} section`}
            >
              🗑️
            </button>
          )}
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="add-task-form">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Add new task..."
          className="task-input"
        />
        <button type="submit" className="add-task-btn">+</button>
      </form>

      <div className="tasks-list">
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={() => onToggleTask(task.id)}
            onToggleUrgent={() => onToggleUrgent(task.id)}
            onRemove={() => onRemoveTask(task.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default TodoSection
