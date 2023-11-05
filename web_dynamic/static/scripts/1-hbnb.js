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
});
