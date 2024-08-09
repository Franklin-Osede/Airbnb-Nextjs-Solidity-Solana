import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import { useMemo } from "react";

const connection = "https://cosmopolitan-multi-gas.solana-devnet.quiknode.pro/e9b20f2f684e1066ea2e828a81ab03be8af569d8/"

const WalletConnectionProvider = ({ children }) => {
    const endpoint = useMemo(() => connection, [])

    const wallets = useMemo(() => [new PhantomWalletAdapter()], [])
}