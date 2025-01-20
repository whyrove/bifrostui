const path = require('path');
const fs = require("fs-extra");

const coreDir = path.resolve(__dirname, '../packages/bui-core/src/index.ts');

const transformComponentName = (name) => {
  const newName = name[0].toLowerCase() + name.slice(1);
  return newName.replace(/([A-Z])/gm, `-$1`).toLowerCase()
}
const components = fs.readFileSync(coreDir, 'utf8')?.match(/(?<=export \* from '\.\/).*?(?=';$)/gm);
const test = components.map(item => {
  return {
    label: item,
    url: `http://localhost/cores/${transformComponentName(item)}`,
    referenceUrl: `https://bui.taopiaopiao.com/cores/${transformComponentName(item)}`,
    readySelector: ".dumi-default-previewer-demo",
    delay: 0,
    selectorExpansion: true,
    misMatchThreshold: 0.1,
    requireSameDimensions: true
  }
})

console.log(test, "测试")

