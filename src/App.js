import AppRouter from "./app-router/AppRouter";
import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";
import BlogContextProvider from "./contexts/BlogContext";

function App() {
  return (
    <div>
      <BlogContextProvider>
        <AuthContextProvider>
          <AppRouter />
        </AuthContextProvider>
      </BlogContextProvider>
    </div>
  );
}

export default App;
