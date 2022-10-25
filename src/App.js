import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Header from './components/Header';
import Courses from './components/Courses';
import OtherCourses from './components/OtherCourses';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Searchbar/>
        <Header/>
        <Courses/>
        <OtherCourses/>
        <Faq/>
        <Footer/>
    </div>
  );
}

export default App;
