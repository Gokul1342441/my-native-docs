import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
const DYNAMIC_ROUTES = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
]
const CATCH_ALL_SEGMENTS = [
  { id: 1, name: 'Electronics', category: 'electronics', color: 'red' },
  { id: 2, name: 'Clothing', category: 'clothing', color: 'blue' },
  { id: 3, name: 'Books', category: 'books', color: 'green' },
]

console.log(DYNAMIC_ROUTES)
export default function Products() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold text-[#000] mb-4">Dynamic Routes</Text>
      {DYNAMIC_ROUTES.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id} className="text-blue-500 text-lg">
          <Text>{product.name}</Text>
        </Link>
      ))}
      <Text className="text-2xl font-bold text-[#000] mb-4">Catch all Segments</Text>
      {CATCH_ALL_SEGMENTS.map((segment) => (
        <Link href={`/products/${segment.name}/${segment.category}/${segment.color}`} key={segment.id} className="text-blue-500 text-lg">
          <Text className={`text-${segment.color}-500`}>{segment.name}</Text>
      </Link>
    ))}
    <Text className="text-2xl font-bold text-[#000] mb-4">Releative To Directory</Text>
    <Link href="../about" className="text-blue-500 text-lg">About</Link>
  </View>
);
}