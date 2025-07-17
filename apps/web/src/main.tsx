import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [cities, setCities] = React.useState<{id: number; name: string;}[]>([]);
  React.useEffect(() => {
    fetch('/api/cities').then(res => res.json()).then(setCities);
  }, []);

  return (
    <div>
      <h1>Foodie Planner</h1>
      <ul>
        {cities.map(c => <li key={c.id}>{c.name}</li>)}
      </ul>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
