import { Routes as Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import DetailsMetaHuman from '../pages/DetailsMetaHuman';
import NotFound from '../components/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/metahumans/:id" element={<DetailsMetaHuman />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
};

export default Routes;
