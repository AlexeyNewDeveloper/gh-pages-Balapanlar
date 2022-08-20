import './index.css';

import { headerElement } from './components/constants.js';
import { Header } from './components/header.js'



const header = new Header({header: headerElement});
header.enableHeader();