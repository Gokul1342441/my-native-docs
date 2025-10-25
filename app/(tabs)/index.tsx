import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-[#000] mb-4">
        Routing Docs
      </Text>
      {/* Static Routes */}
      <Text className="text-xl font-bold text-[#000]">Static Routes</Text>
      <Link href="/about" className="text-blue-500">About</Link>

      <Text className="text-xl font-bold text-[#000]">Static Routes with filebased routing</Text>
      <Link href="/profile" className="text-blue-500">Profile</Link>
      {/* Dynamic Routes */}
      <Text className="text-xl font-bold text-[#000]">Dynamic Routes</Text>
      <Link href="/products" className="text-blue-500">Products</Link>
      {/* Not Found */}
      {/* <Text className="text-xl font-bold text-blue-500">Not Found</Text>
      <Link href="/not-found" className="text-blue-500">Not Found</Link> */}
      {/* <Link href="/profile/123" className="text-blue-500">Profile 123</Link> */}

      {/* Group Routes */}
      <Text className="text-xl font-bold text-[#000]">Group Routes</Text>
      <Link href="/login" className="text-blue-500">Login</Link>
      <Link href="/register" className="text-blue-500">Register</Link>
      <Link href="/forgot-password" className="text-blue-500">Forgot Password</Link>

      {/* Relative To Directory */}
      <Text className="text-xl font-bold text-[#000]">Relative To Directory</Text>
      <Link href="/products/12" className="text-blue-500">product 12</Link>

      {/* Stack Navigation */}
      <Text className="text-xl font-bold text-[#000]">Stack Navigation</Text>
      <Link href="/stack-home" className="text-blue-500">stacknavicate..</Link>
    </View>
  );
}
