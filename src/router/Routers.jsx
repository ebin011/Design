import React, { Component } from 'react';
import '../App.css';

import Home from '../views/home/Home.jsx';
import Services from '../views/services/Services.jsx';
import ImageGrid from '../views/image_grid/ImageGrid.jsx';
import Ideology from '../views/ideology/Ideology';
import ImageFilter from '../views/image_filter/ImageFilter';
import Clients from '../views/clients/Clients';
import Experiments from '../views/experiments/Experiments'

class Routers extends Component {
  render() {
    return (
      <div>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/image-grid' component={ImageGrid} />
          <Route exact path='/ideology' component={Ideology} />
          <Route exact path='/image-filter' component={ImageFilter} />
          <Route exact path='/clients' component={Clients} />
          <Route exact path='/experiments' component={Experiments} />
      </Switch>
      </div>
    );
  }
}

export default Routers;
