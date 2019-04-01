$(function () {
    var productName = $("#productName");
    var productDepartment = $("#productDepartment");
    var productPrice = $("#productPrice");
    var productPicture = $("#productPicture");
    $("#btnProductAdd").click(function () {
        addProduct(
            productName.val(),
            productDepartment.val(),
            productPrice.val(),
            productPicture.val(),
            function (addedProduct) {
                alert("Added " + addedProduct.name + " to the database");
            }
        );
    });
});