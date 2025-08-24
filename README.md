# 💸 Expense Tracker App

A modern and intuitive expense tracking web application built using **React**. This app allows users to manage their personal budget by adding expenses, viewing a categorized list, and visualizing data through charts.

---

## 🚀 Features
latest features 

- 📌 **Add, edit, and delete expenses** with category, title, date, and amount
- 🗂️ **Display a list of all expenses** and filter by category
- 📊 **Visual chart representation** of expenses (placeholder, ready for integration)
- 💡 **Reusable components** like CategoryCards, BudgetCards, and Chart
- 💅 Fully responsive and clean UI built with modern CSS
- ⚡ **Instant updates**: All changes reflect immediately in the UI.

---

## 🛠️ Tech Stack

- **React** – Frontend library
- **JavaScript (ES6+)** – Core logic(functionalty)
- **HTML/CSS** – Markup & styling
- **React Hooks** – State and lifecycle management
- **FontAwesome** – Icons

---

## 🏗️ Project Structure

```
src/
  components/
    App.jsx           # App entry point
    Header.jsx        # App header
    ExpenseMain.jsx   # Main dashboard, state management
    List.jsx          # Expense list display
    AddExpense.jsx    # Add expense modal
    EditExpense.jsx   # Edit expense modal
    AddBudget.jsx     # Add budget modal
    Chart.jsx         # Chart placeholder
  utill-Components/
    CategoryCards.jsx # Category filter buttons
    BudgetCards.jsx   # Budget summary cards
    ButtonCards.jsx   # Add Budget/Add Expense buttons
  css/                # All component CSS files
  assets/             # Images and static assets
```

---

## 🔄 State & Data Flow

### App.jsx
- Renders `Header` and `ExpenseMain`.

### ExpenseMain.jsx
- **Central state manager** for:
  - `budget`, `expense`, `expenseList` (array of all expenses)
  - Modal visibility: `showAddBudget`, `showAddExpense`, `showEditExpense`
  - `editingExpense` (the expense being edited)
  - `selectedCategory` (for filtering)
- **Passes state and handlers** to all child components.
- **Handles all updates**: adding, editing, deleting expenses, and filtering by category.

### AddExpense.jsx
- Receives `onAddExpense` and `onClose` from `ExpenseMain`.
- Manages local form state for new expense.
- On submit, calls `onAddExpense(newExpense)` to update the main list in `ExpenseMain`.

### EditExpense.jsx
The EditExpense component provides a modal interface to modify an existing expense.

📥 Props Received:
	•	expense: The specific expense object selected for editing, passed from ExpenseMain.
	•	onSave(updatedExpense): Callback function triggered after editing; sends the updated expense to ExpenseMain.
	•	onClose(): Closes the modal without saving any changes.

⚙️ Functionality:
	•	On mount, it loads the expense prop into local state for form fields (e.g., title, amount, category, and date).
	•	Uses controlled form inputs to allow smooth editing and validation.
	•	On form submission:
	•	Constructs an updatedExpense object with the modified values.
	•	Calls onSave(updatedExpense) to update the expense list in ExpenseMain.
	•	Closes the modal via onClose() after successful save.
	•	On cancel, simply calls onClose() without making any changes.

✅ Highlights:
	•	Ensures that no edits affect the main state until user confirms.
	•	Reusable modal UI component, consistent with AddExpense.
	•	Easy to extend or modify fields for future needs.

### AddBudget.jsx
- Receives `onAddBudget` and `onClose` from `ExpenseMain`.
- Manages local form state for budget amount.
- On submit, calls `onAddBudget(amount)` to update the budget in `ExpenseMain`.

### List.jsx
- Receives `expenses` (filtered by category), `onEdit`, and `onDelete` from `ExpenseMain`.
- Displays all expenses in a table/list.
- Edit/Delete buttons call the respective handlers in `ExpenseMain`.

### CategoryCards.jsx
- Receives `category`, `isSelected`, and `onClick` from `ExpenseMain`.
- Renders a button for each category.
- Clicking a category updates the filter in `ExpenseMain`.

### BudgetCards.jsx
- Receives `title` and `budget` as props.
- Displays summary cards for total, spent, and remaining budget.

### ButtonCards.jsx
- Receives `operation` and `onClick` as props.
- Renders the "Add Budget" and "Add Expense" buttons.

### Chart.jsx
- Placeholder for future chart integration (e.g., Chart.js, Recharts).
- Ready to receive data from `ExpenseMain`.

### Header.jsx
- Simple header for the app.

---

## 🧩 How State & Props Flow

- **All main state is in `ExpenseMain.jsx`.**
- **All updates (add, edit, delete, filter) are handled in `ExpenseMain.jsx` and passed down as props.**
- **Child components are stateless or manage only local form state, and always notify the parent of changes.**

---

## 🏁 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)

### Installation
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Expense-Tracker/Expense-Tracker/expense-tracker
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the App
Start the development server:
```bash
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) (or another port if 5173 is in use).

### Building for Production
To build the app for production:
```bash
npm run build
```

### Linting
To check for lint errors:
```bash
npm run lint
```

---

## ✨ Customization

- To add new features, create new components in `src/components/` or `src/utill-Components/`.
- All CSS is organized in `src/css/` for easy maintenance.
- To add new categories, update the `categoryNames` and `categoryIcons` arrays in `ExpenseMain.jsx`.

