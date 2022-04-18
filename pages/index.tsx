import Head from 'next/head'

import styled from '@emotion/styled'

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Home = () => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main >
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

      </Main>

    </div>
  )
}
export default Home