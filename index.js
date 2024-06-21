import { SwapSDK } from "@chainflip/sdk/swap";
import { Wallet } from "ethers";
 
const options = {
  network: "perseverance", // Testnet
  backendServiceUrl: "https://example.chainflip.io",
  signer: Wallet.fromMnemonic(process.env.WALLET_MNEMONIC),
  broker: {
    url: 'https://my.broker.io',
    commissionBps: 0, // basis points, i.e. 100 = 1%
  },
};
 
const swapSDK = new SwapSDK(options);
