import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to This Website</h1>
        <p style={styles.subtitle}>
          This is a simple React website built using plain JavaScript.
        </p>
      </header>

      <main style={styles.main}>
        <section style={styles.section}>
          <h2>About</h2>
          <p>
            This page is created using React and Vite. It’s a lightweight,
            fast, and modern setup for building web apps.
          </p>
        </section>

        <section style={styles.section}>
          <h2>Get Started</h2>
          <p>
            Edit <code>src/App.jsx</code> and save to see your changes instantly!
          </p>
        </section>
      </main>

      <footer style={styles.footer}>
        <small>© {new Date().getFullYear()} My React Website</small>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    color: "#333",
    margin: 0,
  },
  header: {
    padding: "2rem 1rem",
    backgroundColor: "#0078d7",
    color: "white",
  },
  title: {
    margin: "0 0 0.5rem",
  },
  subtitle: {
    margin: 0,
    fontSize: "1.1rem",
  },
  main: {
    padding: "2rem 1rem",
  },
  section: {
    marginBottom: "2rem",
  },
  footer: {
    padding: "1rem",
    backgroundColor: "#eee",
  },
};

export default App;
