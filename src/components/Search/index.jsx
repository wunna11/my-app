import { useState } from 'react';
import { foods } from './data.js';

function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
  );
}

export default function FilterSearch() {

  const [query, setQuery] = useState('');

  const results = filterItems(foods, query);

  console.log('result', results)

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div>
      <SearchBar
        value={query}
        onChange={handleChange}
      />
      <hr />
      <List items={results} />
    </div>
  );
}

function SearchBar({ query, onChange}) {
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
