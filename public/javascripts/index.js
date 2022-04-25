function renew()
{
    var delete_center1 = document.getElementById("center1");
    var delete_center2 = document.getElementById("center2");

    delete_center1.remove();
    delete_center2.remove();
    console.log("delete center");

}

function get(arr,choice,counter){      // body>>center>>a[img-title]>>br      wait to add updown html

    console.log("counter = " + counter);

    if(counter != 0) { renew();   }

    var body = document.getElementById("body");
    var center1 = document.createElement("center");
    var center2 = document.createElement("center");

    center1.setAttribute("class", "up");
    center1.setAttribute("id", "center1");

    center2.setAttribute("class", "down");
    center2.setAttribute("id", "center2");

    for (var i = 0; i < arr.length ; i++ ) {

          
        var link = document.createElement("a");
        link.setAttribute("href", arr[i].link);
        // link.setAttribute("id", arr[i].id);

        var img = document.createElement("img");
        img.setAttribute("src", "images/" + arr[i].img_path);
        img.setAttribute("title", arr[i].title);
        link.appendChild(img);

        if(arr[i].updown == 1 && choice == arr[i].html) { center1.appendChild(link); }
        else if (arr[i].updown == 0 && choice == arr[i].html) {  center2.appendChild(link);  }
  
                if( i%9 == 0 && i!=0    ) 
                { 
                        var br = document.createElement("br");
                        center1.appendChild(br);
                        // center2.appendChild(br);
                }
    }
    body.appendChild(center1);
    body.appendChild(center2);
}