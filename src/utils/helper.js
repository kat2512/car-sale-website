import { format as formatDate } from 'date-fns'

export const convertDateByFormat = (value, format = 'dd/MM/yyyy') => {
  if (value == '' || typeof value == undefined) return ''

  return formatDate(value, format)
}

export const formatNumber = (value) => {
  if (value == '' || typeof value == undefined) return ''

  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}