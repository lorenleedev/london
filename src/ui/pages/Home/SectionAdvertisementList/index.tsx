import Section from "@/ui/components/atom/Section";
import {Col, Flex, Row, Tag} from "antd";
import Title from "antd/es/typography/Title";
import JobList from "@/ui/components/organism/JobList";
import styles from "@/ui/pages/Home/SectionAdvertisementList/SectionAdvertisementList.module.scss";

const SectionAdvertisementList = ({data}) => {
  return (<Flex className={styles.background}>
    <Section>
      <Row>
        <Col span={24}>
          <Flex gap={6} align={'start'} className={'mb-2'}>
            <Title level={3}>추천 공고</Title><Tag color="purple">AD</Tag>
          </Flex>
          <JobList data={data}/>
        </Col>
      </Row>
    </Section>
  </Flex>)
}

export default SectionAdvertisementList;