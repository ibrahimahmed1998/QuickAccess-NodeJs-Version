function send() 
{
    var link = document.getElementById('link').value;
    var img = document.getElementById('img').value;
    var title = document.getElementById('title').value;
    var html = document.getElementById('html').value;
    var updown = document.getElementById('updown').value;
    var pass = document.getElementById('pass').value;

    clr();

    $.ajax({
        url: "/",
        type: 'POST',
        data: { link:link, img:img, title:title, html:html, updown:updown ,pass:pass },

        success: function (response) {
            
            console.log(response);   
        },
        error: (err) => {
            var x = JSON.stringify(err);
            console.log(x);
            alert(x);
        }
    })
}