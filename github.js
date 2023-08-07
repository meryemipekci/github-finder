export class Github {
  constructor() {
    this.client_id = "b54ce9fa446421d45f17";
    this.client_secret = "3570f1cc34b434ebf7fdb6c5f57bb542c507bf18";
    this.per_page = 10;
    this.sort = "asc";
  }
  // apiden kullanici bilgilerini alma
  async fetchUserData(username) {
    //parametre olarak gelen kullanici ismine gore istek attik
    const profileRes = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&sort=${this.sort}&per_page=${this.per_page}`
    );

    //gelen cevabi json verisine cevirme
    const data = await profileRes.json();
    const repos = await repoRes.json();

    //fonksiyon cgrıldıgında bilgi
    return { data, repos };
  }
}
