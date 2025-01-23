<template>
  <div class="h-screen overflow-hidden">
    <!-- Progress Dots -->
    <div class="fixed top-1/2 left-5 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      <div
        v-for="(page, index) in pages"
        :key="index"
        class="flex items-center gap-2 cursor-pointer"
        @click="scrollToPage(index)"
      >
        <div
          class="w-3 h-3 rounded-full transition-all"
          :class="{ 'scale-125': currentPage === index }"
          :style="{
            backgroundColor: currentPage === index
              ? page.activeDotColor
              : activePage.otherDotColor || 'rgba(255, 255, 255, 0.5)',
          }"
        ></div>
        <span
          class="text-sm transition-all"
          :class="{ 'font-bold': currentPage === index }"
          :style="{
            color: currentPage === index
              ? page.activeDotNameColor
              : activePage.otherDotColor || 'rgba(255, 255, 255, 0.8)',
          }"
        >
          {{ page.name }}
        </span>
      </div>
    </div>

    <!-- Pages -->
    <div
      v-for="(page, index) in pages"
      :key="index"
      class="h-screen flex justify-center items-center text-5xl font-bold transition-colors duration-500"
      :style="{
        backgroundColor: page.backgroundColor,
        color: page.textColor,
        backgroundImage: page.backgroundImage
          ? `url(${page.backgroundImage})`
          : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }"
      :ref="'page' + index"
    >
      <div class="">
        {{ page.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 0,
      pages: [
        { name: "紅色", backgroundColor: "#9d2933", textColor: "white", activeDotColor: "white", activeDotNameColor: "white", backgroundImage: "/images/爱上紫禁城-杏花.jpg" },
        { name: "黃色", backgroundColor: "#e29c45", textColor: "white", activeDotColor: "white", activeDotNameColor: "white", backgroundImage: "https://via.placeholder.com/1920x1080/e29c45/ffffff" },
        { name: "綠色", backgroundColor: "#057748", textColor: "white", activeDotColor: "white", activeDotNameColor: "white", backgroundImage: "https://via.placeholder.com/1920x1080/057748/ffffff" },
        { name: "藍色", backgroundColor: "#065279", textColor: "white", activeDotColor: "white", activeDotNameColor: "white", backgroundImage: "https://via.placeholder.com/1920x1080/065279/ffffff" },
        { name: "紫色", backgroundColor: "#815476", textColor: "white", activeDotColor: "white", activeDotNameColor: "white", backgroundImage: "https://via.placeholder.com/1920x1080/815476/ffffff" },
        { name: "蒼色", backgroundColor: "#7397ab", textColor: "white", activeDotColor: "white", activeDotNameColor: "white", backgroundImage: "https://via.placeholder.com/1920x1080/7397ab/ffffff" },
        { name: "水色", backgroundColor: "#d2f0f4", textColor: "white", activeDotColor: "white", activeDotNameColor: "white", backgroundImage: "https://via.placeholder.com/1920x1080/d2f0f4/ffffff" },
        {
          name: "白",
          backgroundColor: "#f2f2f2",
          textColor: "black",
          activeDotColor: "black",
          activeDotNameColor: "black",
          otherDotColor: "rgba(0, 0, 0, 0.2)",
          backgroundImage: "https://via.placeholder.com/1920x1080/f2f2f2/000000",
        },
        { name: "黑", backgroundColor: "#1a1a1a", textColor: "white", activeDotColor: "white", activeDotNameColor: "white", backgroundImage: "https://via.placeholder.com/1920x1080/1a1a1a/ffffff" },
        { name: "金", backgroundColor: "#eacd76", textColor: "white", activeDotColor: "white", activeDotNameColor: "white", backgroundImage: "https://via.placeholder.com/1920x1080/eacd76/ffffff" },
      ],
    };
  },
  computed: {
    activePage() {
      return this.pages[this.currentPage];
    },
  },
  methods: {
    scrollToPage(index) {
      this.currentPage = index;
      const target = this.$refs[`page${index}`][0];
      target.scrollIntoView({ behavior: "smooth" });
    },
    handleWheel(event) {
      if (event.deltaY > 0) {
        this.currentPage = Math.min(this.currentPage + 1, this.pages.length - 1);
      } else {
        this.currentPage = Math.max(this.currentPage - 1, 0);
      }
      this.scrollToPage(this.currentPage);
    },
  },
  mounted() {
    window.addEventListener("wheel", this.handleWheel);
  },
  beforeDestroy() {
    window.removeEventListener("wheel", this.handleWheel);
  },
};
</script>

<style>
/* Add any custom styles if needed */
</style>