import styles from "./App.module.css";
import Header from "./components/Header";
import UserSettingsList from "./components/UserSettingsList";
function App() {
  return (
    <div className={styles.container}>
      <Header />
      <UserSettingsList />
    </div>
  );
}

export default App;
