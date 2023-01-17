import axios from 'axios'

axios.post(
  import.meta.env.VITE_DISCORD_WEBHOOK!, 
  { content: 'ping' },
  { headers: { 'content-type': 'application/json' } }
)


function App() {
  return (
    <div>
      <h1>Teste</h1>
    </div>
  )
}

export default App
