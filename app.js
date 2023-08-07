import { Github } from "./github.js";
import { UI } from "./ui.js";

const github = new Github();
const ui = new UI();
//
// !html den gelenler
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");
const themeBtn = document.querySelector("#theme-btn");
const body = document.querySelector("body");

//! olay izleyicileri
searchButton.addEventListener("click", getInput);
themeBtn.addEventListener("click", changeTheme);

// methodlar
function getInput() {
  //arama terimi dolu se calisir
  if (searchInput.value) {
    // api istegi atar
    github
      .fetchUserData(searchInput.value)
      .then((res) => {
        //eger kullanici bulunamadiysa
        if (res.data.message === "Not Found") {
          ui.showAlert("Aradiginiz Kullanici Bulunamadi", "alert-info");
        } else {
          //kullanici bulunduysa
          ui.showAlert("kullanici basariyle bulundu", "alert-success");
          ui.renderProfile(res.data);
          ui.renderProject(res.repos);
        }
      })
      .catch((err) => console.log(err));
    return;
  }
  // arama terimi bos ise
  ui.showalert("lutfen isim giriniz...", "alert-warning");
}

//temayi degistir

function changeTheme() {
  //arka plani degistirma
  body.classList.toggle("bg-dark");
  body.classList.toggle("text-bg-dark");

  if (body.classList.contains("bg-dark")) {
    themeBtn.innerHTML = "Acik Mod";
  } else {
    themeBtn.innerHTML = "Koyu Mod";
  }
}
