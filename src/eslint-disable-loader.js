module.exports = function(source) {
  let result = addEslintToJsFile(source, this.resourcePath)
  return result
}

/**
 * @description 给js文件添加eslint-disable
 * @param {String} fileStr 文件内容
 * @param {String} fileStr 文件路径
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
