import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App/App';
import './scss/styles.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
