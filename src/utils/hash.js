export default function (obj) {
  let hash = 0
  let i
  let chr
  let len
  let str

  const type = typeof obj
  switch (type) {
    case 'object':
      str = JSON.stringify(obj)
      break
    case 'string':
      str = obj
      break
    default:
      str = obj ? obj.toString() : ''
      break
  }

  if (str.length === 0) return hash
  for (i = 0, len = str.length; i < len; i++) {
    chr = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash.toString(36)
}
