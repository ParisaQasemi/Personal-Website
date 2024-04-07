
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Portfolio } from './components/Portfolio/Portfolio';
import { About } from './components/About/About';
import { Skill } from './components/Skill/Skill';
import { Form } from './components/Form/Form';
import { Contact } from './components/Content/Contact';


function App() {
  return (
    <div className={styles.App}>
      {/* Navbar component navigation */}
      <Navbar />
      {/* Portfolio component First section */}
      <Portfolio />
      {/* About component about section  */}
      <About />
      {/* Skill component skills */ }
      <Skill />
      {/*  Form component user input */ }
      <Form />
      {/*  Contact component contact information */ }
      <Contact />
    </div>
  );
};

export default App;
