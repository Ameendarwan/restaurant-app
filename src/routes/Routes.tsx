import { Routes as DOMRoutes, Route } from 'react-router-dom';

import ContactUs from '@app/pages/ContactUs';
import Homepage from '@app/pages/Homepage';
import NotFound from '@app/pages/NotFound';
import { paths } from './Routes.utils';

const Routes = () => (
  <DOMRoutes>
    <Route path={paths.homepage} element={<Homepage />} />
    <Route path={paths.contactUs} element={<ContactUs />} />
    <Route path="*" element={<NotFound />} />
  </DOMRoutes>
);

export default Routes;
