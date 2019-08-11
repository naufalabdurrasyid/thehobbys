import React from 'react';
import Homepage from './components/homepage';
import PostKomoditas from './components/peternakpage/PostKomoditas';
import KomoditasAnda from './components/peternakpage';

import DetailPage from './components/detail'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/style.css'
import { BrowserRouter , Route, Switch} from "react-router-dom";
import LoginPage from './components/loginpage'
import SignUp from './components/loginpage/register';
import KomoditasList from './components/komoditas/komoditas';
import PembayaranDetail from './components/detail/pembayaranDetail';
import InvestasiAnda from './components/investasipage/index'
import TentangKami from './components/tentang/tentangKami';
import Update from './components/loginpage/updateprofile';
import Stream from './components/komoditas/stream';
function App() {
  return (
  
  <div style={{height: '100%'}}>
    <BrowserRouter>
    <Route exact path='/' component={Homepage} />
    <Route exact path= '/tentang' component={TentangKami} />
    <Switch>
    <Route  exact path='/komoditas' component={KomoditasList} />
    <Route  exact path='/komoditas/data' component={KomoditasAnda} />
    <Route  exact path='/komoditas/pendaftaran' component={PostKomoditas} />
    <Route  exact path='/investasi' component={InvestasiAnda} />
    <Route  exact path='/investasi/:id' component={DetailPage} />
    <Route  path='/investasi/pembayaran/:id' component={PembayaranDetail} />
    <Route  exact path='/investasi' component={InvestasiAnda} />

    </Switch>
    <Route  path='/stream' component={Stream} />

    <Route  path='/login' component={LoginPage} />
    <Route  path='/register' component={SignUp} />
    <Route  path='/pengaturan' component={Update} />
    </BrowserRouter>
  </div>
  
  );
}

export default App;
