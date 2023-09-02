<script setup lang="ts">
import useTokens from './composables/tokens'

const { result, address, convertTimestampToDatetime, connectMetaMask } = useTokens()
</script>

<template>
  <div class="p-4">
    <div>
      <button @click="connectMetaMask"
      class="mb-5 mr-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      Connect MetaMask
    </button>
    <span v-if="address">MetaMask address : {{ address }}</span>
    </div>
    
    <table class="table-auto border-collapse w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th class="px-6 py-3">
            <span class="">Index</span>
          </th>
          <th class="px-6 py-3">
            <span class="">Sender</span>
          </th>
          <th class="px-6 py-3">
            <span class="">Receiver</span>
          </th>
          <th class="px-6 py-3">
            <span class="">Amount In</span>
          </th>
          <th class="px-6 py-3">
            <span class="">Amount Out</span>
          </th>
          <th class="px-6 py-3">
            <span class="">DateTime</span>
          </th>
        </tr>
      </thead>
      <tbody v-if="result">
        <tr v-for="(item, index) in result.swaps" :key="index"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="px-6 py-4">
            <span class="">{{ index }}</span>
          </td>
          <td>
            <span class="px-6 py-4">{{ item.tokenOut }}</span>
          </td>
          <td>
            <span class="px-6 py-4">{{ item.tokenIn }}</span>
          </td>
          <td>
            <span class="px-6 py-4">{{ item.tokenAmountIn }}</span>
          </td>
          <td>
            <span class="px-6 py-4">{{ item.tokenAmountOut }}</span>
          </td>
          <td>
            <span class="px-6 py-4">{{ convertTimestampToDatetime(item.timestamp) }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>