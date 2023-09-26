import Banner from '@/components/Banner'
import Menu from '@/components/Menu'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      
      <Menu />
      
      <Banner />
      <div title='lectureList'>
        <h1>강의 목록</h1>
      </div>
    </div>
  )
}
