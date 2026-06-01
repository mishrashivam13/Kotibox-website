import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ModalProvider } from '@/components/providers/ModalContext'
import FloatingButtons from '@/components/ui/FloatingButtons'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <div className="bg-white min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </div>
    </ModalProvider>
  )
}
