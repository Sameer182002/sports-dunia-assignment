import LiveScoreSection from "@/components/sections/livescore-section/live-score";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.mainWrapper}>
      <h1>Live Scores App</h1>
      <LiveScoreSection/>
    </main>
  );
}
