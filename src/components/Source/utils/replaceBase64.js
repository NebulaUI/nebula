export default (str, codeType) => {
  const replaceStr = codeType === 'HTML'
    ? 'src="path-to/nebula.jpg"'
    : 'src={nebula}'
  return str.replace(/src=".+?"/g, replaceStr)
}
