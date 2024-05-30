//save Customer
$("#btnCusSave").on("click", () => {
    let name = $("#customerName").val()
    let gender = $("#cus_gender").val()
    let joinDate = $("#cusJoinDate").val()
    let level = $("#cus_level").val()
    let totalPoint = $("input[name='totalPoint']").val()
    let dob = $("#cusDob").val()
    let address01 = $("input[name='cusAddress01']").val()
    let address02 = $("input[name='cusAddress02']").val()
    let address03 = $("input[name='cusAddress03']").val()
    let address04 = $("input[name='cusAddress04']").val()
    let address05 = $("input[name='cusAddress05']").val()
    let contactNo = $("#cusContact").val()
    let email = $("#cusEmail").val()
    let recentPurchaseDateAndTime = $("#recentPurchaseDateAndTime").val()

    if (!name) {
        Swal.fire({
            icon: "error",
            title: "Please Check Name Field",
            text: "Something went wrong!"
        })
        return
    }

    if (gender === "Select Gender") {
        Swal.fire({
            icon: "error",
            title: "Please Check Gender Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!joinDate) {
        Swal.fire({
            icon: "error",
            title: "Please Check Join Date Field",
            text: "Something went wrong!"
        })
        return
    }

    if (level === "Select Level") {
        Swal.fire({
            icon: "error",
            title: "Please Check Level Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!totalPoint) {
        Swal.fire({
            icon: "error",
            title: "Please Check Total Point Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!dob) {
        Swal.fire({
            icon: "error",
            title: "Please Check DOB Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!address01) {
        Swal.fire({
            icon: "error",
            title: "Please Check Address 01 Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!address02) {
        Swal.fire({
            icon: "error",
            title: "Please Check Address 02 Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!address03) {
        Swal.fire({
            icon: "error",
            title: "Please Check Address 03 Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!address04) {
        Swal.fire({
            icon: "error",
            title: "Please Check Address 04 Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!address05) {
        Swal.fire({
            icon: "error",
            title: "Please Check Address 05 Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!contactNo) {
        Swal.fire({
            icon: "error",
            title: "Please Check Contact No Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!email) {
        Swal.fire({
            icon: "error",
            title: "Please Check Email Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!recentPurchaseDateAndTime) {
        Swal.fire({
            icon: "error",
            title: "Please Check Recent Purchase date & time Field",
            text: "Something went wrong!"
        })
        return
    }

    let cusData = {
        customer_name: name,
        gender: gender,
        join_date: joinDate,
        level: level,
        total_points: totalPoint,
        dob: dob,
        address_line_01: address01,
        address_line_02: address02,
        address_line_03: address03,
        address_line_04: address04,
        address_line_05: address05,
        contact_no: contactNo,
        email: email,
        purchase_date_time: recentPurchaseDateAndTime
    }

    let jsonData = JSON.stringify(cusData)

    console.log(localStorage.getItem("token"))

    console.log(cusData);

    $.ajax({
        url: "http://localhost:9090/shop/api/v1/customer/save",
        type: "POST",
        contentType: "application/json",
        data: jsonData,
        /*headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        }*/

        success: function (response) {
            console.log("------------" + response)
            if (response === false) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Email is already registered. Please change email."
                })
            } else if (response === true) {
                Swal.fire({
                    icon: "success",
                    title: "Customer Save Successful",
                    showConfirmButton: false,
                    timer: 1500
                })
                resetField()
                loadCustomerData()
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "An error occurred while saving customer data."
                })
            }
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "An error occurred while saving customer data. Please try again."
            })
        }
    })
    loadCustomerData()
})

// dashboard navigation with load data to table (api call get all and set data to table)
$("#btnCustomer").on("click", () => {
    loadCustomerData();
})

// load Data
function loadCustomerData() {
    $.ajax({
        url: "http://localhost:9090/shop/api/v1/customer",
        type: "GET",
        processData: false,
        contentType: false,
        /*headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        },*/
        success: function (response) {
            setValue(response)
        },
        error: function (xhr, status, error) {
            console.error("Error:", xhr.responseText)
        }
    })
}

$("#btnCusReset").on("click", () => {
    resetField()
})


// Update Customer

$("#btnCusUpdate").prop("disabled", true)
let selectedCusId = null

$("#btnCusUpdate").on("click", () => {
    console.log("selected customer id", selectedCusId)

    let name = $("#customerName").val()
    let gender = $("#cus_gender").val()
    let joinDate = $("#cusJoinDate").val()
    let level = $("#cus_level").val()
    let totalPoint = $("input[name='totalPoint']").val()
    let dob = $("#cusDob").val()
    let address01 = $("input[name='cusAddress01']").val()
    let address02 = $("input[name='cusAddress02']").val()
    let address03 = $("input[name='cusAddress03']").val()
    let address04 = $("input[name='cusAddress04']").val()
    let address05 = $("input[name='cusAddress05']").val()
    let contactNo = $("#cusContact").val()
    let email = $("#cusEmail").val()
    let recentPurchaseDateAndTime = $("#recentPurchaseDateAndTime").val()


    if (!name) {
        Swal.fire({
            icon: "error",
            title: "Please Check Name Field",
            text: "Something went wrong!"
        })
        return
    }

    if (gender === "Select Gender") {
        Swal.fire({
            icon: "error",
            title: "Please Check Gender Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!joinDate) {
        Swal.fire({
            icon: "error",
            title: "Please Check Join Date Field",
            text: "Something went wrong!"
        })
        return
    }

    if (level === "Select Level") {
        Swal.fire({
            icon: "error",
            title: "Please Check Level Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!totalPoint) {
        Swal.fire({
            icon: "error",
            title: "Please Check Total Point Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!dob) {
        Swal.fire({
            icon: "error",
            title: "Please Check DOB Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!address01) {
        Swal.fire({
            icon: "error",
            title: "Please Check Address 01 Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!address02) {
        Swal.fire({
            icon: "error",
            title: "Please Check Address 02 Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!address03) {
        Swal.fire({
            icon: "error",
            title: "Please Check Address 03 Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!address04) {
        Swal.fire({
            icon: "error",
            title: "Please Check Address 04 Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!address05) {
        Swal.fire({
            icon: "error",
            title: "Please Check Address 05 Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!contactNo) {
        Swal.fire({
            icon: "error",
            title: "Please Check Contact No Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!email) {
        Swal.fire({
            icon: "error",
            title: "Please Check Email Field",
            text: "Something went wrong!"
        })
        return
    }

    if (!recentPurchaseDateAndTime) {
        Swal.fire({
            icon: "error",
            title: "Please Check Recent Purchase date & time Field",
            text: "Something went wrong!"
        })
        return
    }

    let cusData = {
        customer_code:selectedCusId,
        customer_name: name,
        gender: gender,
        join_date: joinDate,
        level: level,
        total_points: totalPoint,
        dob: dob,
        address_line_01: address01,
        address_line_02: address02,
        address_line_03: address03,
        address_line_04: address04,
        address_line_05: address05,
        contact_no: contactNo,
        email: email,
        purchase_date_time: recentPurchaseDateAndTime
    }

    let jsonData = JSON.stringify(cusData)

    console.log(localStorage.getItem("token"))

    $.ajax({
        url: "http://localhost:9090/shop/api/v1/customer/update",
        type: "PUT",
        contentType: "application/json",
        data: jsonData,
       /* headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        },*/

        success: function (response) {
            console.log("------------" + response)
            if (response === true) {
                Swal.fire({
                    icon: "success",
                    title: "Customer Update Successful",
                    showConfirmButton: false,
                    timer: 1500
                })
                resetField()
                loadCustomerData()
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "An error occurred while updating customer data."
                })
            }
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "An error occurred while updating customer data. Please try again."
            })
        }
    })
    loadCustomerData()
})

const resetField = () => {
    $("#btnCusSave").prop("disabled", false)
    $("#btnCusUpdate").prop("disabled", true)
    selectedCusId = null

    $("#customerName").val("")
    $("#cus_gender").val(null)
    $("#cusJoinDate").val("")
    $("#cus_level").val(null)
    $("input[name='totalPoint']").val("")
    $("#cusDob").val("")
    $("input[name='cusAddress01']").val("")
    $("input[name='cusAddress02']").val("")
    $("input[name='cusAddress03']").val("")
    $("input[name='cusAddress04']").val("")
    $("input[name='cusAddress05']").val("")
    $("#cusContact").val("")
    $("#cusEmail").val("")
    $("#recentPurchaseDateAndTime").val("")
}

const setValue = (response) => {
    $("#customer-tbl").empty()
    response.map((customer) => {
        let recode = `<tr class='cus_name'>
                                    
                                    <td>${customer.customer_name}</td>
                                    <td class='email'>${customer.email}</td>
                                    <td class='gender'>${customer.gender}</td>
                                    <td class='join_date_as_a_loyalty_customer'>${customer.join_date}</td>
                                    <td class='level'>${customer.level}</td>
                                    <td class='total_points'>${customer.total_points}</td>
                                    <td class='dob'>${customer.dob}</td>
                                    <td class='address_line_01'>${customer.address_line_01+","} ${customer.address_line_02+","} ${customer.address_line_03+","} ${customer.address_line_04+","} ${customer.address_line_05}</td>
                                    <td class='contact_no'>${customer.contact_no}</td>
                                    <td class='recent_purchase_date_and_time'>${customer.purchase_date_time}</td>
                                    <td>
                                        <button type="button" class="btn btn-danger">Delete</button>
                                        <button type="button" class="btn btn-warning">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                        </button>
                                    </td>
                              </tr>`
        $("#customer-tbl").append(recode)
        $("#customer-tbl")
            .find("tr:last .btn-danger")
            .click(() => handleDeleteOnClick(customer))
        $("#customer-tbl")
            .find("tr:last .btn-warning")
            .click(() => handleEditOnClick(customer))
    })
}

// table inside delete button function
window.handleDeleteOnClick = (customer) => {
    let formData = new FormData();
    formData.append("customer_code", customer.customer_code);

    Swal.fire({
        title: 'Are you sure?',
        text: "You want delete row?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "http://localhost:9090/shop/api/v1/customer/delete",
                type: "DELETE",
                processData: false,
                contentType: false,
                data: formData,
                /*headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },*/
                success: function (response) {
                    Swal.fire(
                        'Deleted!',
                        `${customer.customer_code} has been deleted.`,
                        'success'
                    )
                    resetField()
                    loadCustomerData()
                },
                error: function (xhr, status, error) {
                    console.error("Error:", xhr.status);
                    if (xhr.status === 403) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Can not delete Customer, Please try again ?',
                            text: 'Something went wrong!'
                        })
                    }
                }
            });
        }
    });
    loadCustomerData()
}

// table inside edit button function
window.handleEditOnClick = (customer) => {
    $("#btnCusUpdate").prop("disabled", false)
    $("#btnCusSave").prop("disabled", true)

    console.log(customer);

    selectedCusId = customer.customer_code;
    $("#customerName").val(customer.customer_name)
    $("#cus_gender").val(customer.gender)
    $("#cusJoinDate").val(customer.join_date)
    $("#cus_level").val(customer.level)
    $("input[name='totalPoint']").val(customer.total_points)
    $("#cusDob").val(customer.dob)
    $("input[name='cusAddress01']").val(customer.address_line_01)
    $("input[name='cusAddress02']").val(customer.address_line_02)
    $("input[name='cusAddress03']").val(customer.address_line_03)
    $("input[name='cusAddress04']").val(customer.address_line_04)
    $("input[name='cusAddress05']").val(customer.address_line_05)
    $("#cusContact").val(customer.contact_no)
    $("#cusEmail").val(customer.email)
    $("#recentPurchaseDateAndTime").val(customer.purchase_date_time)
}


function setData(response) {
    $("select[name='level']").val(response.level)
    $("select[name='gender']").val(response.gender)
    $("#cusDob").val(response.dob)
    $("#cusJoinDate").val(response.join_date)
}

window.loadCustomerData = loadCustomerData
