import '@/base.scss';
import * as React from 'react';
import ReactDOM from 'react-dom/client';

const App: React.FC = () => {
  return (
    <section>
      <article>
        <h1>Morning Times</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </article>
      <article>
        <h1>Morning Times</h1>
        <h2>Delivering you news every morning</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </article>
    </section>
  );
};

const root = () => {
  let root = document.getElementById('root');

  if (root) {
    return root;
  } else {
    root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);
    return root;
  }
};
ReactDOM.createRoot(root()).render(<App />);
