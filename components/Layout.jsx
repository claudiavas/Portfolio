import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
