//save Supplier
$("#btnSupSave").on('click',()=>{
    let name = $("#sup_name").val();
    let category = $("select[name='category']").val();
    let address1 = $("input[name='sup_address1']").val();
    let address2 = $("input[name='sup_address2']").val();
    let address3 = $("input[name='sup_address3']").val();
    let address4 = $("input[name='sup_address4']").val();
    let address5 = $("input[name='sup_address5']").val();
    let address6 = $("input[name='sup_address6']").val();
    let contact1 = $("input[name='sup_contact1']").val();
    let contact2 = $("input[name='sup_contact2']").val();
    let email = $("input[name='sup_email']").val();

    if (!name) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Name Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (category === "Select Category") {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Category Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!address1) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Address 1 Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!address2) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Address 2 Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!address3) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Address 3 Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!address4) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Address 4 Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!address5) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Address 5 Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!address6) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Address 6 Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!contact1) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Contact 1 Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!contact2) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Contact 2 Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!email) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Email Field',
            text: 'Something went wrong!'
        });
        return;
    }


    let supData = {
        sup_name:name,
        category:category,
        address_line_01:address1,
        address_line_02:address2,
        address_line_03:address3,
        address_line_04:address4,
        address_line_05:address5,
        address_line_06:address6,
        contact_no_01:contact1,
        contact_no_02:contact2,
        email:email

    };

    let jsonData = JSON.stringify(supData);

    $.ajax({
        url:"http://localhost:9090/shop/api/v1/supplier/save",
        type:"POST",
        contentType:"application/json",
        data:jsonData,
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
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
                    title: "Supplier Save Successful",
                    showConfirmButton: false,
                    timer: 1500
                })
                resetField()
                loadSupplierData()
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "An error occurred while saving supplier data."
                })
            }
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "An error occurred while saving supplier data. Please try again."
            })
        }
    })
    loadSupplierData()
})

// dashboard navigation with load data to table (api call get all and set data to table)
$("#btnSupplier").on("click", () => {
    loadSupplierData();

})

// load Data
function loadSupplierData() {
    $.ajax({
        url: "http://localhost:9090/shop/api/v1/supplier",
        type: "GET",
        processData: false,
        contentType: false,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        },
        success: function (response) {
            setValueSupplier(response)
        },
        error: function (xhr, status, error) {
            console.error("Error:", xhr.responseText)
        }
    })
}

const setValueSupplier = (response) => {
    $("#supplier-tbl").empty()
    response.map((supplier) => {
        let recode = `<tr class='sup_name'>
                                 <td>${supplier.sup_name}</td>
                                 <td class='category'>${supplier.category}</td>
                                 <td class='address_line_01'>${supplier.address_line_01}${supplier.address_line_02}${supplier.address_line_03}${supplier.address_line_04}${supplier.address_line_05}${supplier.address_line_06}</td>
                                 <td class='contact_no_01'>${supplier.contact_no_01}</td>
                                 <td class='contact_no_02'>${supplier.contact_no_02}</td>
                                 <td class='email'>${supplier.email}</td>
                                 <td>
                                        <button type="button" class="btn btn-danger">Delete</button>
                                        <button type="button" class="btn btn-warning">
                                        <i class="fa-solid fa-pen-to-square"></i>
                                        </button>
                                 </td>
                            </tr>`
        $("#supplier-tbl").append(recode)
        $("#supplier-tbl")
            .find("tr:last .btn-danger")
            .click(() =>handleDeleteSupplierOnClick(supplier))
        $("#supplier-tbl")
            .find("tr:last .btn-warning")
            .click(() => handleEditSupplierOnClick(supplier))
    })
}


//Update Supplier
$("#btnSupUpdate").prop("disabled", true)
let selectedSupId = null

