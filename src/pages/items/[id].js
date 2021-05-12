/* eslint-disable import/no-unresolved */
import Head from "next/head"
import Header from "@/components/Header"
import Breadcrumb from "@/components/atoms/breadcrumb"
import ItemDetails from "@/components/organism/ItemDetails"
import Grid from "src/layout/Grid"
import { fetcher } from "@utils/fetcher"

const Id = (props) => {
  const { item, categories } = props

  return (
    <>
      <Head>
        <title>MercadoLibre - {item.title}</title>
      </Head>
      <Header />
      <Grid>
        <Breadcrumb data={categories} />
        <ItemDetails data={item} />
      </Grid>
    </>
  )
}

export async function getServerSideProps(context) {
  const data = await fetcher({
    url: `http://${context.req.headers.host}/api/items/${context.query.id}`,
    isUrlAbsolute: true,
  })

  return {
    props: {
      item: data.item,
      categories: data.categories,
    },
  }
}

export default Id
