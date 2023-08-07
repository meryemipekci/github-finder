export class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
    this.repoArea = document.querySelector("#repos");
    this.alertArea = document.querySelector("#alert-area");
  }

  //profile arayuzunu ekrana basar
  renderProfile(data) {
    console.log(data);
    this.profile.innerHTML = `
    <div class="row border p-4 my-4">
    <div class="col-md-3">
      <img src="${data.avatar_url}" class="img-fluid rounded shadow" />
      <a target="_blank" class="btn btn-primary my-4" href="${data.html_url}">Profili Goster</a>
    </div>
    <div class="col-md-9">
      <span class="badge bg-primary mt-1">Acik Repolar: ${data.public_repos}</span>
      <span class="badge bg-secondary mt-1">Acik Gistler: ${data.public_gists}</span>
      <span class="badge bg-success mt-1">Takipciler: ${data.followers}</span>
      <span class="badge bg-info mt-1">Takip Edilenler: ${data.following}</span>

      <ul class="list-group mt-5">
        <li class="list-group-item"> Hakkinda: ${data.bio}</li>
        <li class="list-group-item">Sirket: ${data.company}</li>
        <li class="list-group-item">website: ${data.blog}</li>
        <li class="list-group-item">Konum: ${data.location}</li>
        <li class="list-group-item">Hesap Olusturma: ${data.created_at}</li>
      </ul>
    </div>
  </div>
  `;
  }

  // projeleri ekrana bas
  //projeler dizisindei her bir eleman icin kart olustur ve ekrana bas
  renderProject(data) {
    // repo alanini temizle
    this.repoArea.innerHTML = " ";
    data.forEach((repo) => {
      this.repoArea.innerHTML += `
      <div class="border row p-3 mb-4 align-items-center">
      <div class="col-6">
      <a target=_blank href="${repo.html_url}">${repo.name}</a>
      </div>
      <div class="col-6">
        <span class="badge bg-primary">Yildiz: ${repo.stargazers_count} </span>
        <span class="badge bg-secondary">Izleyenler: ${repo.watcher_count}</span>
        <span class="badge bg-success">Fork:${repo.forks_count} </span>
      </div>
     </div>
     `;
    });
  }
  // bildirim kutucugunu ekrana bas
  showAlert(message, classname) {
    // uyari divi olusturma
    const div = document.createElement("div");

    // uyari mesajını ekkleme
    div.innerText = message;

    //dive sabir claasi ekleme
    div.classList.add("alert");

    //dive dinamik classi ekleme
    div.classList.add(classname);

    // eski alerti temizleme
    this.alertArea.innerHTML = " ";

    //uyariyi html gonderme
    this.alertArea.appendChild(div);

    setTimeout(() => {
      div.remove();
    }, 3000);
  }
}
