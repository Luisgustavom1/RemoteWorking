import Routes from './Routes/routes'
import { GlobalStyle } from './styles/GlobalStyle'
import { AppProvider } from './Context/TimeContext'
import { AuthProvider } from './Context/AuthContext';
function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <GlobalStyle/>
        <Routes/>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