$("#btnSupUpdate").on("click",() => {
    console.log("selected supplier id", selectedSupId)

    let name = $("#sup_name").val();
    let category = $("select[name='category']").val();
    let address1 = $("input[name='sup_address1']").val();
    let address2 = $("input[name='sup_address2']").val();
    let address3 = $("input[name='sup_address3']").val();
    let address4 = $("input[name='sup_address4']").val();
    let address5 = $("input[name='sup_address5']").val();
    let address6 = $("input[name='sup_address6']").val();
    let contact1 = $("input[name='sup_contact1']").val();
    let contact2 = $("input[name='sup_contact2']").val();
    let email = $("input[name='sup_email']").val();

    if (!name) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Name Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (category === "Select Category") {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Category Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!address1) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Address 1 Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!address2) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Address 2 Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!address3) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Address 3 Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!address4) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Address 4 Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!address5) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Address 5 Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!address6) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Address 6 Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!contact1) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Contact 1 Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!contact2) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Contact 2 Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!email) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Email Field',
            text: 'Something went wrong!'
        });
        return;
    }


    let supData = {
        sup_code:selectedSupId,
        sup_name:name,
        category:category,
        address_line_01:address1,
        address_line_02:address2,
        address_line_03:address3,
        address_line_04:address4,
        address_line_05:address5,
        address_line_06:address6,
        contact_no_01:contact1,
        contact_no_02:contact2,
        email:email

    }

    let jsonData =JSON.stringify(supData)

    console.log(localStorage.getItem("token"))

    $.ajax({
        url: "http://localhost:9090/shop/api/v1/supplier/update",
        type: "PUT",
        contentType: "application/json",
        data: jsonData,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        },

        success: function (response) {
            console.log("------------" + response)
            if (response === true) {
                Swal.fire({
                    icon: "success",
                    title: "Supplier Update Successful",
                    showConfirmButton: false,
                    timer: 1500
                })
                resetField()
                loadSupplierData()
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "An error occurred while updating supplier data."
                })
            }
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "An error occurred while updating supplier data. Please try again."
            })
        }
    })
    loadSupplierData()
})


// Delete Supplier
window.handleDeleteSupplierOnClick = (supplier) =>{
    console.log(supplier)

   let formData = new FormData();
    formData.append("sup_code",supplier.sup_code);

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
                url: "http://localhost:9090/shop/api/v1/supplier/delete",
                type: "DELETE",
                processData: false,
                contentType: false,
                data: formData,
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                success: function (response) {
                    Swal.fire(
                        'Deleted!',
                        `${supplier.sup_code} has been deleted.`,
                        'success'
                    )
                    resetField()
                    loadSupplierData()
                },
                error: function (xhr, status, error) {
                    console.error("Error:", xhr.status);
                    if (xhr.status === 403) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Can not delete Supplier, Please try again ?',
                            text: 'Something went wrong!'
                        })
                    }
                }
            });
        }
    });
    loadSupplierData()
}

// Reset
$("#btnSupReset").on("click", () => {
    resetField()
})

const resetField = () => {
    $("#btnSupSave").prop("disabled", false)
    $("#btnSupUpdate").prop("disabled", true)
    selectedSupId = null

    $("#sup_name").val("")
    $("#category").val(null)
    $("input[name='sup_address1']").val("")
    $("input[name='sup_address2']").val("")
    $("input[name='sup_address3']").val("")
    $("input[name='sup_address4']").val("")
    $("input[name='sup_address5']").val("")
    $("input[name='sup_address6']").val("")
    $("input[name='sup_contact1']").val("")
    $("input[name='sup_contact2']").val("")
    $("input[name='sup_email']").val("")

}

// table inside edit button function
window.handleEditSupplierOnClick = (supplier) => {
    $("#btnSupUpdate").prop("disabled", false)
    $("#btnSupSave").prop("disabled", true)

    selectedSupId = supplier.sup_code
    $("#sup_name").val(supplier.sup_name)
    $("#category").val(supplier.category)
    $("input[name='sup_address1']").val(supplier.address_line_01)
    $("input[name='sup_address2']").val(supplier.address_line_02)
    $("input[name='sup_address3']").val(supplier.address_line_03)
    $("input[name='sup_address4']").val(supplier.address_line_04)
    $("input[name='sup_address5']").val(supplier.address_line_05)
    $("input[name='sup_address6']").val(supplier.address_line_06)
    $("input[name='sup_contact1']").val(supplier.contact_no_01)
    $("input[name='sup_contact2']").val(supplier.contact_no_02)
    $("input[name='sup_email']").val(supplier.email)

}


window.loadSupplierData = loadSupplierData