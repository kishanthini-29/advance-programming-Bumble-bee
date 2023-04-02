

//LOGIN FUNCTION -START
function loginUser(){
    console.log('start');
//	var username = document.getElementById('username');
//	var password = document.getElementById('password');
	    var txtInputEmail = $("#txtInputEmail").val();
        var txtInputPassword = $("#txtInputPassword").val();
	const loginRequestObject = {username: txtInputEmail, password: txtInputPassword};

    //VALIDATION START
    if (txtInputEmail == "") {
        $("#txtInputEmail").focus();
        $.alert({
            title: "Alert!",
            content: "Please Insert User Name.",
            icon: "fa fa-exclamation-triangle",
            type: "red",
            buttons: {
                okay: {
                    text: "Okay",
                    btnClass: "btn-red",
                },
            },
        });
        return false;
    }

    if (txtInputPassword == "") {
        $("#txtInputPassword").focus();
        $.alert({
            title: "Alert!",
            content: "Please Insert Password.",
            icon: "fa fa-exclamation-triangle",
            type: "red",
            buttons: {
                okay: {
                    text: "Okay",
                    btnClass: "btn-red",
                },
            },
        });
        return false;
    }
    //VALIDATION END

	$.ajax({
          type: 'POST',
          dataType:"json",
          url: 'http://localhost:8080/user/login',
          data: JSON.stringify(loginRequestObject),
          headers:{
              'Content-Type' : 'application/json',
          },
          success: function (data) {
            console.log('data: ', data);
			if(data.status == 3000){
				localStorage.setItem("firstName",data.value.firstName);
				localStorage.setItem("lastName",data.value.lastName);
				localStorage.setItem("userId",data.value.userId);
				localStorage.setItem("userType",data.value.userType);
				window.location.href = "index.html";
			}else{
				alert(data.msg);
			}
          }
    console.log('end');
});
//LOGIN FUNCTION -END
}