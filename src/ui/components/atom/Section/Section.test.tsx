import { render, screen } from '@testing-library/react';
import Section from '@/ui/components/atom/Section/index';

describe('Section 컴포넌트', () => {
  test('children이 정상적으로 렌더링되는지 확인', () => {
    render(<Section>테스트 콘텐츠</Section>);
    const sectionElement = screen.getByText('테스트 콘텐츠') ;
    expect(sectionElement).toBeInTheDocument();
  });

  test('props로 전달된 className이 적용되는지 확인', () => {
    render(<Section className="custom">테스트 콘텐츠</Section>);
    const sectionElement = screen.getByText('테스트 콘텐츠');
    expect(sectionElement).toHaveClass('custom');
  });

  test('나머지 props가 section 요소에 전달되는지 확인', () => {
    render(<Section id="customId">테스트 콘텐츠</Section>);
    const sectionElement = screen.getByText('테스트 콘텐츠');
    expect(sectionElement).toHaveAttribute('id', 'customId');
  });
});
