import {Button} from 'antd'
import {useRouter} from 'next/router'

function HomePage () {
  const router = useRouter()

  const handleClick = () => {
    router.push('/about')
  }

  return (
    <>
      <div className="font1">首页</div>
      <Button onClick={handleClick}>跳转到关于</Button>
    </>
  )
}

export default HomePage
