import { useProductsInfiniteQuery } from "@/services/products/queries";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  Text,
  View
} from "react-native";

export default function DevelopmentListing() {
  const { 
    data, 
    isLoading, 
    error, 
    fetchNextPage, 
    hasNextPage, 
    isFetchingNextPage,
    refetch,
    isRefetching
  } = useProductsInfiniteQuery();

  const products = data?.pages.flatMap((page) => page) ?? [];

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
        <Text className="text-gray-500 mt-2">Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-red-500">Failed to fetch products</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={() => refetch()}
          />
        }
        renderItem={({ item }) => (
          <View className="bg-gray-100 p-3 mb-3 rounded-xl flex-row items-center space-x-4">
            <Image
              source={{ uri: item.images?.[0] }}
              className="w-16 h-16 rounded-lg bg-gray-300"
              resizeMode="cover"
            />
            <View className="flex-1 ml-4">
              <Text className="text-lg font-semibold">{item.title}</Text>
              <Text className="text-gray-500">₹ {item.price}</Text>
            </View>
          </View>
        )}
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? (
            <View className="py-4">
              <ActivityIndicator size="small" />
            </View>
          ) : null
        }
      />
    </View>
  );
}
