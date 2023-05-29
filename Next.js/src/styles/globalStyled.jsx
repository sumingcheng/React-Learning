export const GlobalStyled = () => (
  <style jsx global>{`
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
    }
  `}</style>
)

export const AboutStyle = () => {
  return (
    <style global jsx>{`
      .font-red {
        color: orange;
        font-size: large;
      }

      body {
        background: #f5f5f5;
      }
    `}</style>
  )
}
