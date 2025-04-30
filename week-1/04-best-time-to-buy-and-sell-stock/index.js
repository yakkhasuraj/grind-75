/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

// O(n) time complexity and O(1) space complexity
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let profit = 0;
  let minimumPrice = prices[0];

  for (const price of prices) {
    profit = Math.max(profit, price - minimumPrice);
    minimumPrice = Math.min(minimumPrice, price);
  }

  return profit;
};

let prices = [7, 1, 5, 3, 6, 4];
prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
