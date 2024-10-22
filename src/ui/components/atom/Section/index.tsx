const Section = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  return(
    <section style={{maxWidth: '1400px', margin: '80px auto'}}>
      {children}
    </section>
  )
}

export default Section;