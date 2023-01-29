function searchTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteCookie() {
  document.cookie = "viewed=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  return true;
}

function viewed(event) {
  let index = event.target.classList.item(2).replace("details-form-", "");
  let tr = document.getElementById(`tr${index}`);
  tr.classList.add("bg-danger");
  let check = getCookie("viewed");
  if (!check.length) setCookie("viewed", index, 0.1);
  if (check.length) setCookie("viewed", check + "-" + index, 0.1);
  const form = event.target.parentElement;
  form.submit();
}

(() => {
  let ck = getCookie("viewed");
  if (!ck.length) setCookie("viewed", "", 0.1);
  if (ck.length) {
    let indexes = ck.split("-");
    indexes?.forEach((index) => {
      let tr = document.getElementById(`tr${index}`);
      tr.classList.add("bg-danger");
    });
  }
})();
