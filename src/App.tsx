import { BrowserRouter } from 'react-router-dom'
import Routing from './Container/Routing'
import ThemeConfig from './Style/Config'
import GlobalStyle from './Style/Global'

function App() {

  return (
    <ThemeConfig>
      <BrowserRouter>
        <GlobalStyle />
        <Routing />
        // This file was changed on git repo
      </BrowserRouter>
    </ThemeConfig>
  )
}

export default App
