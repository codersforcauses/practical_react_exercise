import { ,  } from "react";
import "./App.css";

const App = () => {
    // Create a state for the window size

  
    // A function that updates the windowSize object with the current window width and height
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        // Add a resize event listener
      
        return () => {
            // Remove the resize event listener
          
        };
    }, []);

    return (
        <h1>
            {windowSize.width} x {windowSize.height}
        </h1>
    );
};

export default App;
