export const ShowReadableFileSize = (bytes) => {
  let units = ['bytes', 'KB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
  let unitNum = 0;
  while (bytes > 1024) {
    bytes = bytes / 1024;
    unitNum++;
  }
  return Math.round(bytes) + units[unitNum];
};
