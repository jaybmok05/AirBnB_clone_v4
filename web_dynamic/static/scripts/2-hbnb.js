$(document).ready(function () {
    const amenities = {};

    function updateAmenitiesText() {
        const sortedAmenities = Object.keys(amenities).sort().join(", ");
        $(".amenities h4").text(sortedAmenities);
    }

    $("li input[type=checkbox]").on("change", function () {
        const { name, id } = $(this).data();

        if (this.checked) {
            amenities[name] = id;
        } else {
            delete amenities[name];
        }

        updateAmenitiesText();
    });
    

    $.getJSON("http://0.0.0.0:5001/api/v1/status/", (data) => {
	if (data.status === "OK") {
		$("div#api_status").addClass("available");
	} else {
		$("div#api_status").removeClass("available");
	}
    });
});
