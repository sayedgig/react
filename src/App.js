
import UpperBar from './components/UpperBar/index';
import Navbar from './components/Navbar/index';     
import Slider from './components/Slider2/index';  
import Overview from './components/Overview/index'; 
import Posts from './components/Posts/index';  
import Footer from './components/Footer/index';  
import Copyright from './components/Copyright/index'; 
import About from './components/About/index';


function App() {
  return (
   
      <>
        
        <UpperBar />
        <Navbar  />
        <Slider />
        <Overview />
        <Posts />
        
        <About />
        <Footer />
        <Copyright />
       
      </>
    
  );
}

export default App;
