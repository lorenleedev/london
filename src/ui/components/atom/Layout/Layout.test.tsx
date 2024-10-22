import { render } from '@testing-library/react';
import CustomLayout from '@/ui/components/atom/Layout/index';

describe('Layout 컴포넌트', () => {
  it('자식 컴포넌트가 정상적으로 렌더링되는지 확인', () => {
    const { getByText } = render(
      <CustomLayout>
        <div>테스트 자식 요소</div>
      </CustomLayout>
    );
    expect(getByText('테스트 자식 요소')).toBeInTheDocument();
  });

  it('Layout에 올바른 테마가 적용되는지 확인', () => {
    const { container } = render(
      <CustomLayout>
        <div>테스트 자식</div>
      </CustomLayout>
    );

    const layout = container.querySelector('.ant-layout');
    expect(layout).toBeTruthy(); // Layout이 존재하는지 확인
    expect(layout).toHaveStyle('background-color: #ffffff'); // 배경 색상 확인
  });
});
