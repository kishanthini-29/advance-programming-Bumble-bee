    // FOR CREATE USER  --START
    $('#btnRegisterUser').submit(function(e){
        console.log('start');
        var formData = $("#userCreateForm").serialize();
        e.preventDefault();

        var formData = $(this).serializeArray();
        var values = {};
        $.map(formData, function(n, i){
            values[n['name']] = n['value'];
        });

        console.log(values);

        $.ajax({
            url: 'http://localhost:8086/create/new/user',
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
    // FOR CREATE USER  --END