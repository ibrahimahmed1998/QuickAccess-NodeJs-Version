function get(arr) { // body>>center>>a[img-title]>>br

    var body = document.getElementById("body");
    var center = document.createElement("center");
    center.setAttribute("class", "up");
    for (var i = 0; i < arr.length; i++) {

        var link = document.createElement("a");
        link.setAttribute("href", arr[i].link);
        // link.setAttribute("id", arr[i].id);

        var img = document.createElement("img");
        img.setAttribute("src", "images/" + arr[i].img_path);
        img.setAttribute("title", arr[i].title);
        link.appendChild(img);

        center.appendChild(link);
        if (i == 9 || i == 18 || i == 27 || i == 36) {
            var br = document.createElement("br");
            center.appendChild(br);
        }

    }
    body.appendChild(center);
}

