import CompanyTable from '../../features/Company/pages/company-table'
import { MainLayout } from '../../core/components/Layout/Main'
import React from 'react'

const CompanyInfo = () => {
  return (
    <MainLayout>
      <div className="flex justify-center mt-16 ">
        <CompanyTable />
      </div>
    </MainLayout>
  )
}

export default CompanyInfo
