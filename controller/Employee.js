//Image to Base64
let imageBase64 = "";
function imageUploaded() {
    let file = document.querySelector('input[name=pic]').files[0];
    let reader = new FileReader();
    reader.onload = function () {
        imageBase64 = reader.result.replace("data:", "").replace(/^.+,/, "");
    }
    reader.readAsDataURL(file);
}


//Employee Save
$("#btnEmpSave").on('click', () => {
    if ($("#txtpassword").val()=== $("#rePassword").val()){
        let name = $("#empName").val();
        let pic = $("#pic").val();
        let gender = $("select[name='gender']").val();
        let status = $("select[name='status']").val();
        let designation = $("input[name='designation']").val();
        let role = $("select[name='role']").val();
        let dob = $("#dob").val();
        let joinDate = $("#joinDate").val();
        let attachedBranch = $("input[name='attachedBranch']").val();
        let address1 = $("input[name='address01']").val();
        let address2 = $("input[name='address02']").val();
        let address3 = $("input[name='address03']").val();
        let address4 = $("input[name='address04']").val();
        let address5 = $("input[name='address05']").val();
        let contactNo = $("#empContactNo").val();
        let email = $("#empEmail").val();
        let informInCaseOfEmergency = $("#informInCaseOfEmergency").val();
        let emergencyContact = $("input[name='emergencyContact']").val();
        let password = $("#txtpassword").val();


        if (!name) {
            Swal.fire({
                icon: "error",
                title: "Please Check Name Field",
                text: "Something went wrong!"
            })
            return
        }

        if (!pic) {
            Swal.fire({
                icon: "error",
                title: "Please Check Img Field",
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


        if (status === "Status") {
            Swal.fire({
                icon: "error",
                title: "Please Check Status Field",
                text: "Something went wrong!"
            })
            return
        }

        if (!designation) {
            Swal.fire({
                icon: "error",
                title: "Please Check Designation Field",
                text: "Something went wrong!"
            })
            return
        }

        if (role === "Select Role") {
            Swal.fire({
                icon: "error",
                title: "Please Check Role Field",
                text: "Something went wrong!"
            })
            return
        }

        if (!dob) {
            Swal.fire({
                icon: "error",
                title: "Please Check Date Of Birth Field",
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

        if (!attachedBranch) {
            Swal.fire({
                icon: "error",
                title: "Please Check Attached Branch Field",
                text: "Something went wrong!"
            })
            return
        }


        if (!address1) {
            Swal.fire({
                icon: "error",
                title: "Please Check Address 01 Field",
                text: "Something went wrong!"
            })
            return
        }

        if (!address2) {
            Swal.fire({
                icon: "error",
                title: "Please Check Address 02 Field",
                text: "Something went wrong!"
            })
            return
        }

        if (!address3) {
            Swal.fire({
                icon: "error",
                title: "Please Check Address 03 Field",
                text: "Something went wrong!"
            })
            return
        }

        if (!address4) {
            Swal.fire({
                icon: "error",
                title: "Please Check Address 04 Field",
                text: "Something went wrong!"
            })
            return
        }

        if (!address5) {
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

        if (!informInCaseOfEmergency) {
            Swal.fire({
                icon: "error",
                title: "Please Check InformInCaseOfEmergency Field",
                text: "Something went wrong!"
            })
            return
        }

        if (!emergencyContact) {
            Swal.fire({
                icon: "error",
                title: "Please Check Emergency Contact Field",
                text: "Something went wrong!"
            })
            return
        }

        if (!password) {
            Swal.fire({
                icon: "error",
                title: "Please Check Password Field",
                text: "Something went wrong!"
            })
            return
        }

        var formData = new FormData();

        formData.append('emp_name', name);
        formData.append('emp_pro_pic', imageBase64);
        formData.append('gender', gender);
        formData.append('status', status);
        formData.append('designation', designation);
        formData.append('role', role);
        formData.append('dob', dob);
        formData.append('joinDate', joinDate);
        formData.append('attached_branch', attachedBranch);
        formData.append('address_line_01', address1);
        formData.append('address_line_02', address2);
        formData.append('address_line_03', address3);
        formData.append('address_line_04', address4);
        formData.append('address_line_05', address5);
        formData.append('contact_no', contactNo);
        formData.append('email', email);
        formData.append('informInCaseOfEmergency', informInCaseOfEmergency);
        formData.append('emergencyContact', emergencyContact);
        formData.append('password', password);


        $.ajax({
            url: "http://localhost:9090/shop/api/v1/employee/save",
            type: "POST",
            processData: false,
            contentType: false,
            data: formData,
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
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
                        title: "Employee Save Successful",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    resetField()
                    loadEmployeeData()
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "An error occurred while saving employee data."
                    })
                }
            },
            error: function (xhr, status, error) {
                console.error("Error:", xhr.responseText);
            }
        })
        loadEmployeeData()
    }
})
$("#btnEmployee").on("click",() => {
    loadEmployeeData();
})

// load Data
function loadEmployeeData() {
    $.ajax({
        url: "http://localhost:9090/shop/api/v1/employee",
        type: "GET",
        processData: false,
        contentType: false,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        },
        success: function (response) {
            setValueEmployee(response)
        },
        error: function (xhr, status, error) {
            console.error("Error:", xhr.responseText)
        }
    })
}

const setValueEmployee = (response) => {
    $("#employee-tbl").empty();
    response.map((employee) => {
        let imageSrc = `data:image/jpeg;base64,${employee.emp_pro_pic}`;

        console.log(">>>>>> : " + imageSrc);

        let recode = `<tr class='emp_name'>
                          <td>${employee.emp_name}</td>
                          <td>
                              <div>
                                   <img id="employeeImage" src="${imageSrc}" onclick="viewImg(event)">
                              </div>
                          </td>
                          <td class='gender'>${employee.gender}</td>
                          <td class='status'>${employee.status}</td>
                          <td class='designation'>${employee.designation}</td>
                          <td class='role'>${employee.role}</td>
                          <td class='dob'>${employee.dob}</td>
                          <td class='joinDate'>${employee.joinDate}</td>
                          <td class='attached_branch'>${employee.attached_branch}</td>
                          <td class='address_line_01'>${employee.address_line_01} ${employee.address_line_02} ${employee.address_line_03} ${employee.address_line_04} ${employee.address_line_05} </td>
                          <td class='contact_no'>${employee.contact_no}</td>
                          <td class='email'>${employee.email}</td>
                          <td class='informInCaseOfEmergency'>${employee.informInCaseOfEmergency}</td>
                          <td class='emergencyContact'>${employee.emergencyContact}</td>
                          <td>
                            <button type="button" id="buttonDelete" class="btn btn-danger" data-id="${employee.id}">Delete</button>
                            <button type="button" class="btn btn-warning">
                            <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                          </td>
                        </tr>`;
        $("#employee-tbl").append(recode);
        $("#employee-tbl")
            .find("tr:last .btn-danger")
            .click(() => handleDeleteEmployeeOnClick(employee));
        $("#employee-tbl")
            .find("tr:last .btn-warning")
            .click(() => handleEditEmployeeOnClick(employee));
    });
};


let imageUpdateBase64 = "";
function viewImg(event) {
    let selectedEmpId = $(event.target).closest("tr").find("#emp_code").text();
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
                imageUpdateBase64 = reader.result.replace("data:", "").replace(/^.+,/, "");
            }
            reader.readAsDataURL(file);

            console.log("File uploaded:", imageUpdateBase64);
        }
    });
}

