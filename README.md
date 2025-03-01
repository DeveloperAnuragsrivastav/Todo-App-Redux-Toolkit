
```markdown
# Todo App with Redux Toolkit

A simple **Todo Application** built using **React** and **Redux Toolkit** for state management. This app allows users to add and remove todo items, and the state is managed using Redux for centralized state handling.

## Features
- Add new todo items.
- Remove todo items.
- Simple UI with Tailwind CSS for styling.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Redux Toolkit**: A set of tools for efficient Redux state management.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Redux**: Official React bindings for Redux.

## Project Setup

### Prerequisites
Make sure you have **Node.js** and **npm** installed on your machine.

- You can download and install Node.js from [here](https://nodejs.org/).
- Verify your installation by running the following commands:

```bash
node -v
npm -v
```

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/todo-app-redux.git
```

2. Navigate to the project directory:

```bash
cd todo-app-redux
```

3. Install the required dependencies:

```bash
npm install
```

### Run the Application

Once the dependencies are installed, you can run the app locally:

```bash
npm start
```

This will start the development server, and you can open the app in your browser by visiting [http://localhost:3000](http://localhost:3000).

---

## How it Works

### Redux Store

The state of the application is managed using **Redux Toolkit**. The state includes a list of todos, and actions are dispatched to add or remove todos.

### Actions and Reducers

- **addTodo**: Adds a new todo to the list. It uses the `nanoid` utility to generate a unique ID for each todo item.
- **removeTodo**: Removes a todo from the list based on the provided ID.

### Components

1. **AddTodo**:
   - This component allows users to add a new todo. It consists of an input field and a button to submit the new todo.
   - When the form is submitted, it dispatches the `addTodo` action with the input value as the payload.

2. **Todos**:
   - Displays the list of todos.
   - Each todo has a "Remove" button, which when clicked, dispatches the `removeTodo` action to delete the selected todo.

3. **App**:
   - The main component that includes both `AddTodo` and `Todos` components.



### Explanation of Key Files:

1. **`store.js`**: 
   - Configures the Redux store and imports the `todoReducer` from the todo slice.

2. **`todoSlice.js`**:
   - Defines the initial state and the reducers for adding and removing todos.

3. **`AddTodo.js`**:
   - A functional component with a form to add new todos.
   - Utilizes Redux's `useDispatch` to dispatch the `addTodo` action.

4. **`Todos.js`**:
   - Displays the list of todos and allows the user to remove them.
   - Uses `useSelector` to read the todos from the Redux store and `useDispatch` to remove todos.

5. **`App.js`**:
   - The main React component that renders both the `AddTodo` and `Todos` components.

---

## Usage

1. **Add Todo**:
   - Enter a todo item in the input box and click **"Add Todo"**. The new todo will be added to the list.
   
2. **Remove Todo**:
   - Click the **"Remove"** button next to any todo to delete it.

---

## Example

Here's an live preview of how the app looks:

https://todo-app-redux-toolkit-fawn.vercel.app/

---

## Contributing

Feel free to fork this repository, submit issues, or send pull requests if you'd like to contribute!

1. Fork the repo.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

### Additional Notes

- If you're unfamiliar with **Redux Toolkit**, it's a simpler and more powerful way of managing state in a Redux store. The `createSlice` method reduces the boilerplate and makes the process more streamlined.
- The UI is built using **Tailwind CSS**, which is great for rapid prototyping and building responsive designs.
```

---


