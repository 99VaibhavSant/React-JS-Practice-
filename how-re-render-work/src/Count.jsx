/*
feat(count): add Count component + examples demonstrating re-render behaviors

- Create Count component with useState and console.log to observe re-renders.
- Add button that sets a fixed value (setCount(25)).
- Include commented examples:
  - Functional update (setCount(prev => prev + 1))
  - No-op update (setCount(count))
  - Multiple updates to demonstrate batching
- Purpose: teach how React triggers and optimizes re-renders.
*/

import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  // This log helps you see when the component re-renders.
  console.log("Component is Re-render", { count });
  return (
    <div style={{ fontFamily: "sans-serif", padding: 16 }}>
      <h1>{count}</h1>

      {/*
        Active example: direct state update
        - Clicking this sets count to a fixed value (25).
        - React will re-render once because the state changes from the previous value.
      */}
      <button onClick={() => setCount(25)}>Set to 25 (direct update)</button>

      {/*
        Functional update (recommended when new state depends on previous state)
        - Uncomment to use. This is safe with batching and async updates.
      */}
      {false && (
        <button
          onClick={() =>
            setCount((prev) => {
              return prev + 1;
            })
          }
        >
          Increment (functional update)
        </button>
      )}

      {/*
        No-op update example: shows React avoids unnecessary re-renders
        - If you call setCount(count) with the same value, React won't re-render.
        - Uncomment to test.
      */}
      {false && (
        <button
          onClick={() => {
            // This will NOT cause a re-render if `count` is already the same value
            setCount(count);
          }}
        >
          No-op update (set same value)
        </button>
      )}

      {/*
        Batching example: multiple updates in one event handler
        - Uncomment to test. In React's automatic batching, multiple state updates
          inside the same event handler are combined into a single render.
        - Note: If you use direct setCount(newValue) (non-functional) multiple times,
          the last one wins. Use functional updates to increment based on previous state.
      */}
      {false && (
        <button
          onClick={() => {
            // Three functional updates will result in a single re-render and +3 to count
            setCount((p) => p + 1);
            setCount((p) => p + 1);
            setCount((p) => p + 1);
          }}
        >
          +3 (batched functional updates)
        </button>
      )}

      {/*
        Quick note for learners:
        - React re-renders when props or state change. Calling setState with a NEW value triggers a re-render.
        - If the state value is strictly equal to the previous value, React skips rendering.
        - Functional updates are preferred when new state depends on previous state, and they play nicely with batching.
      */}
    </div>
  );
}
