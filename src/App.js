import React, { Component } from 'react';
import './App.css';
import NavigationBar from './views/navigation_bar/NavigationBarView.jsx';
import Home from './views/home/Home.jsx';
import Services from './views/services/Services.jsx';
import ImageGrid from './views/image_grid/ImageGrid.jsx';
import Ideology from './views/ideology/Ideology';
import ImageFilter from './views/image_filter/ImageFilter';
import Clients from './views/clients/Clients';
import Experiments from './views/experiments/Experiments'
import Footer from './views/footer/Footer'
class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Home />
        <Services />
        <ImageGrid />
        <Ideology/>
        <ImageFilter/>
        <Clients />
        <Experiments />
        <Footer/>
      </div>
    );
  }
}

export default App;
