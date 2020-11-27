$(function(){
    $("#form-id").submit(function(){
        return false;
    });
    $("#carboTotal").html(sum(2));
    $("#caloTotal").html(sum(3));

    $("#button").click(function(){
        var itm = document.getElementById("names");
        var option = itm.options[itm.selectedIndex];
        var carb = option.getAttribute("carbs");
        var cal = option.getAttribute("cal");
        var food = document.getElementById("food");
        food.innerHTML=
        food.innerHTML+ `<tr>
        <th scope="row">${option.text}</th>
        <td carbbsValue="${carb}">${carb}</td>
        <td calValue="${cal}">${cal}</td>
        <td><button class"btn btn-primary btn-sm" type"button" onclick='delitem(event)'>Delete</button></td>
        </tr>`;
        console.log(option.value);
        console.log(option.text);
        console.log(carb);
    });
    $("#calculate").click(calculate);
});

function delitem(e)
{
    var btn = e.target;
    var td = btn.parentNode;
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
    $("#carboTotal").html(sum(0));
    $("#caloTotal").html(sum(0));
}

function calculate()
{
    $("#carboTotal").html(sum(2));
    $("#caloTotal").html(sum(3));
}

function sum(index) {
    var total = 0;
    $("td:nth-child(" + index + ")").each(function () {
      total += parseInt($(this).text(), 10) || 0;
    });
    return total;
  }