//Update
$("#btnEmpUpdate").prop("disabled", true);
let selectedEmpId = null
let selectedPic = null


window.handleEditEmployeeOnClick = (employee) =>{
    $("#btnEmpUpdate").prop("disabled", false)
    $("#btnEmpSave").prop("disabled", true)


    selectedEmpId = employee.emp_code
    selectedPic = employee.pic

    $("#empName").val(employee.emp_name)
    $("select[name='gender']").val(employee.gender)
    $("select[name='status']").val(employee.status)
    $("input[name='designation']").val(employee.designation)
    $("select[name='role']").val(employee.role)
    $("#dob").val(employee.dob)
    $("#joinDate").val(employee.joinDate)
    $("input[name='attachedBranch']").val(employee.attached_branch)
    $("input[name='address01']").val(employee.address_line_01)
    $("input[name='address02']").val(employee.address_line_02)
    $("input[name='address03']").val(employee.address_line_03)
    $("input[name='address04']").val(employee.address_line_04)
    $("input[name='address05']").val(employee.address_line_05)
    $("#empContactNo").val(employee.contact_no)
    $("#empEmail").val(employee.email)
    $("#informInCaseOfEmergency").val(employee.informInCaseOfEmergency)
    $("input[name='emergencyContact']").val(employee.emergencyContact)
    // $("#txtpassword").val(employee.password)

}

