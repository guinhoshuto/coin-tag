import axios from 'axios'
import { browserVersion, browserName, mobileModel, osName, osVersion} from 'react-device-detect'


const content = `
  **PING** ${new Date().toLocaleString('pt-BR')}
  **OS**: ${osName} ${osVersion}
  **Device**: ${mobileModel} 
  **Browser**: ${browserName} ${browserVersion}
`

axios.post(
  import.meta.env.VITE_DISCORD_WEBHOOK!, 
  { content: content },
  { headers: { 'content-type': 'application/json' } }
)

function App() {
  return (
    <div className="app">
      <h1>teste</h1>
    </div>
  )
}

export default App
