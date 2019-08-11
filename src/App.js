import React from 'react';
import Homepage from './components/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/style.css'
import { BrowserRouter , Route} from "react-router-dom";
import TentangKami from './components/tentang/TentangKami';
import LayananHarga from './components/layanan/LayananHarga';

function App() {
  return (
  
  <div style={{height: '100%'}}>
    <BrowserRouter>
    <Route exact path='/' component={Homepage} />
    <Route exact path= '/tentang' component={TentangKami} />
    <Route  exact path='/layanan' component={LayananHarga} />
    </BrowserRouter>
  </div>
  
  );
}

export default App;
