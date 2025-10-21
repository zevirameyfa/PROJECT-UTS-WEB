// Data menu
const dataMenu = {
    makanan: [
        {nama:"Nasi Goreng Spesial TERA", harga:20000, gambar:"gnasgor.jpg", deskripsi:"Nasi goreng khas tera dengan topping telur mata sapi, ayam cincang, dan kerupuk gurih."},
        {nama:"Chicken Katsu Crispy", harga:23000, gambar:"gkatsu.jpg", deskripsi:"Daging ayam lembut dibalut tepung renyah disajikan dengan saus katsu spesial."},
        {nama:"Rice Bowl Ayam", harga:21000, gambar:"gricebowlayam.jpg", deskripsi:"Potongan ayam dengan saus teriyaki/asam manis  disajikan di atas nasi hangat."},
        {nama:"Rice Bowl Beef Pepper", harga:25000, gambar:"gricebowlayam.jpg", deskripsi:"Irisan daging sapi empuk dimasak dengan lada hitam, disajikan di atas nasi panas."},
        {nama:"Udang Mayo", harga:23000, gambar:"gudangmayo.jpg", deskripsi:"Udang goreng tepung disiram saus mayones lembut dan sedikit perasan lemon segar."},
        {nama:"Ayam Goreng Bawang", harga:22000, gambar:"gayamgorengbawang.jpg", deskripsi:"Ayam goreng garing dengan taburan bawang goreng dan sambal khas tera."},
    
    ],
    camilan: [
        { nama: "Fish & Chips", harga: 25000, gambar: "gfishchips.jpg", deskripsi: "Ikan goreng tepung renyah dengan saus tartar."},
        { nama: "Smoothie Bowl", harga: 20000, gambar: "gsmoothies.jpg", deskripsi: "Perpaduan buah segar, granola, dan yogurt."},
        { nama: "Grilled Corn", harga: 16000, gambar: "gjagung.jpg", deskripsi: "Jagung bakar dengan saus mayo gurih."},
        { nama: "Onion Ring", harga: 16000, gambar: "gonion.jpg", deskripsi: "Cincin bawang goreng renyah dengan saus BBQ."},
        { nama: "Snack Platter", harga: 25000, gambar: "gplatter.jpg", deskripsi: "Paket camilan lengkap untuk teman nongkrong."},
        { nama: "Burger & Chips", harga: 25000, gambar: "gburger.jpg", deskripsi: "Burger juicy dengan kentang goreng renyah."}
    ],
    minuman: [
        { nama: "Blue Ocean", harga: 20000, gambar: "drink1.jpg", deskripsi: "Minuman biru segar dengan rasa citrus dan jeruk kering di atasnya."},
        { nama: "Lychee Tea", harga: 15000, gambar: "drink2.jpg", deskripsi: "Teh manis berpadu dengan aroma lychee segar dan potongan buahnya."},
        { nama: "Breeze White", harga: 20000, gambar: "drink3.jpg", deskripsi: "Minuman khas TERRA dengan aroma mint lembut dan foam creamy di atasnya."},
        { nama: "Matcha Cheesecake", harga: 22000, gambar: "drink4.jpg", deskripsi: "Kombinasi matcha latte dan cheesecake lembut, creamy dan nikmat."},
        { nama: "Citrus Black Coffee", harga: 18000, gambar: "drink5.jpg", deskripsi: "Espresso berpadu jeruk nipis segar, menciptakan rasa unik manis asam."},
        { nama: "Caramel Frappe", harga: 22000, gambar: "drink6.jpg", deskripsi: "Kopi frappe lembut dengan saus karamel dan whipped cream di atasnya."}
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    inisialisasiWebsite();
});

function inisialisasiWebsite() {
    aturPendengarEvent();
    muatSemuaItemMenu();
    tampilkanTab('home');
    
    // Set tanggal minimum untuk form reservasi
    const inputTanggal = document.getElementById('date');
    if (inputTanggal) {
        const hariIni = new Date().toISOString().split('T')[0];
        inputTanggal.min = hariIni;
    }
}

function aturPendengarEvent() {
    // Navigation tabs
    document.querySelectorAll('.nav-link').forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const namaTab = this.getAttribute('data-tab');
            tampilkanTab(namaTab);
            
            // Update active state dengan Bootstrap
            document.querySelectorAll('.nav-link').forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Reservation form submission
    const formReservasi = document.querySelector('.form-reservasi');
    if (formReservasi) {
        formReservasi.addEventListener('submit', function(e) {
            e.preventDefault();
            handleSubmitReservasi(this);
        });
    }
}

