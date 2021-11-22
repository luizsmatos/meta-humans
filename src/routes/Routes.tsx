import { Routes as Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Combat from '../pages/Combat';
import DetailsMetaHuman from '../pages/DetailsMetaHuman';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/combate" element={<Combat />} />
      <Route path="/metahumans/:id" element={<DetailsMetaHuman />} />
    </Switch>
  );
};

export default Routes;
