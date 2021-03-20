

const tokenAddress = '<%= contractName %>';
const tokenSymbol = '';
const tokenDecimals = 18;
const tokenImage = '';

/**
* Add ERC20 Token Asset Information
* @property {symbol} tokenSymbol -  A ticker symbol or shorthand, up to 5 chars.
* @property {address} tokenAddress - The checksum'd contract address for the asset 
* @property {decimals} tokenDecimals - The number of decimals in the token
* @property {image} tokenImage - A URL for the asset, png 
*/

try {
  // wasAdded is a boolean. Like any RPC method, an error may be thrown.
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: tokenImage,
      },
    },
  });

  if (wasAdded) {
    console.log('✅ Asset Successfully Added');
  } else {
    console.log('❌ Asset Not Addedd ');
  }
} catch (error) {
  console.log(error);
}