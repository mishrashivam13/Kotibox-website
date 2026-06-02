import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyAdminToken, ADMIN_COOKIE } from '@/lib/admin-auth'
import AdminDashboardClient from './AdminDashboardClient'

export default async function AdminDashboardPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get(ADMIN_COOKIE)?.value

  if (!token || !(await verifyAdminToken(token))) {
    redirect('/admin/login')
  }

  return <AdminDashboardClient />
}
