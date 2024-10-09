import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import ContentComponent from '@/components/Layout/Content/Content.component'

import '../styles/tailwind.css'

config.autoAddCss = false

const RootLayout = ({ children }) => {
  return (
    <html>
      <body className='w-full min-h-screen'>
        <main id='App' className='app w-full min-h-screen'>
          <div className='app-container w-full min-h-screen'>
            <ContentComponent children={ children } />
          </div>
        </main>
      </body>
    </html>
  )
}

export default RootLayout