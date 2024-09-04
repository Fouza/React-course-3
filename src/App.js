import logo from './logo.svg';
import Input from './components/Input/Input';
import BigComp from './components/BigComp/BigComp';
import Form, { TestComp } from './components/Form/Form';
import DataComp from './components/DataComp/DataComp';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Layout from './Layout/Layout';
import LayoutAdmin from './Admin/LayoutAdmin';
import ProductsPage from './Admin/ProductsPage';
import Employees from './Admin/Employees';
import './scss/shared.scss'
//sass is a css pre-processor

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Go To Layout component => It has to render Outlet from 'react-router-dom' */}

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path='/admin' element={<LayoutAdmin />} >
          <Route index element={<ProductsPage />} />
          <Route path="employees" element={<Employees />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
