import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div className="p-5 border-b-2 flex justify-between items-center">
            <h1 className="py-4 px-4 font-bold text-3xl">Decentralized Lottery</h1>
            <div className="px-4">
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}
