import Banner from '@/components/Banner'
import Menu from '@/components/Menu'
import LectureGroup from '@/components/lecture/LectureGroup'
import Image from 'next/image'

export default function Detail() {
  return (
    <div>
      <h1>Detail 페이지</h1>

      <Menu />
      <Banner />
      <LectureGroup></LectureGroup>
      <div title='lectureList'>
        <h1>강의 목록</h1>
      </div>
    </div>
  )
}
