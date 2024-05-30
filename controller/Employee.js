// Img convert to base64

let base64String = "";
function imageUploaded() {
    let file = document.querySelector('input[type=file]')['files'][0];
    let reader = new FileReader();
    reader.onload = function () {
        base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
    }
    reader.readAsDataURL(file);
}

//Employee Save
$("#btnSave").on('click', () => {
    if ($("input[name='password']").val() === $("#rePassword").val()) {
        let name = $("#name").val();
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
        let emergencyContact = $("input[name='emergencyContact']").val();
        let informInCaseOfEmergency = $("#informInCaseOfEmergency").val();
        let password = $("input[name='password']").val();

        var formData = new FormData();

        formData.append('emp_name', name);
        formData.append('emp_pro_pic', base64String);
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
        formData.append('emergencyContact', emergencyContact);
        formData.append('informInCaseOfEmergency', informInCaseOfEmergency);
        formData.append('password', password);

        if (!name){
            Swal.fire({
                icon: 'error',
                title: 'Please Check Name Field',
                text: 'Something went wrong!'
            })
        }else {
            if (!pic){
                Swal.fire({
                    icon: 'error',
                    title: 'Please Check Picture Field',
                    text: 'Something went wrong!'
                })
            }else {
                if (!gender){
                    Swal.fire({
                        icon: 'error',
                        title: 'Please Check Gender Field',
                        text: 'Something went wrong!'
                    })
                }else {
                    if (!status){
                        Swal.fire({
                            icon: 'error',
                            title: 'Please Check Status Field',
                            text: 'Something went wrong!'
                        })
                    }else {
                        if (!designation){
                            Swal.fire({
                                icon: 'error',
                                title: 'Please Check Designation Field',
                                text: 'Something went wrong!'
                            })
                        }else {
                            if (role === "Select Role"){
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Please Check Role Field',
                                    text: 'Something went wrong!'
                                })
                            }else {
                                if (!dob){
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Please Check Date Of Birthday Field',
                                        text: 'Something went wrong!'
                                    })
                                }else {
                                    if (!joinDate){
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Please Check join Date Field',
                                            text: 'Something went wrong!'
                                        })
                                    }else {
                                        if (!attachedBranch){
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Please Check Attached Branch Field',
                                                text: 'Something went wrong!'
                                            })
                                        }else {
                                            if (!address1){
                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Please Check Address 1 Field',
                                                    text: 'Something went wrong!'
                                                })
                                            }else {
                                                if (!address2) {
                                                    Swal.fire({
                                                        icon: 'error',
                                                        title: 'Please Check Address 2 Field',
                                                        text: 'Something went wrong!'
                                                    })
                                                }else {
                                                    if (!address3) {
                                                        Swal.fire({
                                                            icon: 'error',
                                                            title: 'Please Check Address 3 Field',
                                                            text: 'Something went wrong!'
                                                        })
                                                    }else {
                                                        if (!address4) {
                                                            Swal.fire({
                                                                icon: 'error',
                                                                title: 'Please Check Address 4 Field',
                                                                text: 'Something went wrong!'
                                                            })
                                                        }else {
                                                            if (!address5) {
                                                                Swal.fire({
                                                                    icon: 'error',
                                                                    title: 'Please Check Address 5 Field',
                                                                    text: 'Something went wrong!'
                                                                })
                                                            }else {
                                                                if (!contactNo) {
                                                                    Swal.fire({
                                                                        icon: 'error',
                                                                        title: 'Please Check Contact No Field',
                                                                        text: 'Something went wrong!'
                                                                    })
                                                                }else {
                                                                    if (!email) {
                                                                        Swal.fire({
                                                                            icon: 'error',
                                                                            title: 'Please Check Email Field',
                                                                            text: 'Something went wrong!'
                                                                        })
                                                                    }else {
                                                                        if (!emergencyContact) {
                                                                            Swal.fire({
                                                                                icon: 'error',
                                                                                title: 'Please Check Emergency Contact Field',
                                                                                text: 'Something went wrong!'
                                                                            })
                                                                        }else {
                                                                            if (!emergencyContact) {
                                                                                Swal.fire({
                                                                                    icon: 'error',
                                                                                    title: 'Please Check Emergency Contact Field',
                                                                                    text: 'Something went wrong!'
                                                                                })
                                                                            }else {
                                                                                if (!informInCaseOfEmergency) {
                                                                                    Swal.fire({
                                                                                        icon: 'error',
                                                                                        title: 'Please Check Inform In Case Of Emergency Field',
                                                                                        text: 'Something went wrong!'
                                                                                    })
                                                                                }else {
                                                                                    if (!password) {
                                                                                        Swal.fire({
                                                                                            icon: 'error',
                                                                                            title: 'Please Check Password Field',
                                                                                            text: 'Something went wrong!'
                                                                                        })
                                                                                    }else {
                                                                                        $.ajax({
                                                                                            url: "http://localhost:9090/shop/api/v1/employee/save",
                                                                                            type: "POST",
                                                                                            processData: false,
                                                                                            contentType: false,
                                                                                            data: formData,
                                                                                            headers: {
                                                                                                "Authorization": "Bearer " + localStorage.getItem("token")
                                                                                            },
                                                                                            success: function (response) {
                                                                                                console.log("Success:", response);
                                                                                                Swal.fire({
                                                                                                    icon: 'success',
                                                                                                    title: 'Employee Saved Successful',
                                                                                                    showConfirmButton: false,
                                                                                                    timer: 2000
                                                                                                })
                                                                                                // loadData();
                                                                                                $("#reset").click();
                                                                                            },
                                                                                            error: function (xhr, status, error) {
                                                                                                console.error("Error:", xhr.responseText);
                                                                                            }
                                                                                        });
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }else {
        Swal.fire({
            icon: 'error',
            title: 'Not match Password and Re-password Fields',
            text: 'Something went wrong!'
        })
        // loadData();
    }
});



window.imageUploaded=imageUploaded;