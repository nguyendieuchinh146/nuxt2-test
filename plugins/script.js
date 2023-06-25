const convertedLink = link => {
  if(link === undefined) return '';
  return `${link.replace(/[(:].*$/, "").replace(/[^\w\s]/g, "").replace(/\s\s+/g, ' ').trim().replace(/\s/g, "-").toLowerCase()}` 
}

// const sumFn = (a, b) => {
//   return a + b 
// }

const getImageLink = (path = '', src = '') => {
  return require(`@/assets/img/fansipan-pic7.jpeg`);
  return require(`@/assets/img/${path}/${src}`);
}


export default ({ app }, inject) => {
    inject('linkHandle', convertedLink);
    inject('getImageLink', getImageLink);

    // inject('sum', sumFn);
}
