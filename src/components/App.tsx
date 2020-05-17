import * as React from 'react';
import { Suspense, lazy } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Authorization = lazy(() => import('./Authorization'));
const Registration = lazy(() => import('./Registration'));



const GlobalStyle = createGlobalStyle`
  body {
    background: #283240;
  }
  #root {
    width: 100vw;
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  max-width: 1300px;
  max-height: 650px;
  margin: auto;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: #11171D;
  border-radius: 20px;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const antIcon = <LoadingOutlined style={{ fontSize: 44, color: '#1B52A4'}} spin />;


const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Suspense fallback={<Spin indicator={antIcon} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}} />}>
          <Switch>
            <Route exact path={['/', '/sign']} component={Authorization} />
            <Suspense fallback={<Spin indicator={antIcon} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}} />}>
              <Route exact path='/registration' component={Registration} />
            </Suspense>
          </Switch>
        </Suspense>
      </Wrapper>
    </>
  )
}

export default App;