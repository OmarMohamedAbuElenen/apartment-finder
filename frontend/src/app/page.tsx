import styles from "./page.module.css";
import ApartmentsList from "./components/apartments";

export default function Home() {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.pageContainer}>
        <ApartmentsList />
        </div>
    </div>
  );
}
