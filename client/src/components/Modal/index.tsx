import { Portal } from "@mui/material";
import { get, isEqual } from "lodash";
import { FC, MouseEventHandler, useCallback, useState } from "react";
import { useTogglable } from "../../hooks/useToggleble";
import { BaseComponentProps } from "../../types";
import { RoundedButton } from "../RoundedButton";
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTitle,
  ModalWrapper,
} from "./StyledComponents";

type ModalClassName = "visible" | "invisible";

type ClickHandler = MouseEventHandler<HTMLDivElement>;

type ModalProps = BaseComponentProps & {
  title: string;
  openButtonLabel?: string;
  onOK?: () => void;
  onCancel?: () => void;
};

const Modal: FC<ModalProps> = ({
  children,
  title,
  openButtonLabel = "Open",
  onOK,
  onCancel,
}) => {
  const [modalClassName, setModalClassName] = useState<ModalClassName>();

  const {
    active: modalIsActive,
    deactivate: _closeModal,
    activate: _openModal,
  } = useTogglable();

  const openModal = useCallback(() => {
    _openModal();

    setTimeout(() => {
      setModalClassName("visible");
    }, 1);
  }, []);

  const closeModal = useCallback(() => {
    setModalClassName("invisible");

    setTimeout(() => {
      _closeModal();
    }, 300);
  }, []);

  const handleOK = useCallback(() => {
    onOK && onOK();
    closeModal();
  }, [onOK, closeModal]);

  const handleCancel = useCallback(() => {
    onCancel && onCancel();
    closeModal();
  }, [onCancel, closeModal]);

  const handleModalWrapperClick: ClickHandler = useCallback((event) => {
    const element = event.target as HTMLDivElement;
    const isModalWrapper = isEqual(
      get(element.dataset, "modalWrapper"),
      "true"
    );

    if (isModalWrapper) closeModal();
  }, []);

  return (
    <>
      <RoundedButton onClick={openModal}>{openButtonLabel}</RoundedButton>

      {modalIsActive && (
        <Portal>
          <ModalWrapper
            className={modalClassName}
            onClick={handleModalWrapperClick}
            data-modal-wrapper="true"
          >
            <ModalBody>
              <ModalTitle>{title}</ModalTitle>

              <ModalContent>{children}</ModalContent>

              <ModalFooter>
                <RoundedButton onClick={handleOK}>OK</RoundedButton>

                {onCancel && (
                  <RoundedButton onClick={handleCancel}>Cancel</RoundedButton>
                )}
              </ModalFooter>
            </ModalBody>
          </ModalWrapper>
        </Portal>
      )}
    </>
  );
};

export default Modal;
