function showAns(e, ques, ans) {

    if (e.style.transform == "rotate(180deg)") {
        var x = document.querySelectorAll(".q img");
        x.forEach((ele) => {
            ele.style.transform = "none";
            ele.style.marginTop = "6%"
        })
        x = document.querySelectorAll(".a");
        x.forEach((ele) => {
            ele.style.display = "none";
        })
        x = document.querySelectorAll(".q");
        x.forEach((ele) => {
            ele.style.fontWeight = "normal";
        })
        return
    }

    x = document.querySelectorAll(".q");
        x.forEach((ele) => {
            ele.style.fontWeight = "normal";
        })
    var x = document.querySelectorAll(".q img");
    x.forEach((ele) => {
        ele.style.transform = "none";
        ele.style.marginTop = "6%"
    })
    x = document.querySelectorAll(".a");
    x.forEach((ele) => {
        ele.style.display = "none";
    })
    e.style.transform = "rotate(180deg)";
    e.style.marginTop = "5%"
    document.querySelector(ans).style.display = "block";
    document.querySelector(ques).style.fontWeight = "bold";
}