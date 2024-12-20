import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import './index.css'; 
import ContactUs from './views/ContactUs';
import AboutUs from './views/AboutUs';


function App() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route path={'/'} element={<Home />} />
        <Route path={'/available-cats'} element={<AvailableCats />} />
        <Route path={'/contact-us'} element={<ContactUs></ContactUs>}></Route>
        <Route path={'/.about-us'} element={<AboutUs></AboutUs>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
