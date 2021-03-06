// /**
//  * Created by handsome_ll on 2017/3/10.
//  */
// // //less转换为css
// fis.match('*.less', {
//     parser: fis.plugin('less'),
//     rExt: '.css'
// });
//
// // 将less转换出来的css与其他css合并
// fis.match('*.{less,css}', {
//     packTo: '/css/aio.css'
// });

fis.match('::package', {
    postpackager: fis.plugin('loader', {
        allInOne: true
    })
});

fis.match('*.less', {
    parser: fis.plugin('less'),
    rExt: '.css',
    optimizer: fis.plugin('clean-css')

});

// 加 md5 已经内置
fis.match('*.{js,css,png}', {
    useHash: true
});

fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css'),
});

fis.match('*.html', {
    //invoke fis-optimizer-html-minifier 插件
    optimizer: fis.plugin('html-minifier')
});
// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
});
fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});
