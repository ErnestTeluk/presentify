---
id: 'presentify-usage-example'
title: Presentify usage example
---

### Create the presentation project using CLI

```bash
npx create-presentify
```

### Start by editing a `.mdx` file.

````mdx
import { PresentifyProvider } from 'presentify';

<PresentifyProvider>
# Introducing Hooks

### What are they? And why do we need them?

---

# UseState

```jsx
function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      counter: {count}
      <button onClick={() => setCount(initialCount)}>reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
```

</PresentifyProvider>
````

### Run presentation Server

```bash
npm run dev
```

Now on browser in `http://localhost:5173/` you can see the presentation. You can got to the previous/next slide using the arrow keys.

### Build up your presentation

```bash
npm run build
```

### deploy your presentation like normal react app.
