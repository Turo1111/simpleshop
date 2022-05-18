import { DataContext } from '../context/context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return( 
    <DataContext>
      <Component {...pageProps} />
    </DataContext>
  )
}

export default MyApp