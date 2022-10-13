<template></template>

<script>
export default {
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "https://viewer.diagrams.net/js/viewer-static.min.js"
    );
    plugin.async = true;
    document.body.appendChild(plugin);
  }
}
</script>
