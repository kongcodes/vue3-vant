module.exports = () => {
  // console.log(file); // undefined

  // const designWidth = __dirname.includes(path.join('node_modules', 'vant'))
  //   ? 375
  //   : 375;
  // console.log(ctx);
  // console.log(designWidth);
  // console.log(__dirname);
  // console.log(__filename);
  // console.log(path.resolve('./'));
  // console.log(process.cwd());
  return {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 375,
        viewportUnit: 'vw',
      },
    },
  };
};
