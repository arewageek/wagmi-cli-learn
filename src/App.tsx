import { useAccount } from 'wagmi'

export function App() {
  const { isConnected } = useAccount()

  return (
    <div className='App w-screen min-h-screen bg-slate-800 flex justify-center items-center'>
      kk
    </div>
  )
}
