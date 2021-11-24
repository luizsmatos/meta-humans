import { useState, useEffect, useRef } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  const [modalStatus, setModalStatus] = useState(isOpen);
  const modalRef = useRef(isOpen);

  useEffect(() => {
    modalRef.current = isOpen;
  });

  const prevIsOpen = modalRef.current ?? isOpen;

  useEffect(() => {
    if (prevIsOpen !== isOpen) {
      setModalStatus(isOpen);
    }
  }, [isOpen, prevIsOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '55%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '1280px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
