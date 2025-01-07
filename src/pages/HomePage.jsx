import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <div className={`${styles["home-page"]}`}>
          <header className="welcome-banner">
            <h1>Welcome to HR Management App</h1>
          </header>

          <section className={styles["dashboard-section"]}>
            <div className={styles["dashboard-card"]}>
              <h2>Total Employees</h2>
              <p>17</p>
            </div>
            <div className={styles["dashboard-card"]}>
              <h2>Departments</h2>
              <p>5</p>
            </div>
            <div className={styles["dashboard-card"]}>
              <h2>Pending Reviews</h2>
              <p>3</p>
            </div>
            <div className={styles["dashboard-card"]}>
              <h2>New Hires This Month</h2>
              <p>2</p>
            </div>
          </section>

          <div className={styles["two-columns"]}>
            <section className={styles["announcements-section"]}>
              <h2>Announcements</h2>
              <ul className={styles["announcements-list"]}>
                <li>🎉 Join us for the annual retreat on Sept 20th!</li>
                <li>📢 Submit your performance reviews by next Friday.</li>
                <li>🌟 Welcome new hire: Alex Johnson to the IT department!</li>
              </ul>
            </section>

            <section className={styles["tasks-section"]}>
              <h2>Pending HR Tasks</h2>
              <ul className={styles["tasks-list"]}>
                <li>✔️ Complete onboarding for new hires</li>
                <li>✔️ Organize training session on company policies</li>
                <li>✔️ Approve leave requests</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
