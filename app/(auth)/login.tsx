import { useAuthStore } from "@/store/protected";
import { Link, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Login() {
  const { login } = useAuthStore();
  const router = useRouter();

  const handleLogin = () => {
    login();
    router.replace("/");
  };

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="text-3xl font-bold mb-6">Login Required</Text>
      <Text className="text-lg text-center mb-8">
        This screen is only available when not authenticated.
      </Text>
      
      <Button 
        title="Simulate Login" 
        onPress={handleLogin}
      />
      
      <Link href="/" className="mt-6 text-blue-500 text-lg">
        ← Back to Home
      </Link>
    </View>
  );
}