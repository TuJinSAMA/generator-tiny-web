<% if (libType === 'react') { -%>
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App';
  import './style/index.styl';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
<% } else { -%>
  import { createApp } from 'vue'
  import App from './App';
  import './style/index.styl';

  const app = createApp(App)
  app.mount('#root')
<% } -%>