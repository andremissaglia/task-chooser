# TODO App

A modern, feature-rich TODO application built with React and Vite.

## Features

- **4 Task Sections**: Organize tasks into "Pessoal", "Mercadinho", "BOD", and "Insight" categories
- **Task Management**:
  - Add new tasks with simple text input
  - Mark tasks as complete with checkboxes
  - Toggle tasks between "urgent" and "normal" priority levels
  - Remove individual tasks
- **Smart Task Picker**: Random task selection with weighted priority (urgent tasks have 2x weight)
- **Bulk Actions**: Clear all completed tasks at once
- **Data Persistence**: Tasks are automatically saved to localStorage
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean Interface**: Minimal, intuitive design focused on productivity

## Getting Started

### Prerequisites

- Node.js (version 18+ recommended)
- npm

### Installation

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Adding Tasks**: Type in the input field within any section and press Enter or click the "+" button
2. **Completing Tasks**: Click the checkbox next to any task to mark it as complete
3. **Setting Priority**: Click the priority button (📝/🔥) to toggle between normal and urgent
4. **Removing Tasks**: Click the "✕" button to remove individual tasks
5. **Task Picker**: Click "🎯 Pick Next Task" to get a weighted random suggestion for your next task
6. **Clearing Completed**: Use the "Clear Completed" button to remove all finished tasks

## Project Structure

```
src/
├── components/
│   ├── TodoSection.jsx    # Individual section component
│   ├── TodoItem.jsx       # Single task item component
│   ├── TaskPicker.jsx     # Random task picker component
│   └── *.css             # Component-specific styles
├── App.jsx               # Main application component
├── App.css              # Main application styles
├── index.css            # Global styles
└── main.jsx             # Application entry point
```

## Technologies Used

- **React 18**: Modern React with hooks for state management
- **Vite**: Fast build tool and development server
- **CSS3**: Custom styling with modern CSS features
- **localStorage**: Client-side data persistence

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
