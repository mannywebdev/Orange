import React from "react";
import { ImageBackground, Image, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";
import ErrorMessage from "../components/ErrorMessage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function LoginScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/splash_white.png")}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require("../assets/logo_primary.png")}
              />
              <AppText style={styles.tagLine}>
                Buy or sell something today!
              </AppText>
            </View>
            <View style={styles.loginContainer}>
              <AppTextInput
                icon="email"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
              />
              {touched.email && <ErrorMessage error={errors.email} />}
              <AppTextInput
                icon="lock"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
              />
              {touched.password && <ErrorMessage error={errors.password} />}
              <AppButton
                style={styles.button}
                title={"Login"}
                color="secondary"
                background="primary"
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
  },
  logo: {
    height: 120,
    width: 180,
    marginBottom: 10,
  },
  logoContainer: {
    alignItems: "center",
  },
  loginContainer: {
    padding: 20,
    paddingBottom: 60,
    width: "100%",
  },
  tagLine: {
    color: colors.primary,
  },
  button: {
    padding: 14,
  },
});

export default LoginScreen;
