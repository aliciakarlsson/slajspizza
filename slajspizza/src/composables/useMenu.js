// useMenu.js

import { ref } from 'vue'
import axios from 'axios'

export const useMenu = () => {
  const menu = ref([])
  const typeCounts = ref({})
  const typePercentages = ref({})
  const loading = ref(false)
  const error = ref(null)

  const fetchMenu = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await axios.get(
        'https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/menu',
        {
          headers: { 'x-zocom': 'sp-7BTxHCyHhzIME5TI' },
        },
      )

      console.log('API-svar:', response.data)
      menu.value = response.data.items // Anta att menyn finns i `response.data`

      // Räkna antalet av varje type
      typeCounts.value = menu.value.reduce((acc, item) => {
        acc[item.type] = (acc[item.type] || 0) + 1
        return acc
      }, {})

      // Beräkna procentandel för varje typ
      const totalItems = menu.value.length
      typePercentages.value = Object.entries(typeCounts.value).reduce((acc, [type, count]) => {
        acc[type] = ((count / totalItems) * 100).toFixed(2)
        return acc
      }, {})
    } catch (err) {
      error.value = err.message || 'Något gick fel vid hämtning av menyn.'
    } finally {
      loading.value = false
    }
  }

  return {
    menu,
    loading,
    error,
    fetchMenu,
    typeCounts,
    typePercentages,
  }
}
