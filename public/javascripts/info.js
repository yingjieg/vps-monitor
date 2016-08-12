/**
 *
 * Created by guoyj on 2015/8/14.
 */

$(document).ready(getVPSInfo);


function getVPSInfo() {
    $("#getInfo").on("click", function() {
        getInfo().done(function(data) {
            var tr = [];
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    tr.push("<td>" + key + "</td><td>" + data[key] + "</td>");
                }
            }
            $("#details").html("<table><tr>" + tr.join("</tr><tr>") + "</tr></table>");
        });
    });
}

function getInfo() {

    return $.ajax({
        url: "http://localhost:3000/api/serviceInfo",
        type: "get",
        dataType: "json"
    });
}
