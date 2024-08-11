/* App.css */

/* Global Styles */
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f4f7f6;
  color: #333;
}

.App {
  text-align: center;
}

/* Header Styles */
header {
  background-color: #1c3b57;
  color: white;
  padding: 20px 0;
  margin-bottom: 20px;
}

header h1 {
  font-size: 2.5rem;
  margin: 0;
}

header nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
  transition: color 0.3s ease;
}

header nav a:hover {
  color: #007acc;
}

/* Section Styles */
section {
  margin: 40px auto;
  padding: 20px;
  max-width: 1000px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

section h2 {
  color: #007acc;
  font-size: 2rem;
  margin-bottom: 20px;
}

/* Button Styles */
button {
  background-color: #007acc;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #005f8b;
}

/* Footer Styles */
footer {
  background-color: #1c3b57;
  color: white;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
}

footer p {
  margin: 0;
}

/* Responsive Design */
@media(max-width: 768px) {
  header h1 {
    font-size: 2rem;
  }

  section {
    margin: 20px auto;
    padding: 15px;
  }
}
