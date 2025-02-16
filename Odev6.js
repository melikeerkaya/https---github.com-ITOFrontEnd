document.getElementById("kayıtformu").addEventListener("submit", function(e) {
    e.preventDefault();

    // Formdan verileri al
    let hasta = {
        ad: document.getElementById("ad").value,
        soyad: document.getElementById("soyad").value,
        tc: document.getElementById("tc").value,
        dogum: document.getElementById("dogum").value
      
        
    };

    // LocalStorage'a kaydet
    let hastalar = JSON.parse(localStorage.getItem("hastalar")) || [];
    hastalar.push(hasta);
    localStorage.setItem("hastalar", JSON.stringify(hastalar));

    alert("Hasta Kaydedildi!");

    // Formu temizle
    document.getElementById("").reset();
});