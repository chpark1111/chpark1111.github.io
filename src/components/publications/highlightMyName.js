export function highlightMyName(authors, myName) {
  const re = new RegExp(myName, 'gi'); 
  return authors.replace(re, `<span class="highlighted-name">${myName}</span>`);
}
  