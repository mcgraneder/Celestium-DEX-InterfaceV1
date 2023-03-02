import React from "react";
import {
  UilExclamationTriangle,
  UilSpinnerAlt,
} from "@iconscout/react-unicons";
import styled, { css } from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  pointer-events: none;
  backdrop-filter: blur(5px);
  z-index: 1000;
  pointer-events: none;
  transition: opacity 0.15s ease-in-out !important;
  background: rgba(2, 8, 26, 0.45);
  ${(props) =>
    props.visible &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

export const FormWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 630px;
  background-color: rgb(15, 25, 55);
  text-align: right;
  padding: 30px 15px;
  padding-bottom: 20px;
  border: 1.5px solid rgb(48, 63, 88);
  border-radius: 15px;
  display: block;
  z-index: 10000000000;

  box-shadow: 14px 19px 5px 0px rgba(0, 0, 0, 0.85);
  color: white;
`;


export const PrimaryButton = ({
  children,
  disabled,
  loading,
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`flex items-center rounded-full px-5 text-center text-white ${
        disabled ? "bg-grey-450" : "bg-primary"
      } ${className} focus-visible:ring-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
      disabled={disabled || loading}
      {...rest}
    >
      {children}
      {loading && (
        <span className="ml-1 animate-spin">
          <UilSpinnerAlt />
        </span>
      )}
    </button>
  );
};

export const UserInfoModalInner = ({
  close,
  message,
}) => {
  return (
    <>
     
      <div className="my-2 flex flex-col items-center justify-center gap-2">
        <span className=" px-2 text-center text-[15px] text-gray-400">
          {message}
        </span>
      </div>
      <div className="mt-8 mb-2 flex items-center justify-center">
        <PrimaryButton
          className={
            "w-full justify-center rounded-2xl bg-blue-500 py-[15.5px] text-center text-[17px] font-semibold"
          }
          onClick={close}
        >
          Close
        </PrimaryButton>
      </div>
    </>
  );
};

function UserInfoModal({ close, open, message }) {
  return (
    <>
      <Backdrop visible={open}>
        <FormWrapper>
          <UserInfoModalInner close={close} message={message} />
        </FormWrapper>
      </Backdrop>
    </>
  );
}

export default UserInfoModal;
