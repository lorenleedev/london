import {Divider} from "antd";
import Section from "@/ui/components/atom/Section";
import styles from "@/ui/components/molecule/SectionDivider/SectionDivider.module.scss"
import {DividerProps} from "antd/es/divider";
import * as React from "react";
interface SectionDividerProps extends DividerProps{
  content: string;
}

const SectionDivider = ({
                          content,
                          ...rest
                        }: Readonly<SectionDividerProps>) => {
  return (
    <Section>
      <Divider {...rest}>
        <span className={styles.content}>{content}</span>
      </Divider>
    </Section>
  )
}

export default SectionDivider;