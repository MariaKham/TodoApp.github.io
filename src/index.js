import { createRoot } from 'react-dom/client';

import App from './components/app/App'


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

// еще один вариант синтаксиса
// const root = createRoot(
//   document.getElementById('root')
// );
// const element = <h1>Hello, world</h1>;
// root.render(element);

root.render(<App />);