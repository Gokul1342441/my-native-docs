import { useAuthStore } from "@/store/protected";
import { Link, router } from "expo-router";
import { Switch, Text, View } from "react-native";

export default function Index() {
  const {isAuthenticated, login, logout} = useAuthStore()
  console.log("🚀 ~ Index ~ isAuthenticated:", isAuthenticated)

  const handleAuthToggle = (value: boolean) => {
    if (value) {
      login();
    } else {
      logout();
      // If we're on a protected route, redirect to home
      router.replace("/");
    }
  };
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

      {/* Protected Routes */}
      <Text className="text-xl font-bold text-[#000]">Protected Routes</Text>
      <View className="items-center justify-center">
      <Switch
          value={isAuthenticated}
          onValueChange={handleAuthToggle}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isAuthenticated ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>
      

      {/* Modal Navigagtion */}
      <Text className="text-xl font-bold text-[#000]">Modal Navigation</Text>
      <Link href="/modal" className="text-blue-500">{isAuthenticated ? "open modal(Authenticated)" : "open Modal(UnAuthorized)"}</Link>
      <Link href="/webmodal" className="text-blue-500">open webmodal</Link>

      {/* Platform-Specific Code */}
      <Text className="text-xl font-bold text-[#000]">Platform Specific Code</Text>
      <Link href="/psc" className="text-blue-500">Pos</Link>

    </View>
  );
}
