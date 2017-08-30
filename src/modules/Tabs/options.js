const MAX_LIST_ITEMS = 10

const buildList = (maxItems, list = [], curr = 0) => {
  if (curr === parseInt(maxItems, 10)) {
    return list
  }

  list.push(curr)

  return buildList(maxItems, list, curr + 1)
}

const options = qtyTabs => ([{
  title: '',
  options: [
    {
      type: 'select',
      stateKey: 'qtyTabs',
      label: 'Quantity',
      options: buildList(MAX_LIST_ITEMS).map(item => ({
        value: item,
        label: item
      }))
    },
    {
      type: 'select',
      stateKey: 'initialActiveIndex',
      label: 'Initial active index',
      options: buildList(qtyTabs).map(item => ({
        value: item,
        label: item
      }))
    }
  ]
}])

export default options
