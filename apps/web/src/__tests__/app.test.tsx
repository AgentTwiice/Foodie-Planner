import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';

function App() {
  return <h1>Foodie Planner</h1>;
}

describe('App', () => {
  it('renders title', () => {
    const { getByText } = render(<App />);
    expect(getByText('Foodie Planner')).toBeTruthy();
  });
});
