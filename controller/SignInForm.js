//Sign In
$("#btnSignIn").on('click',()=>{
    var email =$("#email").val();
    var password = $("#password").val();

    var data = {
        email:email,
        password:password
    }


    $.ajax({
        url:"http://localhost:9090/shop/api/v1/user/signin",
        type:"POST",
        contentType:"application/json",
        data:JSON.stringify(data),


        success:function(response){
            console.log(response)
            localStorage.setItem('token',response.token)
            localStorage.setItem("user", JSON.stringify(response?.user))

            $("#topNavBar").css("display", "block")
            $("#sidebar").css("display", "block")

            $("#dashboardFrom").css("display", "block")
            $("#signInForm").css("display", "none")

            $("#email").val(null)
            $("#password").val(null)
        },

        error: function(xhr, status, error) {
            console.error("Error:", xhr.responseText);
            if (xhr.status === 403){
                alert("Please check username and password : ")
            }
        }
    })
})