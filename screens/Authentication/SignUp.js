import React from "react";
import { View, Text, TouchableOpacity, Image,ScrollView } from "react-native";
import { FONTS, COLORS, SIZES, icons } from "../../constants";
import { AuthLayout } from "../";
import { FormInput, TextInput, TextIconButton, TextButton } from "../../components/";
import { utils } from "../../utils";

const SignUp = ({navigation}) => {
  const [email, setemail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);

  const [emailError, setEmailError] = React.useState("");
  const [userNameError, setUserNameError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

    const isEnableSignUp = () =>(
        email != "" && userName != "" && password != "" && emailError == "" && userNameError == "" && passwordError == ""
    )


  return (
    <ScrollView>
    <AuthLayout
      title="Getting Started"
      subtitle="Create an account to continue!"
      titleContainerStyle={{
        marginTop: SIZES.radius,
      }}
    >
      {/* Form Input and signup */}

      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding-10,
        }}
      >
        <FormInput
          label="Email"
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={(text) => {
            //Validate Email
            utils.validateEmail(text, setEmailError);
            setemail(text);
          }}
          errorMsg={emailError}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  email == "" || (email != "" && emailError == "")
                    ? icons.correct
                    : icons.cencel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email == ""
                      ? COLORS.gray
                      : email != "" && emailError == ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        <FormInput
          label="User Name"
          placeholder="Enter your user name"
          onChange={(text) => setUserName(text)}
          errorMsg={userNameError}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  userName == "" || (userName != "" && userNameError == "")
                    ? icons.correct
                    : icons.cencel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    userName == ""
                      ? COLORS.gray
                      : userName != "" && userNameError == ""
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
          onChange={(text) =>  {
            //Validate Password
            utils.validatePassword(text, setPasswordError);
            
            setPassword(text)}}
          errorMsg={passwordError}
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
        {/* SignUp & Sign IN  */}

        <TextButton
            label="Sign Up"
            disabled={isEnableSignUp()?false:true}
            buttonContainerStyle={{
                height:55,
                alignItems: 'center',
                marginTop: SIZES.padding,
                borderRadius: SIZES.radius,
                backgroundColor: isEnableSignUp() ? COLORS.primary : COLORS.transparentPrimary,
            }}
            onPress={() => navigation.navigate("Otp")}


            />
            <View style={{
                flexDirection: 'row',
                marginTop:  SIZES.radius,
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: COLORS.gray,
                    ...FONTS.body3
                }}

                >
                    Already have an account?
                </Text>
                <TextButton 
                
                label="Sign In"
                buttonContainerStyle={{
                    backgroundColor:null}}
                    labelStyle={{
                        color: COLORS.primary,
                        ...FONTS.body3}}
                onPress={() => navigation.goBack()}
                />
            </View>
        
      </View>

      {/* Footer */}
      <View style={{
        marginTop: 10,
      }} >

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
    </ScrollView>
  );
};

export default SignUp;
