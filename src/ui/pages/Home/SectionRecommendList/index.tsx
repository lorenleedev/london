import {Button, Col, Flex, Popover, Row} from "antd";
import Title from "antd/es/typography/Title";
import {InfoCircleFilled, RightOutlined} from "@ant-design/icons";
import JobList from "@/ui/components/organism/JobList";
import Section from "@/ui/components/atom/Section";
import styles from "@/ui/pages/Home/SectionRecommendList/SectionRecommendList.module.scss";

const SectionRecommendList = ({data}) => {
  return (
    <Section className={styles.sectionRecommendList}>
      <Row>
        <Col span={24}>
          <Flex gap={6} align={'center'} className={'mb-2'}>
            <Title level={3}>맞춤 공고</Title>
            <Popover content={
              <Flex gap={12} vertical={true}>
                <p className={styles.description}>내가 작성한 이력서 기반으로 추천합니다.<br/>
                  정확한 추천을 위해 이력서의 모든 항목을 입력해주세요!</p>
                <Button>이력서 업데이트하기<RightOutlined className={styles.buttonIcon}/></Button>
              </Flex>
            } title="맞춤공고란?" trigger="click">
              <InfoCircleFilled className={styles.triggerIcon}/>
            </Popover>
          </Flex>
          <JobList jobList={data}/>
        </Col>
      </Row>
    </Section>)
}

export default SectionRecommendList;