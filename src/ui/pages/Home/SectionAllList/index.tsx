import {Col, Flex, Row} from "antd";
import Title from "antd/es/typography/Title";
import JobList from "@/ui/components/organism/JobList";
import Section from "@/ui/components/atom/Section";
import styles from "@/ui/pages/Home/SectionAllList/SectionAllList.module.scss";
import {JobCardProps} from "@/ui/components/molecule/JobCard";

interface SectionAllListProps {
  jobList: JobCardProps[];
}
const SectionAllList = ({jobList}: SectionAllListProps) => {
  return (
    <Section>
    <Row>
      <Col span={24}>
        <Flex gap={6} align={'center'} className={'mb-2'}>
          <Title level={3}>전체 공고</Title>
          <p className={styles.description}>총 382건</p>
        </Flex>
        <JobList jobList={jobList}/>
      </Col>
    </Row>
  </Section>)
}

export default SectionAllList;