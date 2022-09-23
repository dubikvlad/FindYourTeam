import User from '@/features/pages/User'

export default function UserPage({ data }: any) {
  return <User data={data} />
}

export async function getServerSideProps() {
  const data = await (
    await fetch('http://localhost:5000/api/user/auth')
  )?.json()

  return {
    props: {
      data,
    },
  }
}
