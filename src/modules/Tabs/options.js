
const MAX_LIST_ITEMS = 10

const buildTabs = (list = [], curr = 0) => {
  if (curr === MAX_LIST_ITEMS) {
    return list
  }
  list.push(curr)
  return buildTabs(list, curr + 1)
}

const options = [{
  title: 'Tabs',
  options: [
    {
      type: 'select',
      stateKey: 'qtyTabs',
      label: 'Quantity of tabs',
      options: buildTabs().map(item => ({
        value: item,
        label: item
      }))
    },
    {
      type: 'select',
      stateKey: 'initialActiveIndex',
      label: 'Initial active index',
      options: [
        {
          value: 0,
          label: 0
        },
        {
          value: 1,
          label: 1
        },
        {
          value: 2,
          label: 2
        }
      ]
    }
  ]
}]

export default options
