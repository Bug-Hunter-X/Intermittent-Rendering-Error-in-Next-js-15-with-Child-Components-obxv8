```javascript
// pages/index.js
import {useMemo} from 'react';
export default function Home() {
  const myComponent = useMemo(() => <MyComponent/>,[]);
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a paragraph.</p>
      {myComponent}
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