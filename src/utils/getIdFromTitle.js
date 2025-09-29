const getIdFromTitle = (title) => {
  return title.toString()
    .toLocaleLowerCase()
    .replaceAll(' ', '-')
}

export default getIdFromTitle
