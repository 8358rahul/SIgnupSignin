import React from "react";
import { View, Text } from "react-native";

import OPTInputView from "@twotalltotems/react-native-otp-input";

import { FONTS, SIZES, COLORS } from "../../constants";
import { AuthLayout } from "../";
import { TextButton } from "../../components";

const Otp = ({ navigation }) => {
  const [timer, setTimer] = React.useState(60);

    React.useEffect(() => {
        let interval = setInterval(() => {
             setTimer(timer=>{
                if(timer > 0){
                    return timer - 1;
                }else{
                return timer;
                }
            })
            return () => clearInterval(interval);
        }, [ ])
 
         
    }, 1000)
    

  return (
    <AuthLayout title="OTP" subtitle="Enter the OTP sent to your email">
      {/* OTP input  */}

      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >
        <OPTInputView
          pinCount={4}
          style={{
            width: "100%",
            height: 50,
          }}
          codeInputFieldStyle={{
            width: 65,
            height: 65,
            borderWidth: 1,
            borderRadius: SIZES.radius,
            color: COLORS.black,
            ...FONTS.h3,
            backgroundColor: COLORS.lightGray2,
          }}
          onCodeFilled={(code) => console.log(code)}
        />

        {/* CountDown TImer */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.padding,
          }}
        >
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}
          >
            Didn't receive code?
          </Text>
          <TextButton
            label={`Resend in ${timer}s`}
            disabled={timer === 0}
            buttonContainerStyle={{
              margiLeft: SIZES.base,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default Otp;
