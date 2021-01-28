import {
  Assignment,
  AttachMoney,
  Business,
  CheckBox,
  FreeBreakfast,
  QueryBuilder
} from '@material-ui/icons'
import {
  FormControl,
  InputLabel,
  Card as MaterialCard,
  MenuItem,
  Select,
  Typography
} from '@material-ui/core'

import { CardSmall } from '../../../core/components/Card/Small'
import Link from 'next/link'
import { Observer } from 'mobx-react-lite'
import PrimaryButton from '../../../core/components/Button/Primary'
import React from 'react'
import Search from '../../../core/components/Search'
import { useObserver } from 'mobx-react-lite'
import { companyType, jobPosition, jobType } from '../services/constantVariable'

// import Pagination from '../../../core/components/Pagination'

const AnnouncementSearch = () => {
  const tag = [{ title: 'Software Engineer' }, { title: 'Full Time' }, { title: 'Internship' }]

  return useObserver(() => (
    <div>
      <div className="flex justify-center w-full h-full pt-16 pb-3 bg-grey4">
        <div className="w-full max-w-screen-lg my-6">
          <div className="w-full h-8 max-w-screen-lg bg-grey-100">
            <Search />
          </div>
          <div className="flex flex-row justify-between pt-6">
            <div className="w-3/12 pr-5">
              <FormControl className="w-full font-prompt bg-grey-100">
                <InputLabel htmlFor="trinity-select">ประเภทของงาน</InputLabel>
                <Select id="trinity-select" name="job_position">
                  {jobPosition.map((position) => (
                    <MenuItem key={position.title} value={position.title}>
                      {position.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="w-3/12 pl-6 pr-5">
              <FormControl className="w-full font-prompt bg-grey-100">
                <InputLabel htmlFor="trinity-select">ประเภทของประกาศ</InputLabel>
                <Select id="trinity-select" name="job_type">
                  {jobType.map((job) => (
                    <MenuItem key={job.title} value={job.title}>
                      {job.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="w-3/12 pl-6 pr-5">
              <FormControl className="w-full font-prompt bg-grey-100">
                <InputLabel htmlFor="trinity-select">ประเภทของษริษัท</InputLabel>
                <Select id="trinity-select" name="company_type">
                  {companyType.map((company) => (
                    <MenuItem key={company.title} value={company.title}>
                      {company.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <PrimaryButton
              title="ค้นหา"
              onClick={() => console.log('Hello')}
              className="z-50 ml-10 lg:w-2/6">
              <p className="px-4 py-4 text-white font-prompt text-subtitle-1">ค้นหา</p>
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div className="w-full h-1 bg-secondary1" />
      <div className="flex justify-center w-full h-full pb-10 bg-white">
        <div className="-mt-24">
          <div className="container px-32 mx-auto">
            <div className="flex flex-wrap mt-32">
              <p className="w-3/4 pb-6 font-semibold font-prompt text-body-1">
                การค้นหา: พบ 120 ตำแหน่งงาน
              </p>
              <div className="w-full mr-5 md:w-5/12">
                <CardSmall
                  title="รับสมัครงานตำแหน่ง Software Engineer"
                  tags={['Software Engineer', 'WiL']}
                  date="12 มีนาคม - 24 ธันวาคม 2563"
                  company="SIT Company"
                  srcImg="https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g"
                />
                {/* หน้าละ 6 card
                <Pagination data={}/> */}
              </div>
              <div className="w-full ml-5 mr-auto md:w-5/12">
                <div>
                  <MaterialCard style={{ height: '1100px', width: '562px' }}>
                    <div className="flex items-end justify-end w-full h-40 rounded-none bg-grey-100">
                      <img
                        alt="Announcement Banner"
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                      />
                    </div>
                    <div className="p-5 align-middle">
                      <div className="flex flex-row">
                        <div className="w-3/4">
                          <Typography className="mb-3 ml-1 font-bold text-primary font-prompt text-heading-6">
                            รับสมัครงานตำแหน่ง Software Engineer happy sexy cutey 1 อัตรา
                          </Typography>
                          {tag.map((data, i) => (
                            <span
                              key={i}
                              className="px-1 mr-2 text-sm font-normal text-black bg-opacity-50 rounded text-body-2 bg-secondary2">
                              {data.title}
                            </span>
                          ))}
                        </div>
                        <Observer>
                          {() => (
                            <>
                              <div className="flex justify-end w-1/4 h-12 grid-cols-12">
                                <Link href="/academic-industry/form-application">
                                  <button className="text-white bg-primary">
                                    <p className="px-5 py-3 text-white font-prompt text-subtitle-1">
                                      สมัครงาน
                                    </p>
                                  </button>
                                </Link>
                              </div>
                            </>
                          )}
                        </Observer>
                      </div>
                      <div className="w-full h-1 mt-4 mb-3 bg-secondary1" />
                      <Typography className="mb-3 ml-1 font-bold text-primary font-prompt text-heading-6">
                        <QueryBuilder className="mb-2 mr-2" />
                        12 มีนาคม - 24 ธันวาคม 2563
                      </Typography>
                      <div className="pt-2 pb-2">
                        <Typography className="mb-3 ml-1 font-bold text-primary font-prompt text-heading-6">
                          <Assignment className="mb-2 mr-2" />
                          รายละเอียดงาน
                        </Typography>
                        <Typography className="mb-3 ml-1 font-bold text-black font-prompt text-heading-6">
                          เฟรมการันตี อิกัวนาชัตเตอร์มะกัน นาฏยศาลาอัลบั้มไอติม อัลบั้ม
                          แพนด้าโง่เขลาผู้นำปัก ขคณนานพมาศ แพนด้า แชมเปญออร์เดอร์คาวบอย
                          คีตกวีวันเวย์ ไบเบิลปูอัดอัลบัม...
                        </Typography>
                      </div>
                      <div className="pt-2 pb-2">
                        <Typography className="mb-3 ml-1 font-bold text-primary font-prompt text-heading-6">
                          <CheckBox className="mb-2 mr-2" />
                          คุณสมบัติ
                        </Typography>
                        <Typography className="mb-3 ml-1 font-bold text-blackfont-prompt text-heading-6">
                          • เพศชาย/หญิง อายุ 25-35 ปี • วุฒิการศึกษาระดับ ปวส-ปริญาตรี
                          สาขาที่เกี่ยวข้อง • มีความรับผิดชอบ มีมนุษยสัมพันธ์ที่ดี •
                          มีประสบการณ์อย่างน้อย 1 ปี
                        </Typography>
                      </div>
                      <div className="pt-2 pb-2">
                        <Typography className="mb-3 ml-1 font-bold text-primary font-prompt text-heading-6">
                          <AttachMoney className="mb-2 mr-2" />
                          เงินเดือน
                        </Typography>
                        <Typography className="mb-3 ml-1 font-bold text-black font-prompt text-heading-6">
                          10,000 - 20,000 บาท
                        </Typography>
                      </div>
                      <div className="pt-2 pb-2">
                        <Typography className="mb-3 ml-1 font-bold text-primary font-prompt text-heading-6">
                          <FreeBreakfast className="mb-2 mr-2" />
                          สวัสดิการ
                        </Typography>
                        <Typography className="mb-3 ml-1 font-bold text-black font-prompt text-heading-6">
                          • ค่ารักษาพยาบาล • ค่ายานพาหนะ
                        </Typography>
                      </div>
                      <div className="pt-2 pb-2">
                        <Typography className="mb-3 ml-1 font-bold text-primary font-prompt text-heading-6">
                          <Business className="mb-2 mr-2" />
                          สถานที่ปฏิบัติงาน
                        </Typography>
                        <Typography className="mb-3 ml-1 font-bold text-black font-prompt text-heading-6">
                          Opsta (Thailand) Co.,Lt.d 126 ถนนประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ
                          10140
                        </Typography>
                      </div>
                      <div className="pt-2 pb-2">
                        <Typography className="mb-3 ml-1 font-bold text-primary font-prompt text-heading-6">
                          <QueryBuilder className="mb-2 mr-2" />
                          วันที่ทำการ
                        </Typography>
                        <Typography className="mb-3 ml-1 font-bold text-black font-prompt text-heading-6">
                          วันจันทร์ – วันศุกร์ เวลา 08.30 น. – 16.30 น.
                        </Typography>
                      </div>
                    </div>
                  </MaterialCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
}

export default AnnouncementSearch