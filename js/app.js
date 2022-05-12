import {confirmation} from'./Desktop/admi-deleteTable.js'
import {plusminus} from './Desktop/plusminusbutton.js';
import {tabsdesplegados} from './Desktop/taps.js';
import {renderMenu} from './mobile/menu.js';
import{tabspaneladmi} from './Desktop/admi-tabs.js';
import{hamburger}  from './Desktop/admi-burger.js';
import{characterCounter} from './Desktop/admi-character-counter.js';
import{cartButtons} from "./Desktop/cart-buttons.js"
import{switchs} from "./Desktop/admi-swtich.js"
import{form} from "./Desktop/admi-form.js"
import{images} from "./Desktop/admi-image.js"
import{ckeditor} from "./Desktop/admi-ckeditor.js"
import{faqs} from "./Desktop/faqs.js"
import{selecttabs} from "./Desktop/select-tabs.js"

selecttabs();
faqs();
ckeditor();
images();
form();
switchs();
cartButtons();
characterCounter();
hamburger();
confirmation();
tabspaneladmi();
tabsdesplegados();
plusminus();
renderMenu();