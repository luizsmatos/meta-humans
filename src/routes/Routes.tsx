import { Routes as Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import DetailsMetaHuman from '../pages/DetailsMetaHuman';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/metahumans/:id" element={<DetailsMetaHuman />} />
    </Switch>
  );
};

export default Routes;
