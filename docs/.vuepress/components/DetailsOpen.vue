<script>
export default {
	mounted() {
		console.log("Hello, test file !")

		var detailsCollection = document.getElementsByTagName("details")
		var detailsArray = Array.from(detailsCollection)
		detailsArray.forEach(detail => detail.open = true)
	}
}
</script>
