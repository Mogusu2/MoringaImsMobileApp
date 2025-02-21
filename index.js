import { registerRootComponent } from 'expo';
import { NavProvider } from './app/Contexts/navContext';
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(() => (
    <NavProvider>
      <App />
    </NavProvider>
  ));