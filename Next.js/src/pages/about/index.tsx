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
      <div className="font-red">About</div>
    </>
  )
}

export default About
