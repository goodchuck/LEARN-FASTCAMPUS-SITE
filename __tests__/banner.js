import { getByText, getByTitle, render, screen } from '@testing-library/react'
import Banner from '../components/Banner';
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
describe('Banner', () => {
    it('배너가 렌더링 되어야 한다', () => {
        const { getByText } = render (<Banner />);

        const banner = getByText('배너')

        expect(banner).toBeInTheDocument();
    })

})
