import {ref} from 'vue'
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

export default function useTokens() {
  const { result } = useQuery(gql`
    query MyQuery {
      swaps(first: 5) {
        userAddress {
          id
        }
        id
        timestamp
        tokenAmountIn
        tokenAmountOut
        tokenIn
        tokenInSym
        tokenOut
        tokenOutSym
      }
    }
  `);
  const address = ref()

  function convertTimestampToDatetime(timestamp: number) {
    return new Intl.DateTimeFormat(navigator.language).format(timestamp * 1000);
  }

  async function connectMetaMask() {
    // @ts-ignore:next-line
    if (typeof window.ethereum !== "undefined") {
      try {
        // @ts-ignore:next-line
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        address.value = accounts[0];
        console.log('connectMetaMask', {accounts:accounts});
        
      } catch (error) {
        console.error("User denied account access...");
      }
    } else {
      console.error("Ethereum object doesn't exist!");
    }
  }


  return { result, address, convertTimestampToDatetime, connectMetaMask };
}
