import Header from '@/components/modules/Header/Header'

function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <div>Footer</div>
    </>
  )
}

export default Template
