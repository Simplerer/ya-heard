module.exports = {
  format_date: date => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
  titleize: title => {
    return title
      .split(' ')
      .map(word => word[0].toUpperCase() + word.substring(1))
      .join(' ');
  },
  lower: name => {
    return name.toLowerCase();
  }
};
