"use client"
import {Badge, Button, Card, Col, Divider, Flex, Image, List, Popover, Row, Tag} from "antd";
import {Content} from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import Section from "@/ui/components/atom/Section";
import Paragraph from "antd/es/typography/Paragraph";
import {HeartFilled, HeartOutlined, InfoCircleFilled, RightOutlined} from "@ant-design/icons";

const data = [{
  title: '헤드헌터가 올린 제목, 프론트엔드 개발',
  profile: '',
  name: '뉴욕파트너스',
  salary: '협의',
  location: '서울 강남',
  benefit: '식대포함, 자율 출퇴근',
  favorite: false,
  applied: false
},
  {
    title: '헤드헌터가 올린 제목, 인프라 개발',
    profile: '',
    name: '뉴욕파트너스',
    salary: '협의',
    location: '서울 강남',
    benefit: '식대포함, 자율 출퇴근',
    favorite: true,
    applied: false
  },
  {
    title: '헤드헌터가 올린 제목, 데이터 사이언티스트',
    profile: '',
    name: '뉴욕파트너스',
    salary: '협의',
    location: '서울 강남',
    benefit: '식대포함, 자율 출퇴근',
    favorite: false,
    applied: true
  },
  {
    title: '헤드헌터가 올린 제목, 백엔드 개발',
    profile: '',
    name: '뉴욕파트너스',
    salary: '협의',
    location: '서울 강남',
    benefit: '식대포함, 자율 출퇴근',
    favorite: false,
    applied: false
  }
];

const data2 = [{
  title: '헤드헌터가 올린 제목, 프론트엔드 개발',
  profile: '',
  name: '뉴욕파트너스',
  salary: '협의',
  location: '서울 강남',
  benefit: '식대포함, 자율 출퇴근',
  favorite: false
},
  {
    title: '헤드헌터가 올린 제목, 인프라 개발',
    profile: '',
    name: '뉴욕파트너스',
    salary: '협의',
    location: '서울 강남',
    benefit: '식대포함, 자율 출퇴근',
    favorite: true
  },
  {
    title: '헤드헌터가 올린 제목, 데이터 사이언티스트',
    profile: '',
    name: '뉴욕파트너스',
    salary: '협의',
    location: '서울 강남',
    benefit: '식대포함, 자율 출퇴근',
    favorite: false
  },
  {
    title: '헤드헌터가 올린 제목, 백엔드 개발',
    profile: '',
    name: '뉴욕파트너스',
    salary: '협의',
    location: '서울 강남',
    benefit: '식대포함, 자율 출퇴근',
    favorite: false
  },
  {
    title: '헤드헌터가 올린 제목, 백엔드 개발',
    profile: '',
    name: '뉴욕파트너스',
    salary: '협의',
    location: '서울 강남',
    benefit: '식대포함, 자율 출퇴근',
    favorite: false
  },
  {
    title: '헤드헌터가 올린 제목, 백엔드 개발',
    profile: '',
    name: '뉴욕파트너스',
    salary: '협의',
    location: '서울 강남',
    benefit: '식대포함, 자율 출퇴근',
    favorite: false
  },
  {
    title: '헤드헌터가 올린 제목, 백엔드 개발',
    profile: '',
    name: '뉴욕파트너스',
    salary: '협의',
    location: '서울 강남',
    benefit: '식대포함, 자율 출퇴근',
    favorite: false
  },
  {
    title: '헤드헌터가 올린 제목, 백엔드 개발',
    profile: '',
    name: '뉴욕파트너스',
    salary: '협의',
    location: '서울 강남',
    benefit: '식대포함, 자율 출퇴근',
    favorite: false
  },
  {
    title: '헤드헌터가 올린 제목, 백엔드 개발',
    profile: '',
    name: '뉴욕파트너스',
    salary: '협의',
    location: '서울 강남',
    benefit: '식대포함, 자율 출퇴근',
    favorite: false
  }
];

