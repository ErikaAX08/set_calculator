import { Footer, Header, Keyboard, Input, Results } from "@components/layout";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      
      <div className={styles.contentContainer}>
        <div>
          <Results />
          <Input />              
        </div>
      </div>
            
      <div className={styles.optionsContainer}>
        <Header />
        <Keyboard />
        <Footer />
      </div>  
      
    </main>
  )
}
