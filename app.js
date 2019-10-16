window.onload = init;

function init() {
    loadJSON('GET', 'https://restcountries.eu/rest/v2/all', function(d) {
        build(d);
    });

    function loadJSON(m, u, c) {
        var xHR = new XMLHttpRequest;
        xHR.open(m, u, true);

        xHR.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                c(JSON.parse(this.response));

            }
        }
        xHR.send();
    }

    function build(res) {
        // computer selects a country: 
        var number = Math.floor((Math.random() * res.length) + 1);
        // I want to see which country was selected:
        console.log(number);
        console.log(res[number].name);
        var svgurl = res[number].flag;
        console.log(svgurl);
        // ******************************
        // show flags:
        document.getElementById("myImg").src = svgurl;
        // ******************************
        // creat the content of countryname input:
        str = res[number].name.toLowerCase();
        var t = str.split("");
        randomFunc(t);

        function randomFunc(t) {
            var l = t.length,
                temp, index;
            while (l > 0) {
                index = Math.floor(Math.random() * l);
                l--;
                temp = t[l];
                t[l] = t[index];
                t[index] = temp;
            }
            return t;
        }
        var y = t;
        var p = '';
        console.log(y);
        for (var i = 0; i < y.length; i++) {
            p += y[i];
            p += " ";
            // console.log(p);
        }

        document.getElementById('countryname').value = p;
        var html = '1';
        var svghtml = '';



        var g = "";
        geuss(y);

        function geuss(y) {
            for (var i = 0; i < y.length; i++) {
                g += "-";
                g += " ";
            }
            document.getElementById('usergeuss').placeholder = g;
            document.getElementById('check').placeholder = g;

        }

        // for (var i = 0; i < res.length; i++) {
        //     html += '<div class="bg-danger text-white py-1 px-2 mt-2 rounded">';
        //     html += res[i].name;
        //     html += '</div>';
        // }
        // document.getElementById(id).innerHTML = html;


    }


}

function submit() {

    var u = document.getElementById('usergeuss').value;
    var y = document.getElementById('check').placeholder
    console.log(u);
    console.log(str);
    console.log(y);
    var a1 = u.split("");
    var a2 = str.split("");
    var a3 = y.split(" ");
    // console.log(a1);
    // console.log(a2);
    // console.log(a3);

    for (i = 0; i < a1.length; i++) {
        if (a1[i] == a2[i]) {
            a3[i] = a1[i];

        }
        document.getElementById('check').value = a3;
    }

    a3.pop();
    a4 = a2.toString()
    a6 = a3.toString();
    console.log(a2);
    console.log(a3);
    console.log(a4);
    console.log(a6);
    if (a4 == a6) {
        alert("Bingooo")
        console.log("pop")
    }

}