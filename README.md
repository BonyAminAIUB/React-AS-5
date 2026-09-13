# 🧱 Dev Stack Builder

A modern and responsive website where users can explore different web development technologies and build their own technology stack.

Users can view technology details, compare different tools, and add their favorite technologies to the **Your Stack** section.

## 🌐 Live Website

[Visit Dev Stack Builder](https://react-as-5.netlify.app/)

## 📂 GitHub Repository

[View GitHub Repository](https://github.com/BonyAminAIUB/React-AS-5)

---

## ✨ Project Description

**Dev Stack Builder** is a React and TypeScript based website for developers.

This website provides a list of useful technologies such as React, JavaScript, TypeScript, Tailwind CSS, Next.js, and many more.

Users can select technologies and create their own personalized development stack. The website has a clean design, responsive layout, interactive buttons, and toast notifications.

---

## 🛠️ Technologies Used

* React.js
* TypeScript
* Vite
* Tailwind CSS
* DaisyUI
* React-Toastify
* JSON
* HTML5
* CSS3
* JavaScript ES6+

---

## 🚀 Main Features

### 1. Explore Technologies

Users can explore different technologies with their:

* Name
* Icon
* Description
* Category
* Difficulty level
* Rating
* Badge

### 2. Build Your Own Stack

Users can add their favorite technologies to the **Your Stack** section.

They can also:

* See selected technologies
* Remove a single technology
* Remove all technologies
* See the selected technology count
* Get a warning when adding the same technology twice

### 3. Responsive and User-Friendly Design

The website is responsive for:

* Mobile devices
* Tablets
* Desktop screens

It also includes:

* Responsive navbar
* Hero banner
* Technology cards
* Footer section
* Loading state
* Toast notifications
* Gradient brand theme

---

## 📁 Project Structure

```text
src
├── assets
├── components
│   ├── Banner.tsx
│   ├── Footer.tsx
│   ├── Nav.tsx
│   ├── Technologies.tsx
│   ├── TechnologyCard.tsx
│   ├── YourStack.tsx
│   └── ...
├── types
│   └── technology.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx

public
└── data.json
```

---

## 📦 Installation and Run Locally

### Step 1: Clone the Repository

```bash
git clone https://github.com/BonyAminAIUB/React-AS-5.git
```

### Step 2: Go to the Project Folder

```bash
cd React-AS-5
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Run the Project

```bash
npm run dev
```

Now open the local URL in your browser.

---

# ❓ React Questions and Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax used in React to write HTML-like code inside JavaScript or TypeScript.

It makes the UI code easier to read and write.

Example:

```tsx
<h1>Hello React</h1>
```

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is used to store and manage data inside a component.

Props are read-only, but state can be updated.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook is used to create and manage state in a React component.

In this project, it is used in the `Technologies.tsx` component to store the selected technologies.

```tsx
const [selectedTechnologies, setSelectedTechnologies] =
  useState<ITechnology[]>([]);
```

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs side effects after a component renders.

It can be used to load data from a JSON file.

In this project, JSON data is loaded so that the technology list does not need to be hardcoded inside the component.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to identify each item in a list.

It helps React understand which item was added, removed, or updated.

Example:

```tsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

In this project, an empty message is shown when no technology is selected.

Example:

```tsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <p>Your selected technologies are shown here.</p>
)}
```

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through props.

A child can send data back to the parent by calling a function passed through props.

Example:

```tsx
<TechnologyCard
  technology={technology}
  onAddToStack={handleAddToStack}
/>
```

Here, the parent sends the technology data and function to the child.

The child calls `onAddToStack()` when the user clicks the button.

---

## 👨‍💻 Author

**Bony Amin**

* GitHub: [BonyAminAIUB](https://github.com/BonyAminAIUB)
* Live Website: [Dev Stack Builder](https://react-as-5.netlify.app/)

---

## 📄 License

This project was created for educational purposes.
