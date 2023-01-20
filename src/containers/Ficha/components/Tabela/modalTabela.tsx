import React from "react";
import Modal from "react-modal";
interface IModalTabelaProps {
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
}

export const ModalTabela: React.FC<IModalTabelaProps> = ({
  modalIsOpen,
  setModalIsOpen,
}) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className=" rounded-lg bg-white p-6"
        overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      >
        <div className="flex justify-around gap-10">
          <div className="">
            <iframe
              className="h-[500px] w-[500px]"
              src="https://www.youtube.com/embed/5YpVRG94q9c?autoplay=1&mute=1"
            ></iframe>
          </div>
          <div className="flex w-[300px] flex-col justify-center">
            <h1 className="text-lg font-medium">Descrição</h1>
            <p className="">
              Só escapulas: deixar ombro alongar o movimento acima e puxar
              apenas com as escapulas fechando pra trás e pra baixo. Nas 8reps
              aí sim movimento completo com o cotovelo
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};
