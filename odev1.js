let ogrenciler = [
    { adSoyad: "Ayşe Veli", telefon: "5551234567" },
    { adSoyad: "Ayşegül Yılmaz", telefon: "5552345678" },
    { adSoyad: "Banu Koç", telefon: "5559456789" },
    { adSoyad: "Betül Can", telefon: "5553456789" },
    { adSoyad: "Büşra Yılmaz", telefon: "5551234517" },
    { adSoyad: "Canan Yıldız", telefon: "5552342678" },
    { adSoyad: "Cemre Bulut", telefon: "5553426789" },
    { adSoyad: "Damla Güneş", telefon: "5572345678" },
    { adSoyad: "Deniz Can", telefon: "5503456789" },
    { adSoyad: "Dilara Yağmur", telefon: "5503456789" },
    { adSoyad: "Ebru Dağ", telefon: "5071345678" },
    { adSoyad: "Ecrin Kara", telefon: "5051234517" },
    { adSoyad: "Esma Nur Gedikbaş", telefon: "5052342678" },
    { adSoyad: "Mertcan Karaçalı", telefon: "5073426789" },
    { adSoyad: "Nalan Ok", telefon: "5572345678" },
    { adSoyad: "Nergis Çiçek", telefon: "5503486789" },
    { adSoyad: "Pelin Küçük", telefon: "5056234517" },
    { adSoyad: "Sema Çakmak", telefon: "5052352678" },
    { adSoyad: "Suna İz", telefon: "5052354678" },
    { adSoyad: "Zeynep Sultan", telefon: "5073422789" }]

    for (let i = 0; i < ogrenciler.length; i++) {
        ogrenciler[i].vize = Math.floor(Math.random() * 101);
        ogrenciler[i].final = Math.floor(Math.random() * 101);
    }
   
        for (let i = 0; i < ogrenciler.length; i++) {
            console.log(`${ogrenciler[i].adSoyad} - Vize: ${ogrenciler[i].vize}, Final: ${ogrenciler[i].final}`);
        }


        let i=0;
        do {
            console.log(`${ogrenciler[i].adSoyad} - Vize: ${ogrenciler[i].vize}, Final: ${ogrenciler[i].final}`);
            
        } while (i<ogrenciler.length);

        for(let index in ogrenciler){
            console.log(`${ogrenciler[index].adSoyad} - Vize: ${ogrenciler[index].vize}, Final: ${ogrenciler[index].final}`);
        }