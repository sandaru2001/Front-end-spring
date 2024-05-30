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
        supplier_name:name,
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
        url:'http://localhost:9090/shop/api/v1/supplier/save',
        type:'POST',
        contentType:'application/json',
        data:jsonData,
        /*headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },*/
        success: function (response) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Supplier data saved successfully.'
            })
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred while saving supplier data. Please try again.'
            });
        }
    });
});