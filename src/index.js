import './index.css';
import imgLogoScroll from '../src/images/logo/logo-scroll.png';

import { enableChangeHeaderByScroll } from './components/header';
import {scroll} from './components/scroll.js'


enableChangeHeaderByScroll({newImage: imgLogoScroll});

scroll();