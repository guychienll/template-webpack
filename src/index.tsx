import * as React from 'react';
import ReactDOM from 'react-dom/client';
import styles from '@/base.scss';

const App: React.FC = () => {
  return <div className={styles.wrapper}></div>;
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
