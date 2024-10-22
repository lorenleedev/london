import {Badge, Card, Flex, Image} from "antd";
import {HeartFilled, HeartOutlined} from "@ant-design/icons";
import styles from "@/ui/components/molecule/JobCard/JobCard.module.scss";

interface JobCardProps {
  name: string;
  image?: string;
  favorite: boolean;
  title: string;
  applied: boolean;
  salary: string;
  benefit: string;
  location: string;
}

const JobCard = ({name, image, favorite, title, applied, salary, benefit, location}: JobCardProps) => {
  return (
    <Badge.Ribbon text={"지원완료"} style={{display: `${applied ? 'block' : 'none'}`}}>
      <Card
        onClick={() => {
          alert('클릭!')
        }}
        className={styles.card}>
        <Flex justify={'space-between'}>
          <Flex align={'center'} gap={8}>
            <Image
              width={36} src={image || '/images/dummy/anonymous.png'}
              preview={false}
              className={styles.profileImage}
              alt={'헤드헌터 프로필 이미지'}
            />
            <p className={styles.name}>{name}</p>
          </Flex>
          {favorite ?
            <HeartFilled className={styles.favoriteActive}/> :
            <HeartOutlined className={styles.favoriteDefault}/>}
        </Flex>
        <p className={styles.title}>{title}</p>
        <Flex vertical={true} className={'mt-8'}>
          <p>연봉: {salary}</p>
          <p>복지: {benefit}</p>
          <p>위치: {location}</p>
        </Flex>
      </Card>
    </Badge.Ribbon>
  )
}

export default JobCard;