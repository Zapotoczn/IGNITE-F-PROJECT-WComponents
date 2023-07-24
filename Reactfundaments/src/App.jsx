import '../src/global.css';

import { Sidebar } from '../src/Components/SideBar/Sidebar';
import { Header } from '../src/Components/Header/header';
import { Post } from '../src/Components/Post/Post';
import styles from '../src/App.module.css';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar/>
        <main>
          <Post/>
          <Post/>
        </main>
      </div>
    </div>
  )
}

export default App
