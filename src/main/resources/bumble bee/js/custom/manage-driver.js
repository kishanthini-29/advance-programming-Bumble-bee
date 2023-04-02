$(document).ready(function () {
    var userId = 0;
    userId = localStorage.getItem("userId");
    console.log("userid-".userId);
    if (userId == 0 || userId == undefined) {
        window.location.href = "login.html";
    }

    // FOR GET ALL DRIVERS AND APPEND IN TABLE --START
    $.ajax({
        url: 'http://localhost:8086/Product /get/categories',
        type: 'POST',
        dataType: 'json',
        success: function (data) {
            if(data.statusCode == 1000){
                var obj = data.data;
                $.each(obj, function(i,v){
                    // console.log(v.Product CategoryId);
                    // console.log(v.Product CategoryName);

                    $('#vechileCatTable').find('tbody')
                        .append('<tr>')
                        .append('<td>' + v.Product CategoryId + '</td>')
                        .append('<td>' + v.Product CategoryName + '</td>')
                        .append('</tr>');


                    $('#Product CategoryId').append('<option value="' + v.Product CategoryId + '">' + v.Product CategoryName + '</option>');
                });
            }else{
                alert('Error');
            }
        }
    });
    // FOR GET ALL DRIVERS AND APPEND IN TABLE --END
// FOR GET Product  DETAILS AND APPEND IN DROPDOWN --START
    $.ajax({
        url: 'http://localhost:8086/Product /get/detail/list',
        type: 'POST',
        dataType: 'json',
        success: function (data) {
            if(data.statusCode == 1000){
                var obj = data.data;
                var x=1;
                $('#Product Table').find('tbody').html("");
                $.each(obj, function(i,v){
                    //console.log("vechile id is " + v.Product Id);
                    var Product =v.brandName+"-"+v.modelName
                    $('#Product DetailId').append('<option value="' + v.Product Id + '">' + Product  + '</option>');

                    x++;
                });
            }else{
                alert('Error');
            }
        }
    });
// FOR GET Product  DETAILS AND APPEND IN DROPDOWN --END
});

// FOR CREATE User  --START
$('#createDriver').submit(function(e){
    console.log('start');
    var formData = $("#createDriver").serialize();
    e.preventDefault();

    var formData = $(this).serializeArray();
    var values = {};
    $.map(formData, function(n, i){
        values[n['name']] = n['value'];
    });

    console.log(values);

    $.ajax({
        url: 'http://localhost:8086/create/customer',
        type: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        dataType:'json',
        data: JSON.stringify(values),
        success: function (data) {
            console.log(data);
            if(data.statusCode == 1000){
                alert(data.message);
                location.reload();
            }
        }
    });
    console.log('end');
});
// FOR CREATE User  --END
