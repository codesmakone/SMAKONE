# Dokumentasi Pages dan Routing
_Pages and Routing Documentation_

Dokumen ini memaparkan arsitektur yang mendasari pengorganisasian *Pages* dan alur *routing* dalam situs web SMAKONE. Tujuan desain ini adalah memastikan *view logic* atau logika level halaman benar-benar terisolasi dari *components* tingkat dasar.

_This document outlines the architecture underlying the organization of Pages and the routing flow within the SMAKONE website. The design objective is to ensure that the view logic or page-level logic is fully isolated from foundational components._

---

## 1. Arsitektur Routing
_1. Routing Architecture_

Transisi halaman dan navigasi diatur oleh *router engine*. Mekanisme *routing* bertugas mencegat perubahan URL di sisi *client* secara dinamis, sehingga perpindahan *view* terjadi tanpa proses memuat ulang (*reload*) langsung dari *server*. Pendekatan *single-page application* (SPA) ini memberikan pengalaman navigasi yang lebih cepat.

_Page transitions and navigation are managed by a router engine. The routing mechanism dynamically intercepts URL changes on the client-side, allowing view transitions to occur without a direct reload from the server. This single-page application (SPA) approach delivers a faster navigation experience._

Setiap halaman (Page) diinjeksi ke dalam layar secara kondisional saat jalur eksak dipanggil oleh pengunjung. Sangat penting menyusun rute yang efisien untuk menghindari beban siklus *render* yang berat (*render loops*).

_Each Page is conditionally injected into the screen when the exact path is requested by the visitor. It is crucial to structure efficient routes to prevent heavy render loop overhead._

---

## 2. Struktur Direktori Pages
_2. Pages Directory Structure_

Seluruh entitas *routing* tersimpan dalam hierarki `src/Pages/`. Karena situs web ini merangkum banyak divisi sekolah (mulai dari OSIS hingga manajemen ekstrakurikuler), strukturnya harus dikelompokkan dengan ketat agar kode tidak kusut.

_All routing entities are stored within the `src/Pages/` hierarchy. Because this website encapsulates many school divisions (ranging from the Student Council to extracurricular management), the structure must be strictly grouped to prevent code entanglement._

Berikut gambaran arsitektur folder utama:
_Below is an overview of the primary folder architecture:_
*   **Clubs Segmentation:** Diisolasi di direktori `src/Pages/Clubs/`. Membedakan setiap unit ekstrakurikuler seperti F1RST dan lainnya ke sebuah halaman mandiri. _(Isolated in the `src/Pages/Clubs/` directory. Distinguishing each extracurricular unit like F1RST and others into a standalone page.)_
*   **Organizational Segmentation:** Mengelompokkan aktivitas manajerial dan *view* profil dari pengurus (seperti di `src/Pages/Osis/`). _(Groups managerial activities and profile views of the board administration, such as in `src/Pages/Osis/`.)_

---

## 3. Komposisi Page yang Benar
_3. Proper Page Composition_

Setiap berkas kode di dalam direktori `Pages/` seharusnya bersifat murni sebagai instruktur perakitan tingkat atas. Ini berarti direktori *Pages* bukan tempat di mana kita menyusun sintaks *styling* dan detail grafis dari dasar.

_Each code file within the `Pages/` directory should genuinely behave purely as a top-level assembly instructor. This implies that the Pages directory is not the location for structuring styling syntax and graphical details from scratch._

Alih-alih membuat elemen mentah, sebuah rutin kerja dalam struktur tipe file *Page* hanya boleh berfokus untuk melakukan *import* dan menampilkan kembali komponen dari `src/Component/`. Semua fungsi pengaturan batas (*layout wrapper*), serta letak UI harus diserahkan kepada fungsi kerangka desain *utility-first* komponen itu sendiri.

_Instead of crafting raw elements, a working routine within a Page file structure must exclusively focus on importing and rendering components from `src/Component/`. All boundary configuration functions (layout wrapper), and UI positioning should be delegated entirely over to the utility-first design framework incorporated natively within the components themselves._

---

## 4. Parameter dan State Management Halaman
_4. Page Parameter and State Management_

Berbeda dengan level komponen, halaman memiliki otorisasi penuh untuk bertindak sebagai koordinator interaksi data *asynchronous* (seperti *fetching* data atau API call, bila nantinya struktur tersebut ditambahkan). Seluruh data yang ditangkap di tingkat *Page* sebaiknya langsung disaring dan dipisahkan menjadi bagian-bagian terpusat. 

_Unlike the component level, a Page has complete authorization to act as an asynchronous data interaction coordinator (like performing data fetching or API calls, if such a structure is later adopted). Essentially every fragment of data captured solely at the Page level should instantly be selectively filtered explicitly dividing it into centrally concentrated packages._

Untuk pendistribusian informasi ke dalam susunan layar, fungsikan mekanisme penerusan data properti (*props cascading*) murni satu arah ke seluruh elemen bawaannya di bawahnya, meminimalkan gangguan silang pada sinkronisasi *state management* skala besar.

_For distributing information downward into screen arrangements, operate purely on standard unidirectional continuous property data transition propagation (props cascading) routing directly down unto foundational sub-elements beneath it—effectively minimizing severe global large scale cross-contamination issues hitting standard state management synchronization flow grids._
