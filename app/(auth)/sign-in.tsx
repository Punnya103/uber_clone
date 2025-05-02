import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { icons, images } from '@/constants';
import InputField from '@/components/InputField'; 
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';
import OAuth from '@/components/OAuth';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onSignInPress = async () => {};
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative h-[250px] w-full">
          <Image source={images.signUpCar} className="z-0 h-[250px] w-full" />
          <Text className="absolute bottom-5 left-5 font-JakartaSemiBold text-2xl text-black">
            Welcome 👋 
          </Text>
        </View>

        <View className="mt-6  px-5">
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            // secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          <CustomButton
            title="SignUp"
            className="mb-5 mt-10 w-11/12 text-white"
            onPress={onSignInPress}
          />

          <OAuth />

          <Link href="/Sign-up" className="my-5 text-center text-lg text-general-200">
            <Text>Don't have an account?</Text>
            <Text className="text-primary-500"> Create an account</Text>
          </Link>
        </View>

        {/*verificationModal*/}
      </View>
    </ScrollView>
  );
};

export default SignIn;
