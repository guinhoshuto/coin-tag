import axios from 'axios'
import { useEffect } from 'react'

// export async function ping(){
//   console.log(import.meta.env.VITE_DISCORD_WEBHOOK)
//   axios.post(
//     import.meta.env.VITE_DISCORD_WEBHOOK!, 
//     { content: 'ping' },
//     { headers: { 'content-type': 'application/json' } }
//   )
// }
axios.post(
  import.meta.env.VITE_DISCORD_WEBHOOK!, 
  { content: 'ping' },
  { headers: { 'content-type': 'application/json' } }
)


function App() {
  // useEffect(() => {
  //   ping()
  // }, [])
  return (
    <div>
      <h1>Teste</h1>
    </div>
  )
}

export default App
