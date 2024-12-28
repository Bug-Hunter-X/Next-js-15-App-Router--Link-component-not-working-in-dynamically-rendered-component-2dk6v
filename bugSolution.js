```javascript
import Link from 'next/link';
import {usePathname} from 'next/navigation'

function MyComponent() {
  const pathname = usePathname();
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
       <p>Current Pathname: {pathname}</p>
    </div>
  );
}

export default MyComponent;
```