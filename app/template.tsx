import Footer from '@/components/modules/Footer/Footer'
import Header from '@/components/modules/Header/Header'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
