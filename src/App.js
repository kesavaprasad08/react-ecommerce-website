import React,{ useState } from 'react';
import './App.css';

import EStoreHeader from './components/layout/EStoreHeader';
import EStoreSummary from './components/layout/EStoreSummary';
import MerchList from './components/items/MerchList';
// import MusicList from './components/items/MusicList';
// import { Button, Container } from 'react-bootstrap';
import EStoreFooter from './components/layout/EStoreFooter';
import Cart from './components/Cart/Cart'

const App = () => {
  const [cartShown, setCartIsShown] = useState(true);

const ShowCartHandler = () => {
  setCartIsShown(true);
};

const HideCartHandler = () => {
  setCartIsShown(false);
};
  return (
<React.Fragment>
{cartShown && <Cart onClose={HideCartHandler}/>}
<EStoreHeader onOpen={ShowCartHandler} />
<EStoreSummary />
<MerchList />

<EStoreFooter />

</React.Fragment>
    
  );
}

export default App;
