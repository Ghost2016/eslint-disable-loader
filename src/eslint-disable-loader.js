module.exports = function(source) {
  let result = addEslintToJsFile(source, this.resourcePath)
  return result
}

/**
* @description add [/[*] eslint-disable [*]/] to javascript file
 * @param {String} fileStr file content before
 * @param {String} fileStr file path
 * @return {String} file content after 
 */
function addEslintToJsFile(fileStr, fileUrl) {
  const existRegex = new RegExp('\/[*] eslint\-disable [*]\/\n', 'g')
  const res = existRegex.exec(fileStr)
  const exist = res && res[0]
  if (exist) {
    console.log('File ' + fileUrl +  ' already been set.')
    return fileStr
  }
  fileStr = `/* eslint-disable */\n` + fileStr
  return fileStr
}
