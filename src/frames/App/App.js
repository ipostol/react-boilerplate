import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
// import cookie from 'js-cookie';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import ModalService from 'modules/modal/components/ModalService';
import NotifyService from 'modules/notify/components/NotifyService';
import styles from './App.scss';

const App = ({ children, routes }) => {

  const { withoutFrame } = routes[routes.length - 1];

  return (
    <section className={styles.container}>
      <div className={styles.loader}>
        <LoadingBar style={{ backgroundColor: '#1BCFC9' }} />
      </div>
      {
        withoutFrame ? children : [
          <Header key="header" />,
          <main className={styles.main} key="main">
            {children}
          </main>,
        ]
      }
      <NotifyService />
      <ModalService />
    </section>
  );

};

App.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.array,
};

export default App;
