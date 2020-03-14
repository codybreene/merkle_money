# [Merkle Money](https://merkle-money.herokuapp.com/)

[Merkle Money](https://merkle-money.herokuapp.com/) is a cryptocurrency mock-trading app based on [Coinbase](https://www.coinbase.com/). 

![Image](https://user-images.githubusercontent.com/5722230/76671501-ee203300-6553-11ea-8cfd-12f094db96ca.png)

## Namesake

The [Merkle Tree](https://en.bitcoinwiki.org/wiki/Merkle_tree) is the data structure used by Bitcoin to hash transactions. 

## Features
1. Fetch and track real-time cryptocurrency prices
2. Build a no-risk portfolio with over ten different cryptocurrencies 
3. Review recent transactions

## Code Snippet
* This function ensures users only enter numeric values when buying or selling cryptocurrencies, and it dynamically updates the size of the input field as the user types.
* If the amount entered is greater than 9999, and the user is not attempting to delete the amount, use local state to keep the current amount.
* If the user clicks a non-numeric key, and the user is not attempting to delete the amount, do not update the input field.  
![Image 2](https://user-images.githubusercontent.com/5722230/76671869-10b34b80-6556-11ea-8ecd-ac734b643133.png)

## Technology 
* React
* Redux
* Rails



