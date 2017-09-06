import { parse as parseQs } from 'qs'

const parseQuery = q => (q.startsWith('?')
  ? parseQs(q.slice(1))
  : parseQs(q))

export default parseQuery
