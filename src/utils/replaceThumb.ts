function replaceThumb(thumb: string) {
  return thumb.replace(/\w\.jpg/gi, "W.jpg");
}

export default replaceThumb;
