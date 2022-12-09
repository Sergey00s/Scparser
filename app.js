const btn = document.querySelector("#ekl");
const btr = document.querySelector("#btr");
const sr = document.querySelector("#soru");
const ca = document.querySelector("#ca");
const cb = document.querySelector("#cb");
const cc = document.querySelector("#cc");
const cd = document.querySelector("#cd");
const cr = document.querySelector("#cr");
const counter = document.querySelector("#sayi");

let str = "";
let count = 0;

function my_download(filename, text)
{
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
  
      element.style.display = 'none';
      document.body.appendChild(element);
  
      element.click();
  
      document.body.removeChild(element);
}

function checkall()
{
    if
    (
        sr.value == "" ||
        ca.value == "" ||
        cb.value == "" ||
        cc.value == "" ||
        cd.value == "" ||
        cr.value == "" 
    )
    {
        alert("hic bir alan bos olamamali");
        console.log("bura");
        return false;
    }
    else
    {
        
        if (sr.value.indexOf("@") != -1 || sr.value.indexOf(":") != -1)
        {
            alert("@ veya : karakterleri bulunmamali");
            return false;
        }
        if (ca.value.indexOf("@") != -1 || ca.value.indexOf(":") != -1)
        {
            alert("@ veya : karakterleri bulunmamali");
            return false;
        }
        if (cb.value.indexOf("@") != -1 || cb.value.indexOf(":") != -1)
        {
            alert("@ veya : karakterleri bulunmamali");
            return false;
        }
        if (cc.value.indexOf("@") != -1 || cc.value.indexOf(":") != -1)
        {
            alert("@ veya : karakterleri bulunmamali");
            return false;
        }
        if (cd.value.indexOf("@") != -1 || cd.value.indexOf(":") != -1)
        {
            alert("@ veya : karakterleri bulunmamali");
            return false;
        }
        if (cr.value.indexOf("@") != -1 || cr.value.indexOf(":") != -1)
        {
            alert("@ veya : karakterleri bulunmamali");
            return false;
        }
        if (cr.value.trim() > 1)
        {
            alert("doğru cevap sadece a,b,c,d olarak yazilmali");
            return false;
        }
        if (cr.value.trim() != "a" && cr.value.trim() != "b" && cr.value.trim() != "c" && cr.value.trim() != "d")
        {
            alert("Dorgru cevap kucukharf a,b,c,d disinda bir karakter olmamali");
            return false;
        }
        return true;
    }
}


btn.addEventListener("click", (e) => {
    
    e.preventDefault();


    if(checkall() == false)
    {
        //alert("hiçbir kutu boş olamaz!\n@ ve : karakterleri bulunamaz!\n");
        return;
    }
    str += sr.value.trim();
    sr.value = "";
    str += ":"
    str += ca.value.trim();
    ca.value = "";
    str += ":";
    str += cb.value.trim();
    cb.value = "";
    str += ":";
    str += cc.value.trim();
    cc.value = "";
    str += ":";
    str += cd.value.trim();
    cd.value = "";
    str += ":";
    str += cr.value.trim();
    cr.value = "";
    str += "@";
    console.log(str);
    alert("Soru eklendi");
    count = count + 1;
    counter.innerHTML = "Soru sayisi: " + count;
   //my_download("hello.sc", "world");
});

btr.addEventListener("click", (e) => {  
    e.preventDefault();
    console.log("indi");
    my_download("sorular.sc", str);
    str = "";
});
