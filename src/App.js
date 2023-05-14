import React from 'react';
import './App.css';

import EStoreHeader from './components/layout/EStoreHeader';
import EStoreSummary from './components/layout/EStoreSummary';
import MerchList from './components/items/MerchList';
import MusicList from './components/items/MusicList';
import { Button, Container } from 'react-bootstrap';
import EStoreFooter from './components/layout/EStoreFooter';

const App = () => {
  return (
<React.Fragment>
<EStoreHeader />
<EStoreSummary />
<MerchList />
<EStoreFooter />

</React.Fragment>
    
  );
}

export default App;
