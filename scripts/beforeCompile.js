const fs = require('fs')
const path = require('path')
const ncp = require('ncp').ncp

module.exports = function (context) {
  const dir_nm = path.join(context.opts.projectRoot, 'node_modules')
  const dir_www = path.join(context.opts.projectRoot, 'www', 'lib')
  const modules_to_use = [
    'onsenui',
  ]

  // copy node modules to use into www/
  modules_to_use.forEach(m => {
    const dir_target = path.join(dir_nm, m)
    const dir_dest = path.join(dir_www, m)

    // check whether the dest dir already exists
    if (fs.existsSync(dir_dest)) return

    // copy
    ncp(dir_target, dir_dest, (err) => {
      if (err) console.log(err)
    })
  })
}
