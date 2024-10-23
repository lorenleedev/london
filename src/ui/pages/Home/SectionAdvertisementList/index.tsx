import Section from "@/ui/components/atom/Section";
import {Col, Flex, Row, Tag} from "antd";
import Title from "antd/es/typography/Title";
import JobList from "@/ui/components/organism/JobList";
import styles from "@/ui/pages/Home/SectionAdvertisementList/SectionAdvertisementList.module.scss";
import {JobCardProps} from "@/ui/components/molecule/JobCard";

interface SectionAdvertisementListProps {
  jobList: JobCardProps[];
}
const SectionAdvertisementList = ({jobList}: SectionAdvertisementListProps) => {
  return (<Flex className={styles.background}>
    <Section>
      <Row>
        <Col span={24}>
          <Flex gap={6} align={'start'} className={'mb-2'}>
            <Title level={3}>추천 공고</Title><Tag color="purple">AD</Tag>
          </Flex>
          <JobList jobList={jobList}/>
        </Col>
      </Row>
    </Section>
  </Flex>)
}

export default SectionAdvertisementList;