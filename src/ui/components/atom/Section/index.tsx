import styles from './Section.module.scss';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Section = ({children, className = '', ...rest}: Readonly<SectionProps>) => {
  return(
    <section className={`${styles.section} ${className || ''}`} {...rest}>
      {children}
    </section>
  )
}

export default Section;