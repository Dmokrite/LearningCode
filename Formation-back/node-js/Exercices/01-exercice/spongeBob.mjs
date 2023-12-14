function toSpongebob(string) {
    return string
      .split('')
      .map((char) => {
        const upDown = Math.random() < 0.5;
        return upDown ? char.toUpperCase() : char.toLowerCase();
      })
      .join('');
}
  
export { toSpongebob };
  