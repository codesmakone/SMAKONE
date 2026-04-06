# Dokumentasi Proyek Website SMAKONE
_SMAKONE Website Project Documentation_

Proyek ini adalah repositori situs web resmi untuk **OSIS SMAK 1 PENABUR Jakarta**.
Alamat: Jl. Tanjung Duren Raya No.4, RT.12/RW.2, Tj. Duren Utara, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470.

Dokumentasi ini menyediakan panduan komprehensif terkait arsitektur, instalasi, *testing*, infrastruktur, dan proses *deployment* untuk proyek website SMAKONE. Bahasa utama yang digunakan dalam dokumentasi ini adalah Bahasa Indonesia (dengan pengecualian istilah teknis standar), beserta terjemahan Bahasa Inggris yang menyertai setiap bagian untuk memfasilitasi kolaborasi multinasional.

_This project is the official website repository for the Student Council of SMAK 1 PENABUR Jakarta. 
Address: Jl. Tanjung Duren Raya No.4, RT.12/RW.2, Tj. Duren Utara, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470._

_This documentation provides a comprehensive guide regarding the architecture, installation, testing, infrastructure, and deployment processes for the SMAKONE website project. The primary language used in this documentation is Indonesian (with the exception of standard technical terms), along with an accompanying English translation for each section to facilitate multinational collaboration._

---

## 1. System Overview
_1. System Overview_

Website SMAKONE dibangun sebagai platform informasi dan interaksi digital utama bagi komunitas sekolah. Proyek ini diimplementasikan menggunakan *tech stack* modern yang berfokus pada kecepatan, skalabilitas, dan kemudahan dalam *maintenance*. *Source code* menstrukturkan pemisahan tanggung jawab (*separation of concerns*) secara logis, memungkinkan pengembang untuk bekerja secara paralel tanpa memicu konflik kode (*merge conflict*) yang berarti.

_The SMAKONE website is built as the primary information and digital interaction platform for the school community. This project is implemented using a modern tech stack focused on speed, scalability, and ease of maintenance. The source code logically structures the separation of concerns, allowing developers to work in parallel without triggering significant merge conflicts._

---

## 2. Documentation Hub
_2. Documentation Hub_

Untuk menjaga halaman utama ini agar tetap rapi, rincian mendalam mengenai struktur *User Interface* (UI) dan arsitektur *layout* telah dipisahkan ke dalam direktori independen. Silakan merujuk ke tautan internal berikut untuk membaca panduan teknis yang lebih spesifik:

_To keep this main page organized, in-depth details regarding the User Interface (UI) structure and layout architecture have been separated into an independent directory. Please refer to the following internal links to read more specific technical guidelines:_

*   **[Component Documentation](docs/components.md)**: Panduan lengkap mengenai rancangan, *props*, dan *reusability* dari elemen-elemen *User Interface* dasar (seperti *button*, *navbar*, dan *card* component). _(A complete guide regarding the design, props, and reusability of foundational User Interface elements such as buttons, navbars, and card components.)_
*   **[Pages Documentation](docs/pages.md)**: Rincian arsitektur *routing*, komposisi halaman utama, dan logika navigasi yang mengikat berbagai komponen menjadi satu kesatuan (*view*). _(Details of the routing architecture, main page compositions, and navigation logic that bind various components into a unified view.)_

---

## 3. System Infrastructure
_3. System Infrastructure_

Infrastruktur proyek ini dirancang untuk mencapai keandalan maksimum dengan tingkat *latency* yang sangat rendah. Secara umum, aplikasi ini di-*build* ke dalam bentuk *static asset* yang mengoptimalkan distribusi secara global. Server dikonfigurasikan agar mampu merespons lonjakan jumlah pengunjung secara bersamaan melalui sistem *load balancing* standar industri, serta mekanisme *caching* otomatis di lapisan *Content Delivery Network (CDN)*. Seluruh aset multimedia dan berkas statis disimpan di lingkungan *cloud storage* untuk memastikan stabilitas jangka panjang.

_The infrastructure of this project is designed to achieve maximum reliability with an extremely low latency level. Generally, the application is built into static assets formatting to optimize distribution globally. Servers are configured to respond to sudden spikes in concurrent visitors through industry-standard load balancing systems, as well as automatic caching mechanisms at the Content Delivery Network (CDN) layer. All multimedia assets and static files are hosted in a cloud storage environment to ensure long-term stability._

---

## 4. System Requirements & Local Installation
_4. System Requirements & Local Installation_

