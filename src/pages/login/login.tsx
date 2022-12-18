import React from "react";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { AiOutlineCopyright } from "react-icons/ai";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  Container,
  ContentOne,
  ContentTwo,
  LoginContainer,
  HelperText,
  InfoContainer,
  ExistingUserContainer,
  ReversedRight,
  ImgContainer,
  Img,
} from "./style";
import { Button, Input, TextWithIcon } from "../../components";
import { colors, images } from "../../utils";
import { H2, H5, H6 } from "../../styles";

import loginRequest from "../../api/login";

function Login() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Paasword is required"),
  });

  const info = [
    { text: `Track real-time overview of company's financial performance.` },
    {
      text: `Track create projects budget against actual revenue and expenses.`,
    },
    {
      text: `Highlighted reports on budget deficit and surplus, accounting dimension, balance sheets and real-time sales margin estimation.`,
    },
  ];

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
      onSubmit={async (values, { setSubmitting }) => {
        const result = await loginRequest(values);
        console.log(result, "ddd");
        if (result.hasOwnProperty("token")) {
          navigate("dashboard");
        }
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formikProps) => {
        const { handleChange, values, handleSubmit, errors, touched } =
          formikProps;

        return (
          <Container>
            <ContentOne>
              <InfoContainer>
                <ImgContainer>
                  <Img src={images.logo} alt='trending graph' />
                </ImgContainer>
                {info.map((item, index) => (
                  <TextWithIcon key={index} text={item.text} />
                ))}

                <ReversedRight>
                  <AiOutlineCopyright
                    color={colors.greyVariantOne}
                    size={"12px"}
                  />
                  <H6 color={colors.greyVariantOne}>
                    Revvex. All Rights reserved
                  </H6>
                </ReversedRight>
              </InfoContainer>
            </ContentOne>
            <ContentTwo>
              <LoginContainer>
                <H2 left bold>
                  Log in to your account
                </H2>
                <HelperText>
                  <H5 left color={colors.grey}>
                    Proceed to create account and setup your organization
                  </H5>
                </HelperText>
                <form onSubmit={handleSubmit}>
                  <Input
                    label='Email'
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                    backgroundColor={colors.white}
                  />

                  <Input
                    label='Password'
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={values.password}
                    onChange={handleChange}
                    error={errors.password}
                    backgroundColor={colors.white}
                  />
                  <Button type='submit' text='Login' />
                </form>
                <ExistingUserContainer>
                  <H6 left color={colors.grey}>
                    Dont't have an account?
                  </H6>
                  <H6 left color={colors.primary}>
                    Register
                  </H6>
                </ExistingUserContainer>
              </LoginContainer>

              <TextWithIcon chatBox text='Get Help' />
            </ContentTwo>
          </Container>
        );
      }}
    </Formik>
  );
}

export default Login;
