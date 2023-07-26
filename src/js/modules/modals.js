
const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOwerlay = true){
        const   trigger = document.querySelectorAll(triggerSelector),
                modal = document.querySelector(modalSelector),
                close = document.querySelector(closeSelector),
                windows = document.querySelectorAll('[data-modal]'),
                scroll = calcScroll();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden"
                document.body.style.marginRight = `${scroll}px`
                // document.body.classList.add('modal-open')
            })
        });

        windows.forEach(item => {
            item.style.display = 'none';
        })

        close.addEventListener('click',() => {
            windows.forEach(item => {
                item.style.display = 'none';
            })

            modal.style.display = "none";
            document.body.style.overflow = ""
            document.body.style.marginRight = `0px`
            // document.body.classList.remove('modal-open')     
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOwerlay) {
                
                // document.body.classList.remove('modal-open')
                windows.forEach(item => {
                    item.style.display = 'none';
                })

                modal.style.display = "none";
                document.body.style.overflow = ""
                document.body.style.marginRight = `0px`
            }              
        })
    }

    function showModalByTime(slector, time){
        setTimeout(function() {
            document.querySelector(slector).style.display = 'block';
            document.body.style.overflow = "hidden"
        }, time)
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove()
        return scrollWidth;
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup_close');
    
    //showModalByTime('.popup', 60000);

    
    }

export default modals;