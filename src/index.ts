import registerRootComponent from 'expo/build/launch/registerRootComponent';
import App from './App';
registerRootComponent(App);

export { MyButton as Button } from './components/Button/Button';
export { default as TextBetweenLine } from './components/Texts/TextBetweenLine';
