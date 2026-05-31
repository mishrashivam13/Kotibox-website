    // Yeh file server component rehne do - koi changes nahi
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}