<template></template>

<script>
export default {
	mounted() {
		var detailsCollection = document.getElementsByTagName("details")
		var detailsArray = Array.from(detailsCollection)
		detailsArray.forEach(detail => detail.open = true)
	}
}
</script>
