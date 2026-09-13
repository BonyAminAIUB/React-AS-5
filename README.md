# 🚀 Dev Stack

Dev Stack is a modern and responsive website where developers can explore different technologies and create their own technology stack.

Users can view technology details, add technologies to their stack, remove selected technologies, and clear the full stack.

## 📌 Project Description

Dev Stack helps developers discover useful technologies for web development.

The website shows different technologies with their:

* Name
* Icon
* Description
* Category
* Difficulty level
* Rating
* Badge

Users can add their favorite technologies to the **Your Stack** section.

The website is designed with a clean layout, gradient colors, responsive design, and simple user interaction.

## 🛠️ Technologies Used

* React.js
* TypeScript
* Vite
* Tailwind CSS
* DaisyUI
* React-Toastify
* HTML5
* CSS3
* JSON

## ✨ Main Features

### 1. Explore Technologies

Users can explore different technologies from several categories.

Examples:

* Frontend
* Backend
* Database
* Language
* Styling
* DevOps
* Tools

Each technology card shows its icon, name, description, category, difficulty, rating, and badge.

### 2. Build Your Own Stack

Users can add their favorite technologies to the **Your Stack** section.

The same technology cannot be added twice.

After adding a technology, the button becomes disabled and shows:

```text
✓ Added to Stack
```

Users can also remove one technology or remove all selected technologies.

### 3. Responsive and User-Friendly Design

The website works properly on:

* Mobile devices
* Tablet devices
* Desktop devices

The project includes:

* Sticky navbar
* Mobile hamburger menu
* Hero banner
* Gradient buttons
* Technology cards
* Your Stack sidebar
* Toast notifications
* Loading state
* Footer section

## 🔔 Toast Notifications

React-Toastify is used to show messages when users:

* Add a technology
* Try to add a duplicate technology
* Remove a technology
* Remove all technologies

## 📂 Project Structure

```text
src
├── assets
│   ├── banner-stack.png
│   ├── hamburger.png
│   ├── logo-text.png
│   ├── YourStack-with.png
│   └── YourStack-without.png
│
├── components
│   ├── Banner.tsx
│   ├── Nav.tsx
│   ├── Technologies.tsx
│   ├── TechnologyCard.tsx
│   ├── YourStack.tsx
│   └── Footer.tsx
│
├── types
│   └── technology.ts
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx

public
└── data.json
```

## ⚙️ How to Run the Project

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### Step 2: Go to the Project Folder

```bash
cd YOUR_PROJECT_FOLDER
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Development Server

```bash
npm run dev
```

### Step 5: Build the Project

```bash
npm run build
```

## 📚 React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

React uses JSX because it makes the UI code simple, readable, and easy to understand.

---

### 2. What is the difference between props and state?

Props are used to send data from a parent component to a child component.

State is used to store data inside a component. State can change over time and update the UI.

For example, `technology` is passed as a prop to the `TechnologyCard` component.

---

### 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage state in a React component.

In this project, I used `useState` in:

* `App.tsx` to store the technology data promise.
* `Technologies.tsx` to store selected technologies.
* `Nav.tsx` to control the mobile menu.

Example:

```tsx
const [selectedTechnologies, setSelectedTechnologies] =
  useState<ITechnology[]>([]);
```

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects in React.

For example, it can be used for:

* Fetching data
* Updating the page title
* Working with external systems

In this project, I did not need `useEffect` for loading the JSON data.

Instead, I used a fetch promise in `App.tsx` and handled the loading state with `Suspense`.

The JSON data is loaded from:

```text
public/data.json
```

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list.

It helps React understand which item was added, removed, or updated.

In this project, I used the technology ID as the key:

```tsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

In this project, the `YourStack` component shows an empty message when no technology is selected.

```tsx
{selectedTechnologies.length === 0 ? (
  <p>No technologies added yet.</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
```

If the stack is empty, the empty message is shown.

If technologies are selected, the selected technology list is shown.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component sends data to a child component through props.

A child component can send information back to the parent by calling a function received through props.

Example:

```tsx
<TechnologyCard
  technology={technology}
  isSelected={isSelected}
  onAddToStack={handleAddToStack}
/>
```

Here:

* `technology` sends technology data.
* `isSelected` sends the selected status.
* `onAddToStack` sends a function to the child.

When the user clicks the button, the child calls the function:

```tsx
onClick={() => onAddToStack(technology)}
```

Then the parent component updates the selected technology list.

## 👨‍💻 Author

**Md. Bony Amin**

## 📄 License

This project was created for educational and project submission purposes.
