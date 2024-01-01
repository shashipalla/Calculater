document.getElementById("addbut").onclick = add2inputs
        document.getElementById("subbut").onclick = sub2inputs
        document.getElementById("mulbut").onclick = mul2inputs

        function add2inputs()
        {
           let v1= document.getElementById("cal1").value;
           let v2= document.getElementById("cal2").value;
           let res= parseInt(v1)+ parseInt(v2);
           document.getElementById("result").innerHTML=res;
        }

        function sub2inputs()
        {
           let v1= document.getElementById("cal1").value;
           let v2= document.getElementById("cal2").value;
           let res= parseInt(v1) - parseInt(v2);
           document.getElementById("result").innerHTML=res;
        }

        function mul2inputs()
        {
           let v1= document.getElementById("cal1").value;
           let v2= document.getElementById("cal2").value;
           let res= parseInt(v1) * parseInt(v2);
           document.getElementById("result").innerHTML=res;
        }