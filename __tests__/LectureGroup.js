import { getByText, getByTitle, render, screen } from '@testing-library/react'
import LectureGroup from '../components/lecture/LectureGroup';
import '@testing-library/jest-dom'

// describe('App', () => {
//     it('메뉴가 렌더링 되어야 한다', () => {
//         const { getByRole } = render (<Index />);

//         const menu = getByRole('nav', {
//             name : /fastcampus/g,
//         })

//         expectmenu(menu).toBeInTheDocument();
//     })
// })

// CH04-03.페이지 생성하기 테스트 케이스는 당장은 깨져도 되지만 테스트 기반 코딩을 하는게 중요하다.
describe('강의 목록은', () => {
    it('제목을 가지고 있어야 한다', () => {
        const { getByRole } = render (<LectureGroup />);

        const lectureTitle = getByRole('heading',{
            name: '이번 주 베스트셀링 강의'
        })

        expect(lectureTitle).toBeInTheDocument();
    })

    it('뱃지를 가지고 있어야 한다', () => {
        const { getByText } = render (<LectureGroup />);

        const badge = getByText('Best')

        expect(badge).toBeInTheDocument();
    })
})
