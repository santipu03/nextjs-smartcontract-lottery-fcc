import { useEffect, useState } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { abi, contractAddresses } from "../constants"

export default function LotteryEntrance() {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const raffleAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null

    const [entranceFee, setEntranceFee] = useState("0")

    // const { runContractFunction: enterRaffle } = useWeb3Contract({
    //     abi: abi,
    //     contractAddress: raffleAddress,
    //     functionName: "enterRaffle",
    //     params: {},
    //     msgValue: "",
    // })

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getEntranceFee",
        params: {},
    })

    useEffect(() => {
        if (isWeb3Enabled) {
            async function updateUI() {
                setEntranceFee((await getEntranceFee()).toString())
                console.log(entranceFee)
            }
            updateUI()
        }
    }, [isWeb3Enabled])

    return (
        <div>
            Hi from lottery entrance <div>{entranceFee}</div>
        </div>
    )
}
