const removeSelfClosingTags = str =>
  str.replace(/<.+\/>/g, component =>
    component.replace(/\s\//, '')
  )

export default removeSelfClosingTags
