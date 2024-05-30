$("#navigationbar").css("display", "none")
$("#topNavBar").css("display", "none")
$("#signInForm").css("display", "block")
$("#sidebar").css("display", "none")
$("#dashboardFrom").css("display", "none")
$("#employeeForm").css("display", "none")
$("#customerForm").css("display", "none")
$("#supplierForm").css("display", "none")
$("#inventoryForm").css("display", "none")
$("#saleForm").css("display", "none")


const token = localStorage.getItem("token")
const user = localStorage.getItem("user")

if (token && user) {
    $("#navigationbar").css("display", "block")
    $("#topNavBar").css("display", "block")
    $("#sidebar").css("display", "block")

    $("#dashboardFrom").css("display", "block")
    $("#signInForm").css("display", "none")
}