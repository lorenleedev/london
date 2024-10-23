import { render } from '@testing-library/react';
import HighlightCard, { HighlightCardProps } from '@/ui/components/molecule/HighlightCard/index';

describe('HighlightCard 컴포넌트', () => {
  const props: HighlightCardProps = {
    image: '/image/test.png',
    alt: '테스트 이미지',
    highlight: '하이라이트 텍스트',
    description: '설명 텍스트',
  };

  it('이미지가 정상적으로 렌더링되는지 확인', () => {
    const { getByAltText } = render(<HighlightCard {...props} />);

    // 이미지의 alt 텍스트를 통해 이미지가 렌더링되었는지 확인
    const imgElement = getByAltText(props.alt);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', props.image);
  });

  it('highlight 텍스트가 정상적으로 렌더링되는지 확인', () => {
    const { getByText } = render(<HighlightCard {...props} />);

    const highlightElement = getByText(props.highlight);
    expect(highlightElement).toBeInTheDocument();
  });

  it('description 텍스트가 정상적으로 렌더링되는지 확인', () => {
    const { getByText } = render(<HighlightCard {...props} />);

    const descriptionElement = getByText(props.description);
    expect(descriptionElement).toBeInTheDocument();
  });
});
