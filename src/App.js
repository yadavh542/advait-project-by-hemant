import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Header from './components/Header';
import Courses from './components/Courses';
import OtherCourses from './components/OtherCourses';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { useGlobalContext } from './context';

function App() {

  const {bgGray} = useGlobalContext();

  return (
    <div className={`App ${bgGray && "bg-gray-300"}`}>
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
