import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Detail, Vowel } from './screens';

const supportsHistory = "pushState" in window.history;

const MainLayout = (props) => {

  return (
    <div >
   
    <BrowserRouter forceRefresh={!supportsHistory} keyLength={12}>
      {/* <Switch> */}
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/remove-vowel" component={Vowel} />
        </div>
    {/* </Switch> */}
    </BrowserRouter>
    
    </div>
  )
}

export default MainLayout;
