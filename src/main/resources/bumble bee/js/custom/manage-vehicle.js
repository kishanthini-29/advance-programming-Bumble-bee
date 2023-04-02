$(document).ready(function () {
    var userId = 0;
    userId = localStorage.getItem("userId");
    console.log("userid-".userId);
    if (userId == 0 || userId == undefined) {
        window.location.href = "login.html";
    }

    // FOR GET Product  CATEGORY --START
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
    // FOR GET Product  CATEGORY --END

    // FOR GET Product  DETAILS --START
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
                    $('#Product Table').find('tbody')
                        .append('<tr>')
                        .append('<td>' + x + '</td>')
                        .append('<td>' + v.brandName + '</td>')
                        .append('<td>' + v.modelName + '</td>')
                        .append('<td>' + v.Product CategoryName + '</td>')
                        .append('</tr>');
                    x++;
                });
            }else{
                alert('Error');
            }
        }
    });
    // FOR GET Product  DETAILS --END

    // FOR CREATE Product  CATEGORY --START
    $('#createVeCategory').submit(function(e){
        console.log('start');
        var formData = $("#createVeCategory").serialize();
        e.preventDefault();

        var formData = $(this).serializeArray();
        var values = {};
        $.map(formData, function(n, i){
            values[n['name']] = n['value'];
        });

        console.log(values);

        $.ajax({
            url: 'http://localhost:8085/Product /create/category',
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
    // FOR CREATE Product  CATEGORY --END



});
