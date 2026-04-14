function ClickMeFunction()
{
    const c= 22.5;
    console.log("Const:",c);

    let a = true;
    console.log("Boolean: ",a);

    var b=20
    console.log("Integer value: ",b);

    b="Arun"
    console.log("String value: ",b);

    let heading = document.getElementById("heading");
    heading.innerText = "Heading Changed using Id";

    let classPara= document.getElementsByClassName("para");
    classPara[0].innerText = "Changed using class";

    let name= document.getElementsByName("myName");
    name[0].value="Updated Name";

    let para = document.getElementsByTagName("p");
    para[2].style.color="red";

    let para1= document.getElementsByTagName("p");
    para1[1].style.backgroundColor="yellow";
}