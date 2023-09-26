import { getByTitle, render, screen } from '@testing-library/react'
import Detail from '../src/app/detail/page'
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
describe('Detail', () => {
    it('메뉴가 렌더링 되어야 한다', () => {
        const { getByRole } = render (<Detail />);

        const menu = getByRole('navigation', {
            name : 'fastcampus',
        })

        expect(menu).toBeInTheDocument();
    })

    it('배너가 렌더링 되어야 한다', () => {
        const { getByRole } = render (<Detail />);

        const banner = getByRole('banner')

        expect(banner).toBeInTheDocument();
    })

    it('강의목록이 렌더링 되어야 한다', () => {
        const { getByTitle } = render (<Detail />);

        const lectureList = getByTitle('lectureList')

        expect(lectureList).toBeInTheDocument();
    })

    // it('renders a heading', () => {
    //     render(<Home />)

    //     const heading = screen.getByRole('heading', {
    //         name: /welcome to next\.js!/i,
    //     })

    //     expect(heading).toBeInTheDocument()
    // })
})
