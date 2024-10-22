import React from 'react';
import { render } from '@testing-library/react';
import SectionDivider from '@/ui/components/molecule/SectionDivider/index';

describe('SectionDivider 컴포넌트', () => {
  const content = '테스트 구분선';

  it('content가 정상적으로 렌더링되는지 확인', () => {
    const { getByText } = render(<SectionDivider content={content} />);

    expect(getByText(content)).toBeInTheDocument();
  });
});
