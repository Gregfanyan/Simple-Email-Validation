import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import UserSettingsList from "./components/UserSettingsList";
function App() {
  React.useEffect(() => {
    var _mtm = window._mtm = window._mtm || [];
    _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src='https://cdn.matomo.cloud/pmeaufgabenetlifyapp.matomo.cloud/container_n7CjD3SJ.js'; s.parentNode.insertBefore(g,s);
   }, [])
  return (
    <div className={styles.container}>
      <Header />
      <UserSettingsList />
    </div>
  );
}

export default App;
