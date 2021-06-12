// const aliasPathsToResolve = [
//     { name: 'components', path: path.resolve(__dirname, './components') },
//     { name: 'Common', path: path.resolve(__dirname, '../../common/react/') },
// ]
// module.exports = () => {
//     return  {
//         webpack(config, { defaultLoaders }) {
//             config.module.rules.push({
// 	        test: /\.(js|jsx)$/,
// 	        include: [path.resolve(__dirname, '../../common/react/')],
// 	        use: [defaultLoaders.babel],
// 	    })

//             /** Resolve aliases */
// 	    aliasPathsToResolve.forEach((module) => {
// 	        config.resolve.alias[module.name] = module.path
// 	    })
//         }
//     }
// }
