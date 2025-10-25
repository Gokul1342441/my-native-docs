import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-[#000] mb-4">
        Routing Docs
      </Text>
      {/* Static Routes */}
      <Text className="text-xl font-bold text-blue-500">Static Routes</Text>
      <Link href="/about" className="text-blue-500">About</Link>

      <Text className="text-xl font-bold text-blue-500">Static Routes with filebased routing</Text>
      <Link href="/profile" className="text-blue-500">Profile</Link>
      {/* Dynamic Routes */}
      <Text className="text-xl font-bold text-blue-500">Dynamic Routes</Text>
      <Link href="/products" className="text-blue-500">Products</Link>
      {/* Not Found */}
      {/* <Text className="text-xl font-bold text-blue-500">Not Found</Text>
      <Link href="/not-found" className="text-blue-500">Not Found</Link> */}
      {/* <Link href="/profile/123" className="text-blue-500">Profile 123</Link> */}
    </View>
  );
}