const HomePage = () => {
  return (
    <Content>
      <Section>
        <Row justify={'center'}>
          <Col span={24}>
            <Paragraph style={{fontSize: '18px', textAlign: 'center', marginBottom: '24px'}}>비트윈잡스는 헤드헌터와 구직자를
              연결해드려요!</Paragraph>
            <Flex align={'center'} justify={'center'} style={{marginBottom: '32px'}} gap={'small'}>
              <Button size={'large'} color={'primary'} variant={'solid'}>이력서 업로드하기</Button>
              <Button size={'large'} color={'primary'} variant={'outlined'}>구직자 찾기</Button>
            </Flex>
          </Col>
          <Col>
            <Flex gap={36}>
              <Card style={{width: '300px'}}>
                <Flex align={'center'} justify={'center'} gap={2}>
                  <Image width={50} src={'/images/pages/home/resumes.png'} preview={false} alt={'이력서 아이콘'}/>
                  <Paragraph style={{fontSize: '44px', margin: 0, fontWeight: 'bold'}}>83건</Paragraph>
                </Flex>
                <Paragraph style={{fontSize: '16px', margin: 0, textAlign: 'center'}}>오늘 업데이트된 구직자 이력서</Paragraph>
              </Card>
              <Card style={{width: '300px'}}>
                <Flex align={'center'} justify={'center'} gap={2}>
                  <Image width={50} src={'/images/pages/home/jobs.png'} preview={false} alt={'채용공고 아이콘'}/>
                  <Paragraph style={{fontSize: '44px', margin: 0, fontWeight: 'bold'}}>83건</Paragraph>
                </Flex>
                <Paragraph style={{fontSize: '16px', margin: 0, textAlign: 'center'}}>오늘 업데이트된 헤드헌터 공고</Paragraph>
              </Card>
              <Card style={{width: '300px'}}>
                <Flex align={'center'} justify={'center'} gap={2}>
                  <Image width={50} src={'/images/pages/home/proposals.png'} preview={false} alt={'과녁 아이'}/>
                  <Paragraph style={{fontSize: '44px', margin: 0, fontWeight: 'bold'}}>183건</Paragraph>
                </Flex>
                <Paragraph style={{fontSize: '16px', margin: 0, textAlign: 'center'}}>오늘 헤드헌터의 제안</Paragraph>
              </Card>
            </Flex>
          </Col>
        </Row>
      </Section>
      <Flex style={{background: '#f5f5f5'}}>
        <Section>
          <Row>
            <Col span={24}>
              <Flex gap={6} align={'start'} style={{marginBottom: '8px'}}>
                <Title level={3}>추천 공고</Title><Tag color="purple">AD</Tag>
              </Flex>
              <List
                grid={{gutter: 16, column: 4}}
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <Badge.Ribbon text={"지원완료"} style={{display: `${item.applied ? 'block': 'none'}`}}>
                      <Card onClick={() => {
                        alert('클릭!')
                      }} style={{cursor: 'pointer', minHeight: 250}}>
                        <Flex justify={'space-between'}>
                          <Flex align={'center'} gap={8}>
                            <Image width={36} src={'/images/dummy/anonymous.png'} preview={false}
                                   style={{borderRadius: '10px', background: '#e9eaeb', padding: '4px'}} alt={'헤드헌터 프로필 이미지'}/>
                            <Paragraph style={{fontSize: '16px', margin: 0}}>{item.name}</Paragraph>
                          </Flex>
                          {item.favorite ? <HeartFilled style={{fontSize: '20px', color: 'gray'}}/> :
                            <HeartOutlined style={{fontSize: '20px', color: 'gray'}}/>}
                        </Flex>
                        <Paragraph
                          style={{
                            fontSize: '20px',
                            marginTop: '12px',
                            fontWeight: 'bold',
                            minHeight: 63
                          }}>{item.title}</Paragraph>
                        <Paragraph style={{marginBottom: '2px'}}>연봉: {item.salary}</Paragraph>
                        <Paragraph style={{marginBottom: '2px'}}>복지: {item.benefit}</Paragraph>
                        <Paragraph style={{marginBottom: '2px'}}>위치: {item.location}</Paragraph>
                      </Card>
                    </Badge.Ribbon>
                  </List.Item>
                )}>
              </List>
            </Col>
          </Row>
        </Section>
      </Flex>
      <Section>
        <Row>
          <Col span={24}>
            <Flex gap={6} align={'center'} style={{marginBottom: '8px'}}>
              <Title level={3}>맞춤 공고</Title>
              <Popover content={
                <Flex vertical={true}>
                  <Paragraph style={{fontSize: '14px', lineHeight: 1.3}}>내가 작성한 이력서 기반으로 추천합니다.<br/>
                    정확한 추천을 위해 이력서의 모든 항목을 입력해주세요!</Paragraph>
                  <Button>이력서 업데이트하기<RightOutlined style={{fontSize: '10px'}}/></Button>
                </Flex>
              } title="맞춤공고란?" trigger="click">
                <InfoCircleFilled style={{margin: '0 0 11px 2px', color: 'gray'}}/>
              </Popover>
            </Flex>
            <List
              grid={{gutter: 16, column: 4}}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Card onClick={() => {
                    alert('클릭!')
                  }} style={{cursor: 'pointer', minHeight: 250}}>
                    <Flex justify={'space-between'}>
                      <Flex align={'center'} gap={8}>
                        <Image width={36} src={'/images/dummy/anonymous.png'} preview={false}
                               style={{borderRadius: '10px', background: '#e9eaeb', padding: '4px'}} alt={'헤드헌터 프로필 이미지'}/>
                        <Paragraph style={{fontSize: '16px', margin: 0}}>{item.name}</Paragraph>
                      </Flex>
                      {item.favorite ? <HeartFilled style={{fontSize: '20px', color: 'gray'}}/> :
                        <HeartOutlined style={{fontSize: '20px', color: 'gray'}}/>}
                    </Flex>
                    <Paragraph
                      style={{
                        fontSize: '20px',
                        marginTop: '12px',
                        fontWeight: 'bold',
                        minHeight: 63
                      }}>{item.title}</Paragraph>
                    <Paragraph style={{marginBottom: '2px'}}>연봉: {item.salary}</Paragraph>
                    <Paragraph style={{marginBottom: '2px'}}>복지: {item.benefit}</Paragraph>
                    <Paragraph style={{marginBottom: '2px'}}>위치: {item.location}</Paragraph>
                  </Card>
                </List.Item>
              )}>
            </List>
          </Col>
        </Row>
      </Section>
      <Section>
        <Divider orientation="right"><Paragraph style={{color: "gray", margin: 0}}>매일 새로운 공고가 올라와요!</Paragraph></Divider>
      </Section>
      <Section>
        <Row>
          <Col span={24}>
            <Flex gap={6} align={'center'} style={{marginBottom: '8px'}}>
              <Title level={3}>전체 공고</Title>
              <Paragraph style={{fontSize: '16px', margin: '0 0 8px 4px'}}>총 382건</Paragraph>
            </Flex>
            <List
              grid={{gutter: 16, column: 4}}
              dataSource={data2}
              renderItem={(item) => (
                <List.Item>
                  <Card onClick={() => {
                    alert('클릭!')
                  }} style={{cursor: 'pointer', minHeight: 250, boxShadow: '1px 2px 3px -2px rgba(0, 0, 0, 0.2)'}}>
                    <Flex justify={'space-between'}>
                      <Flex align={'center'} gap={8}>
                        <Image width={36} src={'/images/dummy/anonymous.png'} preview={false}
                               style={{borderRadius: '10px', background: '#e9eaeb', padding: '4px'}} alt={'헤드헌터 프로필 이미지'}/>
                        <Paragraph style={{fontSize: '16px', margin: 0}}>{item.name}</Paragraph>
                      </Flex>
                      {item.favorite ? <HeartFilled style={{fontSize: '20px', color: 'gray'}}/> :
                        <HeartOutlined style={{fontSize: '20px', color: 'gray'}}/>}
                    </Flex>
                    <Paragraph
                      style={{
                        fontSize: '20px',
                        marginTop: '12px',
                        fontWeight: 'bold',
                        minHeight: 63
                      }}>{item.title}</Paragraph>
                    <Paragraph style={{marginBottom: '2px'}}>연봉: {item.salary}</Paragraph>
                    <Paragraph style={{marginBottom: '2px'}}>복지: {item.benefit}</Paragraph>
                    <Paragraph style={{marginBottom: '2px'}}>위치: {item.location}</Paragraph>
                  </Card>
                </List.Item>
              )}>
            </List>
          </Col>
        </Row>
      </Section>
    </Content>
  )
}

export default HomePage;