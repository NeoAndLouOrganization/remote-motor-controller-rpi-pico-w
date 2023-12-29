import ReactDOM from 'react-dom/client';

import App from './App';

import './App.scss';

// ReactDOM.hydrateRoot(
//   document.getElementById('root')!,
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
