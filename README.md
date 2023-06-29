# Practical React Exercise

## 1st thing to do after cloning to your computer

## NPM (node package manager) method

Run `npm -v` to ensure npm (node package manager) is installed.

Run `npm install` to install all packages.

## Yarn method (alternative to using NPM)

Run `yarn -v` to ensure yarn is installed (alternative to npm).

Run `yarn` to install all packages.

## Available Scripts

In the project directory, you can run:

### `yarn dev` OR `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

**There are some other scripts but, to be honest, they don't matter at this point.** (this will be covered in the package manager workshop)

---

## Exercise

Create a component that listens to the window's resize event and displays the current width and height of the window.

### Hints

1.  You can use the `useState` hook to store the width and height of the window.

1.  You can use the `window.innerWidth` and `window.innerHeight` to get the width and height of the current window.

1.  You can use the `useEffect` hook to listen to the window's resize event.

1.  You can use the `window.addEventListener` to listen to the window's resize event.

1.  You can use the `window.removeEventListener` to remove the listener to the window's resize event.

1.  We remove the event listener whenever the effect stops to prevent memory leaks and improve performance.

---

## Solution

<details>

1. First, open the `App.tsx` component file and import the `useState` and `useEffect` hooks.

1. Inside the component, create a new state variable called `windowSize` using the `useState` hook. The initial value of this variable should be an object containing the current `width` and `height` of the window.

1. Next, create a new function called `handleResize`. This function should update the `windowSize` state variable with the current width and height of the window.

1. Use the `useEffect` hook to add an event listener for the `resize` event. When this event is triggered, call the `handleResize` function to update the `windowSize` state variable.

1. Finally, render the current width and height of the window in your component.

> Note that we pass an empty dependency array `[]` as the second argument to `useEffect`. This ensures that the effect only runs when the component is first created and not on every re-render.

```ts
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <h1>
            {windowSize.width} x {windowSize.height}
        </h1>
    );
};

export default App;
```

</details>
