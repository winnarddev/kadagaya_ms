/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//require('./components/Example');
/*
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard';
//import Example from './components/Example';


if (document.getElementById('main-app')) {
    ReactDOM.render(<Dashboard />, document.getElementById('main-app'));
}*/

require('./components/App');

//CSS for ANT UI
require('antd/dist/antd.css');