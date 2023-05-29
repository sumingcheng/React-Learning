const AboutStyle = () => {
  return (
    <style global jsx>{ `
      .font-red {
        color: midnightblue;
      }

      div {
        background: orange;
      }
    ` }</style>
  )
}

function About () {
  return (
    <>
      <AboutStyle></AboutStyle>
      <div className="font-red">关于</div>
    </>
  )
}

export default About