Sebelum memulai proses *development* lokal, pastikan seluruh persyaratan sistem telah terpenuhi. Anda harus menginstal Node.js dan *package manager* pada sistem operasi Anda. Instruksi eksekusi di bawah ini diwajibkan untuk dijalankan sebelum mengubah *source code* apa pun.

_Before completely initiating the local development process, ensure all system requirements are met. You must install Node.js and a package manager on your operating system. The execution instructions below are mandatory to run prior to modifying any source code._

### Prerequisites (_Prerequisites_)
1.  Node.js (versi LTS sangat direkomendasikan / _LTS version is highly recommended_).
2.  NPM atau Yarn *package manager* (_NPM or Yarn package manager_).
3.  Git untuk *version control* (_Git for version control_).

### Panduan Menjalankan Lingkungan Lokal (_Local Environment Guide_)
Jalankan deretan perintah berikut pada terminal lokal Anda:
_Execute the following sequential commands on your local terminal:_

```bash
# Clone repositori (Clone the repository)
git clone <url-repositori>

# Berpindah ke dalam working directory (Navigate to the working directory)
cd smakone-website

# Install seluruh dependencies yang diperlukan (Install all required dependencies)
npm install

# Menjalankan local development server (Start the local development server)
npm start
```

---

## 5. Deployment Guide
_5. Deployment Guide_

Proses *deployment* sistem ke *environment production* dilakukan melalui jalur *Continuous Integration and Continuous Deployment (CI/CD)*. Langkah-langkah penyebaran kode baru diotorisasi hanya setelah *commit* terakhir tervalidasi di dalam *stage environment* pengujian atau di cabang *development* terpisah.

_The system deployment process to the production environment is executed via a Continuous Integration and Continuous Deployment (CI/CD) pipeline. Steps to deploy new code are authorized exclusively after the final commit is validated within a testing staging environment or a separate development branch._

Prosedur dasar untuk *build production* secara manual adalah sebagai berikut:
_The fundamental procedure for a manual production build is as follows:_

1.  Selalu *sync* *local branch* kontrol versi Anda dengan *commit* terakhir dari cabang `main`. _(Always sync your local version control branch with the latest commit from the main branch.)_
2.  Gunakan perintah `npm run build` untuk menghasilkan bundel aset statis yang telah diminimalkan dan dibungkus untuk keperluan *production*. _(Execute the `npm run build` command to generate minimized static asset bundles wrapped for production purposes.)_
3.  Ekstrak direktori `build/` yang dihasilkan oleh *build process*. _(Extract the `build/` directory generated by the build process.)_
4.  Upload seluruh isi direktori `build/` secara aman (menggunakan SFTP atau SSH) menuju ke server *production*, pastikan direktori ditempatkan sesuai pada *public output path* server agar dapat terekspos. _(Securely upload all contents within the `build/` directory using SFTP or SSH to the production server, ensuring the directory is appropriately placed on the server's public output path to be exposed.)_

---

## 6. Testing Procedures
_6. Testing Procedures_

Stabilitas proyek merupakan pilar esensial, sehingga seluruh komponen dan modul sangat tunduk pada serangkaian pengujian perangkat lunak sebelum fase *deployment* bisa diinisiasi. Hal ini bertujuan untuk mengurangi *regression bug*, memastikan fungsi bisnis berjalan mulus, dan menghindari celah masalah kompatibilitas antar modul.

_Project stability is an essential pillar; hence, all components and modules are heavily subjected to a software testing series prior to the deployment phase initialization. This aims to reduce regression bugs, ensure smooth business functions, and avoid compatibility vulnerability issues between modules._

Langkah menjalankan *unit testing* dasar di lokal:
_Steps to execute basic unit testing locally:_

```bash
# Menjalankan test suite (Run the test suite)
npm test
```

Pada skala yang lebih besar, *Functional* dan *End-to-End (E2E) testing* diforsir secara otomatis di lapisan *CI pipeline*. Semua modifikasi *source code* yang diusulkan melalui *Pull Request (PR)* secara langsung diwajibkan untuk lolos tinjauan linier ini sebelum disetujui untuk di-*merge* ke dalam cabang utama. Setiap kode yang masuk harus dipastikan tidak memiliki *conflict* visual pada *User Interface* terhadap rancangan awal platform.

_On a broader scale, Functional and End-to-End (E2E) testing are automatically enforced at the CI pipeline layer. All source code modifications proposed via Pull Requests (PR) are directly mandated to pass this linear overview prior to approval for merging into the main branch. Any incoming code must be certified completely devoid of visual UI conflicts against the base platform design._
