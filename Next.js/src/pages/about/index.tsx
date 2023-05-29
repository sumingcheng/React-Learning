import Link from 'next/link';
import { Button } from 'antd';

const AboutStyle = () => {
  return (
    <style global jsx>{ `
      .font-red {
        color: midnightblue;
      }

      body {
        background: #f5f5f5;
      }
    ` }</style>
  )
}

function About () {
  return (
    <>
      <AboutStyle></AboutStyle>
      <div className="font-red">关于</div>
      <Button>
        <Link href="/">返回首页</Link>
      </Button>
    </>
  )
}

export default About
