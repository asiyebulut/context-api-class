import NavBar from './components/NavBar'
import './App.css';
import BookList from './components/BookList';
import ThemeContextProvider from './components/Contexts/ThemeContext';
import ToggleTheme from './components/ToggleTheme'
import AuthContextProvider from './components/Contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar/>
          <BookList/>
          <ToggleTheme/>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
