import { useState } from 'react'
import './AddSectionForm.css'

const AddSectionForm = ({ onAddSection }) => {
  const [sectionName, setSectionName] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (sectionName.trim()) {
      onAddSection(sectionName)
      setSectionName('')
      setIsAdding(false)
    }
  }

  const handleCancel = () => {
    setSectionName('')
    setIsAdding(false)
  }

  if (!isAdding) {
    return (
      <div className="add-section-card">
        <button 
          className="add-section-trigger"
          onClick={() => setIsAdding(true)}
          title="Add new section"
        >
          <span className="plus-icon">+</span>
          <span className="add-text">Add Section</span>
        </button>
      </div>
    )
  }

  return (
    <div className="add-section-card">
      <form onSubmit={handleSubmit} className="add-section-form">
        <input
          type="text"
          value={sectionName}
          onChange={(e) => setSectionName(e.target.value)}
          placeholder="Section name..."
          className="section-name-input"
          autoFocus
          maxLength={50}
        />
        <div className="form-actions">
          <button type="submit" className="save-btn" disabled={!sectionName.trim()}>
            ✓
          </button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            ✕
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddSectionForm
