export const getIdFromUrl = (url: string | undefined) => {
  if (url) {
    const urlParts = url.split('/');
    const peopleIndex = urlParts.indexOf('people');
    return urlParts[peopleIndex + 1];
  }
  return '1';
};
