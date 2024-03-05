import Header from '@/components/modules/Header/Header'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <div>Footer</div>
    </>
  )
}
