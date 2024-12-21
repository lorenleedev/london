import {Button, Result} from "antd";

const ForbiddenPage = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="로그인된 회원만 볼 수 있는 페이지에요!"
      extra={<Button type="primary" href={'/'}>메인으로 돌아가기</Button>}
    />
  );
};

export default ForbiddenPage;
