import { StyleSheet, Text, View ,TextInput,Image,TouchableOpacity} from "react-native";
import React, { useEffect } from "react";
import { FONTS, COLORS, SIZES, images } from "../constants";

const FormInput = ({
  label,
  containerStyle,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  autoCapitalize = "none",
  keyboardType = "default",
  autoCompleteType = "off",
  errorMsg = "",
}) => {
    
    useEffect(()=>{
console.log("test")
    }, [])

  return (
    <View
      style={{
        ...containerStyle,
      }}
    >
      {/* Label & Error msg */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{label}</Text>
        <Text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</Text>
      </View>

      {/* TextInput */}
      <View
        style={{
          flexDirection: "row",
          height: 55,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        {prependComponent}
        <TextInput
          style={{
            ...inputStyle,
            flex: 1,
            placeholderTextColor: COLORS.gray,
          }}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          onChangeText={(text) => onChange(text)}
        />

        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({});
