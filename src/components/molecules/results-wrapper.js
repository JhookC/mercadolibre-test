/* eslint-disable import/no-unresolved */
import List from "@/components/atoms/list"
import Item from "@/components/atoms/item"
import NoResults from "@/components/atoms/no-results"

const ResultWrapper = (props) => {
  const { items } = props

  return (
    <List customClasses="bkgd--white">
      {items.length > 0 ? (
        <>
          {items.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Item data={item} key={index} />
          ))}
        </>
      ) : (
        <NoResults />
      )}
    </List>
  )
}

export default ResultWrapper
