document.addEventListener("click", function(e)

{

  if_id = e . target. id;

  if(if_id == "change_background")

  {

    if_id = document.getElementById(if_id);

    if(if_id .box-titel . background == "rgba(37, 34, 55, 1)")

    {

        if_id .box-titel . background == "#ff4500";

    }

    else

    {

        if_id .box-titel . background == "rgba(37, 34, 55, 1)";

    }

  }

});