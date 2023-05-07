import './App.css';
import Footer from './Component/Footer/Footer';
import Join from './Component/Join/Join';
import Plans from './Component/Plans/Plans';
import Program from './Component/Programs/Program';
import Reason from './Component/Reasons/Reason';
import Testimonials from './Component/Testimonals/Testimonials';
import Top from './Component/Top/Top';

function App() {
  return (
    <div className="App">
          <Top/>
          <Program/>
          <Reason/>
          <Plans/>
          <Testimonials/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
