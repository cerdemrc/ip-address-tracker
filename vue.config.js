module.exports = {
    css: {
      loaderOptions: {
        scss: {
            additionalData: `
                @import "@/assets/style/_colors.scss";
                @import "@/assets/style/common.scss";
            `,
        },
      },
    },
  };