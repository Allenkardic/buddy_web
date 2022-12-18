import React, { useState } from "react";
import { MdEmail, MdOutlineCheck } from "react-icons/md";
import { FiEyeOff, FiEye, FiSearch } from "react-icons/fi";
import { AiFillUnlock } from "react-icons/ai";

import { Container, H6, H5 } from "../../styles";
import { colors } from "../../utils";
import {
  InputContainer,
  InputContent,
  InputCover,
  InputIconContainer,
} from "./style";

interface IProps {
  name: string;
  type: "email" | "password" | "text";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  label?: string;
  placeholder?: string;
  backgroundColor?: string;
}

function Input({
  name,
  type,
  onChange,
  error,
  label,
  placeholder,
  backgroundColor,
}: IProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  if (type === "email") {
    return (
      <div>
        <H6 left color={colors.grey}>
          {label}
        </H6>
        <InputContainer error={error}>
          <InputCover>
            <MdEmail color={colors.greyVariantOne} size={"25px"} />
            <InputContent name={name} type={type} onChange={onChange} />
          </InputCover>
          <InputIconContainer error={error}>
            <MdOutlineCheck color={colors.green} size={"25px"} />
          </InputIconContainer>
        </InputContainer>
        <H6 left color={colors.red}>
          {error}
        </H6>
      </div>
    );
  } else if (type === "password") {
    return (
      <div>
        <H6 left color={colors.grey}>
          {label}
        </H6>
        <InputContainer error={error}>
          <InputCover>
            <AiFillUnlock color={colors.greyVariantOne} size={"25px"} />
            <InputContent
              name={name}
              type={isPasswordVisible ? "text" : "password"}
              onChange={onChange}
            />
          </InputCover>
          <InputIconContainer>
            {isPasswordVisible ? (
              <FiEye
                color={colors.grey}
                size={"25px"}
                onClick={() => setIsPasswordVisible(false)}
              />
            ) : (
              <FiEyeOff
                color={colors.grey}
                size={"25px"}
                onClick={() => setIsPasswordVisible(true)}
              />
            )}
          </InputIconContainer>
        </InputContainer>
        <H6 left color={colors.red}>
          {error}
        </H6>
      </div>
    );
  }
  return (
    <div>
      {label && (
        <H6 left color={colors.grey}>
          {label}
        </H6>
      )}
      <InputContainer error={error} backgroundColor={backgroundColor}>
        <FiSearch color={colors.greyVariantOne} size={"25px"} />
        <InputContent
          placeholder={placeholder}
          name={name}
          type={type}
          onChange={onChange}
        />
      </InputContainer>
      <H6 left color={colors.red}>
        {error}
      </H6>
    </div>
  );
}

export default Input;
