import "./slider"
import modals from "./modules/modals.js"
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import timer from "./modules/timer";
import changeModalState from "./modules/changeModalState";
import images from "./modules/images";

window.addEventListener('DOMContentLoaded', () => {
    "use strict"

    let modalState = {form: 0};
    let deadline = '2023-12-30';
    

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider','.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider','.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons','.balcon_icons_img','.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', deadline);
    images();
})