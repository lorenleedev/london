import { render } from '@testing-library/react';
import JobCard from '@/ui/components/molecule/JobCard/index';

describe('JobCard 컴포넌트', () => {
  const mockItem = {
    name: '홍길동',
    title: '백엔드 개발자',
    salary: '4000만원',
    benefit: '주 4일 근무, 리모트 근무 가능',
    location: '서울',
    favorite: false,
    applied: false,
  };

  it('JobCard가 정상적으로 렌더링되는지 확인', () => {
    const { getByText, getByAltText } = render(<JobCard {...mockItem} />);

    expect(getByText(mockItem.name)).toBeInTheDocument();
    expect(getByText(mockItem.title)).toBeInTheDocument();
    expect(getByText(`연봉: ${mockItem.salary}`)).toBeInTheDocument();
    expect(getByText(`복지: ${mockItem.benefit}`)).toBeInTheDocument();
    expect(getByText(`위치: ${mockItem.location}`)).toBeInTheDocument();
    expect(getByAltText('헤드헌터 프로필 이미지')).toBeInTheDocument();
  });

  it('applied가 true일 때 Badge가 표시되는지 확인', () => {
    const appliedItem = { ...mockItem, applied: true };
    const { getByText } = render(<JobCard {...appliedItem} />);

    expect(getByText('지원완료')).toBeInTheDocument();
  });

  it('applied가 false일 때 Badge가 표시되지 않는지 확인', () => {
    const { queryByText } = render(<JobCard {...mockItem} />);

    expect(queryByText('지원완료')).not.toBeVisible();
  });

  it('favorite가 true일 때 HeartFilled 아이콘이 렌더링되는지 확인', () => {
    const favoriteItem = { ...mockItem, favorite: true };
    const { getByTestId } = render(<JobCard {...favoriteItem} />);

    expect(getByTestId('filledHeart')).toBeInTheDocument();
  });

  it('favorite가 false일 때 HeartOutlined 아이콘이 렌더링되는지 확인', () => {
    const { getByTestId } = render(<JobCard {...mockItem} />);

    expect(getByTestId('outlinedHeart')).toBeInTheDocument();
  });
});