$("#btnEmpUpdate").on("click", () => {
    console.log("selected employee id", selectedEmpId);

    let name = $("#empName").val();
    let gender = $("select[name='gender']").val();
    let status = $("select[name='status']").val();
    let designation = $("input[name='designation']").val();
    let role = $("select[name='role']").val();
    let dob = $("#dob").val();
    let joinDate = $("#joinDate").val();
    let attachedBranch = $("input[name='attachedBranch']").val();
    let address1 = $("input[name='address01']").val();
    let address2 = $("input[name='address02']").val();
    let address3 = $("input[name='address03']").val();
    let address4 = $("input[name='address04']").val();
    let address5 = $("input[name='address05']").val();
    let contactNo = $("#empContactNo").val();
    let email = $("#empEmail").val();
    let informInCaseOfEmergency = $("#informInCaseOfEmergency").val();
    let emergencyContact = $("input[name='emergencyContact']").val();

    if (!name || !gender || !status || !designation || !role || !dob || !joinDate || !attachedBranch || !address1 || !address2 || !address3 || !address4 || !address5 || !contactNo || !email || !informInCaseOfEmergency || !emergencyContact) {
        Swal.fire({
            icon: "error",
            title: "Please fill all fields",
            text: "Something went wrong!"
        });
        return;
    }

    if (gender === "Select Gender" || status === "Status" || role === "Select Role") {
        Swal.fire({
            icon: "error",
            title: "Please select valid options",
            text: "Something went wrong!"
        });
        return;
    }

    var formData = new FormData();
    formData.append('emp_code', selectedEmpId);
    formData.append('emp_name', name);
    formData.append('emp_pro_pic', selectedPic);
    formData.append('gender', gender);
    formData.append('status', status);
    formData.append('designation', designation);
    formData.append('role', role);
    formData.append('dob', dob);
    formData.append('joinDate', joinDate);
    formData.append('attached_branch', attachedBranch);
    formData.append('address_line_01', address1);
    formData.append('address_line_02', address2);
    formData.append('address_line_03', address3);
    formData.append('address_line_04', address4);
    formData.append('address_line_05', address5);
    formData.append('contact_no', contactNo);
    formData.append('email', email);
    formData.append('informInCaseOfEmergency', informInCaseOfEmergency);
    formData.append('emergencyContact', emergencyContact);

    $.ajax({
        url: "http://localhost:9090/shop/api/v1/employee/update",
        type: "PUT",
        processData: false,
        contentType: false,
        data: formData,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
        },
        success: function (response) {
            console.log("Response: ", response);
            if (response === false) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Email is already registered. Please change email."
                });
            } else if (response === true) {
                Swal.fire({
                    icon: "success",
                    title: "Employee Updating Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                resetField();
                loadEmployeeData();
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "An error occurred while saving employee data."
                });
            }
        },
        error: function (xhr, status, error) {
            console.error("Error:", xhr.responseText);
        }
    });
});

//Reset
$("#btnEmpReset").on("click", () => {
    resetField()
})

function resetField() {
    $("#btnEmpSave").prop("disabled", false)
    $("#btnEmpUpdate").prop("disabled", true)
    selectedEmpId = null


    $("#empName").val('');
    $("#pic").val('');
    $("select[name='gender']").val('Select Gender');
    $("select[name='status']").val('Status');
    $("input[name='designation']").val('');
    $("select[name='role']").val('Select Role');
    $("#dob").val('');
    $("#joinDate").val('');
    $("input[name='attachedBranch']").val('');
    $("input[name='address01']").val('');
    $("input[name='address02']").val('');
    $("input[name='address03']").val('');
    $("input[name='address04']").val('');
    $("input[name='address05']").val('');
    $("#empContactNo").val('');
    $("#empEmail").val('');
    $("#informInCaseOfEmergency").val('');
    $("input[name='emergencyContact']").val('');
}

window.handleDeleteEmployeeOnClick = (employee) => {
    console.log(employee)

    let formData = new FormData();
    formData.append("emp_code",employee.emp_code);

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
                url: "http://localhost:9090/shop/api/v1/employee/delete",
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
                        `${employee.emp_code} has been deleted.`,
                        'success'
                    )
                    resetField()
                    loadEmployeeData()
                },
                error: function (xhr, status, error) {
                    console.error("Error:", xhr.status);
                    if (xhr.status === 403) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Can not delete Employee, Please try again ?',
                            text: 'Something went wrong!'
                        })
                    }
                }
            });
        }
    });
    loadEmployeeData()
}

window.loadEmployeeData=loadEmployeeData
window.imageUploaded=imageUploaded


