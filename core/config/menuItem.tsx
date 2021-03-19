import { Business, People, Assignment, SaveAlt, AssignmentTurnedIn } from '@material-ui/icons'

export const navLink = [
  { path: '/', name: 'หน้าหลัก', permission: 'general' },
  { path: '/academic-industry/announcements', name: 'ประกาศรับสมัครงาน', permission: 'general' },
  { path: '/company/all-company', name: 'ข้อมูลบริษัท', permission: 'general' },
  { path: '/dashboard', name: 'Dashboard', permission: 'access_dashboard' }
]

export const dropdownLinkAdmin = [
  {
    path: '/company/company-table',
    name: 'จัดการข้อมูลบริษัท',
    icon: <Business />,
    role: ['admin', 'manager', 'coordinator'],
    permission: ['access_company', 'create_company']
  },
  {
    path: '/academic-industry/info-management',
    name: 'ลงประกาศรับสมัครงาน',
    icon: <Assignment />,
    role: ['admin', 'manager', 'coordinator'],
    permission: ['access_academic_announcement', 'create_academic_announcement']
  },
  {
    path: '/academic-industry/applications/history',
    name: 'ประวัติการสมัครงาน',
    icon: <AssignmentTurnedIn />,
    role: ['student', 'admin'],
    permission: ['access_academic_application']
  },
  {
    path: '/report-management/info',
    name: 'ดาวห์โหลดรายงานสรุป',
    icon: <SaveAlt />,
    role: ['admin'],
    permission: ['access_dashboard']
  },
  {
    path: '/user-management/info',
    name: 'จัดการผู้ใช้งาน',
    icon: <People />,
    role: ['admin'],
    permission: ['access_user']
  }
]
