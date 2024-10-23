import {Button, Col, Flex, Row} from "antd";
import Section from "@/ui/components/atom/Section";
import HighlightCard, {HighlightCardProps} from "@/ui/components/molecule/HighlightCard";
import styles from "@/ui/pages/Home/SectionTop/SectionTop.module.scss";

const dummy: HighlightCardProps[] = [
  {
    image: "/images/pages/home/resumes.png",
    alt: "이력서 아이콘",
    highlight: "83건",
    description: "오늘 업데이트된 구직자 이력서"
  },
  {
    image: "/images/pages/home/jobs.png",
    alt: "채용공고 아이콘",
    highlight: "83건",
    description: "오늘 업데이트된 헤드헌터 공고"
  },
  {
    image: "/images/pages/home/proposals.png",
    alt: "과녁 아이콘",
    highlight: "183건",
    description: "오늘 헤드헌터의 제안"
  }
]

const Index = () => {
  return (
    <Section>
      <Row justify={'center'}>
        <Col span={24}>
          <p className={styles.heading}>
            비트윈잡스는 헤드헌터와 구직자를 연결해드려요!
          </p>
          <Flex align={'center'} justify={'center'} gap={'small'} className={'mb-8'}>
            <Button size={'large'} color={'primary'} variant={'solid'}>이력서 업로드하기</Button>
            <Button size={'large'} color={'primary'} variant={'outlined'}>구직자 찾기</Button>
          </Flex>
        </Col>
        <Col>
          <Flex gap={36}>
            {
              dummy.map((data, index) => {
                return (
                  <HighlightCard key={index} {...data}/>
                )
              })
            }
          </Flex>
        </Col>
      </Row>
    </Section>
  )
}

export default Index;