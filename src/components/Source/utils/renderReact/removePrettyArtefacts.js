const removePrettyArtefacts = str => str.replace(/{\[.*?'/g, '{[\'')

export default removePrettyArtefacts
