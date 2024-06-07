
//Image to Base64
let itemImageBase64 = "";
function itemImageUploaded() {
    let file = document.querySelector('input[name=itemPic]').files[0];
    let reader = new FileReader();
    reader.onload = function () {
        itemImageBase64 = reader.result.replace("data:", "").replace(/^.+,/, "");
    }
    reader.readAsDataURL(file);
}

let itemImageUpdateBase64 = "";
function viewImage(event) {
    let itemID = $(event.target).closest("tr").find("#item-code").text();
    let fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    event.stopPropagation();
    fileInput.click();

    fileInput.addEventListener("change", function() {
        let file = fileInput.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function () {
                itemImageUpdateBase64 = reader.result.replace("data:", "").replace(/^.+,/, "");
            }
            reader.readAsDataURL(file);

            console.log("File uploaded:", itemImageUpdateBase64);
        }
    });
}

//Save
$("#btnItemSave").on('click', () => {
    let itemName = $("input[name='itemName']").val();
    let itemPic = $("input[name='itemPic']").val();
    let itemCategory = $("input[name='itemCategory']").val();
    let gender = $("select[name='inventoryGender']").val();
    let occasion = $("select[name='occasion']").val();
    let supplierID = $("#supplierIDs").val();


    if (!itemName) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Item Name Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!itemPic) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Item Picture Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (!itemCategory) {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Item Category Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if(gender === "Select Gender"){
        Swal.fire({
            icon: 'error',
            title: 'Please Check Gender Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if(occasion === "Select Occasion"){
        Swal.fire({
            icon: 'error',
            title: 'Please Check Occasion Field',
            text: 'Something went wrong!'
        });
        return;
    }

    if (itemStatus === "Select Status") {
        Swal.fire({
            icon: 'error',
            title: 'Please Check Item Status Field',
            text: 'Something went wrong!'
        });
        return;
    }



    var formData = new FormData();

    formData.append('item_des', itemName);
    formData.append('item_pic', itemImageBase64);
    formData.append('category', itemCategory);
    formData.append('status', itemStatus);
    formData.append('genderType', gender);
    formData.append('occasion', occasion);
    formData.append('sup_code', supplierID);

    $.ajax({
        url: "http://localhost:9090/shop/api/v1/inventory/save",
        type: "POST",
        processData: false,
        contentType: false,
        data: formData,
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (response) {
            Swal.fire(
                'Saved!',
                'Item has been saved.',
                'success'
            ).then(() => {
                loadItemData();
            });
        },
        error: function (xhr, status, error) {
            console.error("Error:", xhr.responseText);
        }
    });
});

//Get All Data
function loadItemData() {
    $.ajax({
        url: "http://localhost:9090/shop/api/v1/inventory",
        type: "GET",
        processData: false,
        contentType: false,
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (response) {
            setInventoryValue(response);
        },
        error: function (xhr, status, error) {
            console.error("Error:", xhr.responseText);
        }
    });

    $.ajax({
        url: "http://localhost:9090/shop/api/v1/supplier/getSupplierIds",
        type: "GET",
        processData: false,
        contentType: false,
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (response) {
            console.log(response);
            $("#supplierIDs").empty();
            $("#supplierIDs").append(`<option>Select Supplier</option>`);
            response.map((response) => {
                $("#supplierIDs").append(`<option value="${response}">${response}</option>`);
            });
        },
        error: function (xhr, status, error) {
            console.error("Error:", xhr.responseText);
        }
    });
}

//set Data for table
const setInventoryValue = (response) => {
    $("#inventory-tbl").empty();
    response.map((inventory) => {

        let imageSrc = `data:image/jpeg;base64,${inventory.item_pic}`;

        let recode = `<tr>
                                <td>
                                    <div id="imageContainer">
                                        <img id="inventoryRowImage" src="${imageSrc}" class="avatar avatar-xl me-1 border-radius-lg" alt="user1" onclick="viewImage(event)">
                                    </div>
                                </td>
                                <td class='gender'>${inventory.item_code}</td>
                                <td class='status'>${inventory.category}</td>
                                <td class='designation'>${inventory.genderType}</td>
                                <td class='designation'>${inventory.occasion}</td>
                               
                            </tr>`

        $("#inventory-tbl").append(recode);
    })
}

//Row Click
let index;
$("#inventory-tbl").on("click","tr", function () {
    index = $(this).index();
    let itemCode = $(this).find("#item_code").text();

    $.ajax({
        url: "http://localhost:9090/shop/api/v1/inventory/selectInventory",
        type: "GET",
        data: { item_code: itemCode },
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
        },
        success: function (response) {
            setData(response);
        },
        error: function (xhr, status, error) {
            console.error("Error:", xhr.responseText);
        }
    });
});


function setData(inventory) {
    $("input[name='itemName']").focus();
    $("input[name='itemName']").val(inventory.item_des);

    $("input[name='itemQuantity']").focus();
    $("input[name='itemQuantity']").val(inventory.item_qty);

    $("input[name='itemCategory']").focus();
    $("input[name='itemCategory']").val(inventory.category);

    $("input[name='itemSize']").focus();
    $("input[name='itemSize']").val(inventory.size);

    $("input[name='itemUnitPrice-Sale']").focus();
    $("input[name='itemUnitPrice-Sale']").val(inventory.unit_price_sale);

    $("input[name='itemUnitPrice-Buy']").focus();
    $("input[name='itemUnitPrice-Buy']").val(inventory.unit_price_buy);

    $("input[name='itemExpectedProfit']").focus();
    $("input[name='itemExpectedProfit']").val(inventory.expected_profit);

    $("input[name='itemProfitMargin']").focus();
    $("input[name='itemProfitMargin']").val(inventory.profit_margin);

    $("input[name='itemStatus']").focus();
    $("input[name='itemStatus']").val(inventory.status);
}

$("#btnItemUpdate").on('click', () => {
    document.getElementById("itemForm").reset();
})





window.viewImage=viewImage;
window.loadItemData=loadItemData;
window.itemImageUploaded=itemImageUploaded;
