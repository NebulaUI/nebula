const removeIconData = str => str.replace(/icon={{.+id:\s'([a-zA-Z]+).+}}/g, (string, group) =>
  string.replace(/{.+id:.+}/g, `{${group}}`)
)

export default removeIconData
