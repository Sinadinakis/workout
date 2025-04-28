import {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

const Modal = function Modal({children, onReset, open}) {
    const dialog = useRef();

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);

    return createPortal(
        <dialog className="result-modal sm:fixed sm:left-[40%] md:top-[30%] z-10" ref={dialog} onClose={onReset}>
            {children}
        </dialog>,
        document.getElementById('modal')
    );
}

export default Modal;
