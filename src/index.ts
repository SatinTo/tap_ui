import registerRootComponent from 'expo/build/launch/registerRootComponent';
import App from '../App';

// Import your components to export
export { MyButton as Button } from './components/Button/Button';
// Add more component exports as needed

registerRootComponent(App);
