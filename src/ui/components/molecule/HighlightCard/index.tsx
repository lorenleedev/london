import {Card, Flex, Image} from "antd";
import styles from "@/ui/components/molecule/HighlightCard/HighlightCard.module.scss";

export interface HighlightCardProps {
  image: string;
  alt: string;
  highlight: string;
  description: string;
}

const HighlightCard = ({image, alt, highlight, description}: HighlightCardProps) => {
  return (
    <Card className={styles.card}>
      <Flex align={'center'} justify={'center'} gap={2}>
        <Image width={50} src={image} preview={false} alt={alt}/>
        <p className={styles.highlight}>{highlight}</p>
      </Flex>
      <p className={styles.description}>{description}</p>
    </Card>
  )
}

export default HighlightCard;