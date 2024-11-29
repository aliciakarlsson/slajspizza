import { ref } from 'vue'

const order = ref([])

export const useOrder = () => {
  const addToOrder = (product) => {
    const existingProduct = order.value.find((item) => item.id === product.id)
    if (existingProduct) {
      existingProduct.quantity += 1
    } else {
      order.value.push({ ...product, quantity: 1 })
    }
  }

  return {
    order,
    addToOrder,
  }
}
