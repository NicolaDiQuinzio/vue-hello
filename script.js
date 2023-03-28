const { createApp } = Vue;

createApp({
  data() {
    return {
      titolo: "hello world",
      color: "text-success",
      image:
        "https://www.purinashop.it/media/mageplaza/blog/post/c/u/curiosit_-cani.jpg  ",
    };
  },
}).mount("#app");
