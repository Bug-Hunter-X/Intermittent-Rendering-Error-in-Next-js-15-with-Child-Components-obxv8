```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a paragraph.</p>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js

export default function MyComponent() {
  return (
    <div>
      <p>This is a child component.</p>
    </div>
  );
}
```