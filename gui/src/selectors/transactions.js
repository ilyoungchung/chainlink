import build from 'redux-object'

export default ({transactions}) => (
  transactions.currentPage && transactions
    .currentPage
    .map(id => build(transactions, 'items', id))
    .filter(t => t)
)
