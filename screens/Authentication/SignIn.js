import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AuthLayout } from "../";
import { FONTS, COLORS, SIZES, images, icons } from "../../constants";
import { FormInput, CustomSwitch, TextButton,TextIconButton } from "../../components";
import { utils } from "../../utils";
const SignIn = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [saveMe, setSaveMe] = React.useState(false);

  const isEnableSignIn = () => email != "" && password != "" && error == "";

  return (
    <AuthLayout
      title="Let's Sign You In"
      subtitle="Welcome back, you've been missed"
    >
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding*0.5 ,
        }}
      >
        {/* Form Inputs */}
        <FormInput
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={(text) => {
            //Validate Email
            utils.validateEmail(text, setError);
            setEmail(text);
          }}
          errorMsg={error}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  email == "" || (email != "" && error == "")
                    ? icons.correct
                    : icons.cencel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email == ""
                      ? COLORS.gray
                      : email != "" && error == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        <FormInput
          label="Password"
          placeholder="Enter your password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          onChange={(text) => setPassword(text)}
          errorMsg={error}
          containerStyle={{
            marginTop: SIZES.padding,
          }}
          appendComponent={
            <TouchableOpacity
              onPress={() => {
                setShowPass(!showPass);
              }}
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 40,
              }}
            >


              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gray,
                }}
              />
            </TouchableOpacity>
          }
        />

        {/* Save me & Forgot password */}

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "space-between",
          }}
        >
          <CustomSwitch value={saveMe} onChange={(value) => setSaveMe(value)} />
          <TextButton
            label="Forgot Password"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              ...FONTS.body4,
              color: COLORS.gray,
            }}
            onPress={() => navigation.navigate("ForgotPassword")}
          />
        </View>

        {/* Sign In */}

        <TextButton
          label="Sign In"
          disabled={isEnableSignIn()?false:true}
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding-10,
            backgroundColor: isEnableSignIn()
              ? COLORS.primary
              : COLORS.transparentPrimary,
            borderRadius: SIZES.radius,
          }}
        />
        {/* SignUP */}
          <View style={{
            flexDirection: "row",
            marginTop: SIZES.radius-5,
            justifyContent: "center",
          }}>
            <Text
                style={{
                    ...FONTS.body4,
                    color: COLORS.darkGray,
                }}
            >
                Don't have an account?
            </Text>
            <TextButton
                label="Sign Up"
                buttonContainerStyle={{
                    marginLeft:3,
                    backgroundColor:null,
                }}
                labelStyle={{
                    color: COLORS.primary,
                    ...FONTS.h4,
                }}
                onPress={() => navigation.navigate("SignUp")}
            />
            
          </View>

      </View>
                {/* Footer */}

                <View  >

                    {/* Facebook */}
                    <TextIconButton
                        containerStyle={{
                            height:50,
                            alignItems: 'center',
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.blue,
                        }}
                        icon={icons.fb}
                        iconPosition="LEFT"
                        iconStyle={{
                            tintColor: COLORS.white,
                        }}
                        label="Sign In with Facebook"
                        labelStyle={{
                            marginLeft:SIZES.radius,
                            color: COLORS.white,
                        }}
                        onPress={() => console.log('Facebook')}
                    />

                    {/* Goggl?e */}
                    <TextIconButton
                        containerStyle={{
                            height:50,
                            alignItems: 'center',
                            borderRadius: SIZES.radius,
                            marginTop:SIZES.radius,
                            backgroundColor: COLORS.lightGray1,
                        }}
                        icon={icons.google}
                        iconPosition="LEFT"
                        iconStyle={{
                            tintColor:null,
                        }}
                        label="Sign In with Google"
                        labelStyle={{
                            marginLeft:SIZES.radius,
                            color: COLORS.darkGray2,
                        }}
                        onPress={() => console.log('Google')}
                    />
                    
                </View>



    </AuthLayout>
  );
};

export default SignIn;
