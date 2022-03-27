import React, {Component} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckoutSummary from './components/CheckoutSummary/CheckoutSummary';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import ContactForm from './containers/ContactForm/ContactForm';
// import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <Routes>
            <Route path='/' element = {<BurgerBuilder/>} />
            <Route path='/checkout' element = {<CheckoutSummary/>}/>
            <Route path='/checkout/contact-info' element= {<ContactForm />} />
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
