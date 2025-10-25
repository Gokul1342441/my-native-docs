import { Ionicons } from '@expo/vector-icons';
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { z } from "zod";

// 1️⃣ Form Schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  mobile: z
    .string()
    .regex(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function FormValidation() {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchemaType) => {
    Alert.alert("Form Submitted", JSON.stringify(data, null, 2));
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} // Adjust for header/navbar
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ padding: 16, flexGrow: 1, justifyContent: 'center' }}
          keyboardShouldPersistTaps="handled" // Important: lets you tap buttons while keyboard open
        >
          {/* Name Field */}
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value, onBlur } }) => (
              <View className="mb-4">
                <Text className="mb-1 font-semibold">Name</Text>
                <TextInput
                  className="border border-gray-300 p-3 rounded"
                  placeholder="Enter your name"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                {errors.name && <Text className="text-red-500 mt-1">{errors.name.message}</Text>}
              </View>
            )}
          />

          {/* Email Field */}
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value, onBlur } }) => (
              <View className="mb-4">
                <Text className="mb-1 font-semibold">Email</Text>
                <TextInput
                  className="border border-gray-300 p-3 rounded"
                  placeholder="Enter your email"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {errors.email && <Text className="text-red-500 mt-1">{errors.email.message}</Text>}
              </View>
            )}
          />

          {/* Mobile Field */}
          <Controller
            control={control}
            name="mobile"
            render={({ field: { onChange, value, onBlur } }) => (
              <View className="mb-4">
                <Text className="mb-1 font-semibold">Mobile</Text>
                <TextInput
                  className="border border-gray-300 p-3 rounded"
                  placeholder="Enter your mobile number"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  keyboardType="numeric"
                />
                {errors.mobile && <Text className="text-red-500 mt-1">{errors.mobile.message}</Text>}
              </View>
            )}
          />

          {/* Password Field */}
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value, onBlur } }) => (
              <View className="mb-4">
                <Text className="mb-1 font-semibold">Password</Text>
                <View className="flex-row items-center border border-gray-300 rounded">
                  <TextInput
                    className="flex-1 p-3"
                    placeholder="Enter your password"
                    secureTextEntry={!showPassword} // toggle
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                  />
                  <TouchableOpacity
                    className="px-3"
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Ionicons
                      name={showPassword ? "eye-off" : "eye"}
                      size={24}
                      color="gray"
                    />
                  </TouchableOpacity>
                </View>
                {errors.password && <Text className="text-red-500 mt-1">{errors.password.message}</Text>}
              </View>
            )}
          />

          {/* Submit Button */}
          <TouchableOpacity
            className="bg-blue-500 p-4 rounded items-center mt-4"
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-white font-semibold">Submit</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
