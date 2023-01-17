import { useState } from "react"
import { Nav } from "./components/nav/Nav"
import styles from "./App.module.css"
import { SideNav } from "./components/sideNav/SideNav"
import { contentData } from "./helpers/hValues"

function App() {
  const [activeItem, setActiveItem] = useState(2)

  const ActiveContentBlock = contentData[activeItem as keyof typeof contentData]

  return (
    <div className={styles.home}>
      <Nav />
      <SideNav activeItem={activeItem} setActiveItem={setActiveItem} />
      <main className={`${styles.content}`}>
        <ActiveContentBlock />
      </main>
    </div>
  )
}

export default App
