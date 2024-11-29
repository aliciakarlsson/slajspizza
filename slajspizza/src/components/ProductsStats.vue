<script setup>
import { ref, computed, onMounted, onBeforeMount } from 'vue'
import { useMenu } from '@/composables/useMenu'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const { menu, typeCounts, typePercentages, loading, error, fetchMenu } = useMenu()

const chartData = ref(null)
const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
})

const isExpanded = ref(false)

const expand = () => {
  isExpanded.value = true
}

const shrink = () => {
  isExpanded.value = false
}

onBeforeMount(async () => {
  await fetchMenu()
  updateChartData()
})

const updateChartData = () => {
  chartData.value = {
    labels: Object.keys(typePercentages.value),
    datasets: [
      {
        backgroundColor: ['#FF5733', '#4CAF50', '#2196F3'], // Röd för pizza, grön för sallad, blå för drycker
        data: Object.values(typePercentages.value),
      },
    ],
  }
}
</script>

<template>
  <div class="stats-container" @mouseenter="expand" @mouseleave="shrink">
    <div v-if="loading" class="loading">Laddar...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="chart-wrapper" :class="{ expanded: isExpanded }">
      <div class="icon" v-if="!isExpanded"></div>
      <Pie
        v-if="chartData"
        :data="chartData"
        :options="chartOptions"
        :style="{ height: '100%', width: '100%' }"
      />
    </div>
  </div>
</template>

<style scoped>
.stats-container {
  position: sticky;
  top: 10px;
  z-index: 1000;
  align-self: flex-start;
  margin-left: auto;
  margin-right: 1.5rem;
  width: fit-content;
}
.chart-wrapper {
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
  /* background-color: white; */
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-wrapper.expanded {
  width: 200px;
  height: 200px;
  border-radius: 10px;
}

.icon {
  font-size: 24px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.loading,
.error {
  font-size: 12px;
  text-align: center;
}

.error {
  color: red;
}
</style>
