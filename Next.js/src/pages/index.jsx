import { Button } from 'antd'
import Link from 'next/link'


function HomePage () {
  return (
    <>
      <div className="font1">首页</div>
      <Button>
        <Link href="/about">跳转到关于</Link>
      </Button>
    </>
  )
}

export default HomePage
