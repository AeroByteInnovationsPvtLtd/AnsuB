import '../sass/style.scss';
import ajaxHeart from './modules/heart';
import { $, $$ } from './modules/bling';
import typeAhead from './modules/typeAhead'

typeAhead( $('.search'));

const heartForms = $$('form.heart');
heartForms.on('submit', ajaxHeart);
