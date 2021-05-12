/* eslint-disable import/no-unresolved */
import Head from "next/head"
import Header from "@/components/Header"
import Breadcrumb from "@/components/atoms/breadcrumb"
import ResultWrapper from "@/components/molecules/results-wrapper"
import Grid from "src/layout/Grid"
import fetcher from "@utils/fetcher"

const Index = (props) => {
  const { search, items, categories } = props

  return (
    <>
      <Head>
        <title>MercadoLibre - {search}</title>
      </Head>
      <Header />
      <Grid>
        <Breadcrumb data={categories} />
        <ResultWrapper items={items} />
      </Grid>
    </>
  )
}

export async function getServerSideProps(context) {
  const data = await fetcher({
    url: `http://${context.req.headers.host}/api/items?q=${context.query.search}`,
    isUrlAbsolute: true,
  })

  return {
    props: {
      search: context.query.search,
      items: data.items,
      categories: data.categories,
    },
  }
}

export default Index