function tampilkanTab(namaTab) {
    // Sembunyikan semua konten tab
    document.querySelectorAll('.tab-content').forEach(konten => {
        konten.classList.remove('active');
    });
    
    // Tampilkan konten tab yang dipilih
    const tabTerpilih = document.getElementById(namaTab + '-content');
    if (tabTerpilih) {
        tabTerpilih.classList.add('active');
    }
    
    // Scroll ke atas dengan smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function muatSemuaItemMenu() {
    // Muat Makanan
    const gridMakanan = document.querySelector('#makanan-grid');
    if (gridMakanan && dataMenu.makanan) {
        gridMakanan.innerHTML = dataMenu.makanan.map(item => buatItemMenu(item)).join('');
    }
    
    // Muat Camilan
    const gridCamilan = document.querySelector('#camilan-grid');
    if (gridCamilan && dataMenu.camilan) {
        gridCamilan.innerHTML = dataMenu.camilan.map(item => buatItemMenu(item)).join('');
    }
    
    // Muat Minuman
    const gridMinuman = document.querySelector('#minuman-grid');
    if (gridMinuman && dataMenu.minuman) {
        gridMinuman.innerHTML = dataMenu.minuman.map(item => buatItemMenu(item)).join('');
    }
}

function buatItemMenu(item) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="kartu-item-menu">
                <div class="gambar-item-menu position-relative">
                    <img src="${item.gambar}" alt="${item.nama}" class="img-fluid" loading="lazy">
                    ${item.pedas ? `<div class="indikator-pedas">${item.pedas}</div>` : ''}
                </div>
                <div class="konten-item-menu">
                    <h4 class="nama-item-menu">${item.nama}</h4>
                    <p class="deskripsi-item-menu">${item.deskripsi}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="harga-item-menu">Rp ${item.harga.toLocaleString('id-ID')}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function handleSubmitReservasi(form) {
    const dataForm = new FormData(form);
    const dataReservasi = {
        nama: document.getElementById('name').value,
        telepon: document.getElementById('phone').value,
        meja: document.getElementById('table').value,
        tanggal: document.getElementById('date').value,
        waktu: document.getElementById('time').value,
        durasi: document.getElementById('duration').value,
        permintaanKhusus: document.getElementById('special-requests').value
    };
    
    // Validasi
    if (!dataReservasi.nama || !dataReservasi.telepon || 
        !dataReservasi.meja || !dataReservasi.durasi || !dataReservasi.tanggal || !dataReservasi.waktu) {
        alert('❌ Harap isi semua field yang wajib diisi');
        return;
    }
    
    // Validasi tanggal
    const tanggalDipilih = new Date(dataReservasi.tanggal);
    const hariIni = new Date();
    hariIni.setHours(0, 0, 0, 0);
    
    if (tanggalDipilih < hariIni) {
        alert('❌ Harap pilih tanggal yang valid (hari ini atau masa depan)');
        return;
    }
    
    // Validasi format waktu
    const regexWaktu = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$|^([1-9]|1[0-2])\s*(pagi|siang|sore|malam)$/i;
    if (!regexWaktu.test(dataReservasi.waktu)) {
        alert('❌ Format waktu tidak valid. Gunakan format 24 jam (14:00) atau format 12 jam (2 sore)');
        return;
    }
    
    // Validasi durasi
    const regexDurasi = /^[1-9][0-9]*\s*(jam|hour|hr)?$/i;
    if (!regexDurasi.test(dataReservasi.durasi)) {
        alert('❌ Format durasi tidak valid. Contoh: 2 jam, 3 jam, 4 jam');
        return;
    }
    
    // Format tanggal untuk ditampilkan
    const tanggalTerformat = new Date(dataReservasi.tanggal).toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Tampilkan pesan sukses
    alert(`✅ Reservasi Meja Billiard Berhasil!\n\n📋 Detail Reservasi:\n├─ Nama: ${dataReservasi.nama}\n├─ Telepon: ${dataReservasi.telepon}\n├─ Meja: ${dataReservasi.meja}\n├─ Durasi: ${dataReservasi.durasi}\n├─ Tanggal: ${tanggalTerformat}\n├─ Waktu: ${dataReservasi.waktu}\n└─ Permintaan: ${dataReservasi.permintaanKhusus || 'Tidak ada'}\n\nKami akan menghubungi via WhatsApp untuk konfirmasi lebih lanjut.`);
    
    // Reset form
    form.reset();
    
    // Reset tanggal minimum
    const inputTanggal = document.getElementById('date');
    if (inputTanggal) {
        const hariIni = new Date().toISOString().split('T')[0];
        inputTanggal.min = hariIni;
    }
    
    // Kembali ke tab beranda setelah reservasi
    setTimeout(() => {
        tampilkanTab('home');
        document.querySelectorAll('.nav-link').forEach(navLink => navLink.classList.remove('active'));
        document.querySelector('[data-tab="home"]').classList.add('active');
    }, 1500);
}