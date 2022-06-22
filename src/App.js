import styles from "./App.module.css";
import Header from "./components/Header";
import UserSettings from "./components/UserSettings";
function App() {
  return (
    <div className={styles.container}>
      <Header />
      <UserSettings />
    </div>
  );
}

export default App;
