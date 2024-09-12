
import { Container } from '@mui/material';
import './App.css';
import About from "./Components/About/About"
import Gallery from "./Components/Gallery/Gallery"
function App() {
  return (
    <>
    <Container sx={{width:"100%", height:"100%", position:"absolute" , top:"-18px", left:"0px", bottom:"200px"}}>
      
        <About />
        <Gallery />
    </Container>

    </>
  );
}

export default App;
