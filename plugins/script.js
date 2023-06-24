const convertedLink = link => {
  if(link === undefined) return '';
  return `${link.replace(/[(:].*$/, "").replace(/[^\w\s]/g, "").replace(/\s\s+/g, ' ').trim().replace(/\s/g, "-").toLowerCase()}` 
}

// const sumFn = (a, b) => {
//   return a + b 
// }


export default ({ app }, inject) => {
    inject('linkHandle', convertedLink);

    // inject('sum', sumFn);
}
