import React from 'react';
import styles from './styles.css';

const qs = (key) => {
  key = key.replace(/[*+?^$.[\]{}()|\\/]/g, '\\$&');
  const match = window.location.search.match(new RegExp(`[?&]${key}=([^&]+)(&|$)`));
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};

const App = () => (
  <div className={styles.block}>
    <div className={styles.block__header}>
      Get Discord Token
    </div>
    <div className={styles.block__body}>
      {(qs('token') &&
        <div className={styles.success}>
          <div className={styles.success__header}>
            Your token
          </div>
          <div className={styles.success__data}>
            {qs('token')}
          </div>
          <div className={styles.success__header}>
            Scope
          </div>
          <div className={styles.success__data}>
            identify
          </div>
        </div>
      )
      ||
        <a
          href="/api/discord/login"
          className={styles.login_button}
        >
          Login through Discord
        </a>
      }
    </div>
  </div>
);

export default App;