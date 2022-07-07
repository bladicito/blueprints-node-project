const path = require('path');
const merge = require('merge-stream');
const utils = require('../utils');

module.exports = (gulp, plugins) => {
  const svgSpritesConfigs = [
    {
      src: './src/shared/assets/svg/icons/*.svg',
      dest: './src/shared/assets/svg',
    },
  ];

  return () => {
    const streams = [];

    utils.each(svgSpritesConfigs, (svgSpritesConfig) => {
      if (svgSpritesConfig && svgSpritesConfig.src && svgSpritesConfig.dest) {
        streams.push(
          gulp
            .src(svgSpritesConfig.src)
            .pipe(
              plugins.svgmin((file) => {
                const prefix = path.basename(file.relative, path.extname(file.relative));
                return {
                  multipass: true,
                  plugins: [
                    { removeViewBox: false },
                    {
                      name: 'cleanupIDs',
                      parmas: {
                        prefix: `${prefix}-`,
                        minify: true,
                      },
                    },
                  ],
                };
              })
            )
            .pipe(plugins.svgstore({ inlineSvg: true }))
            .pipe(gulp.dest(svgSpritesConfig.dest))
        );
      }
    });

    return streams.length ? merge(...streams) : Promise.resolve('resolved');
  };
};
