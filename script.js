// -------------------------------------------------------------------------
        // 9.1. DATASET MODUL COURSE (Ubah/Tambah Data Course Di Sini)
        // -------------------------------------------------------------------------
        const coursesData = [
            {
                id: 1,
                title: "Dasar Pemrograman",
                category: "basic",
                categoryLabel: "BASIC PROGRAMMING",
                mentor: "Sandhika Galih",
                level: "Pemula",
                students: "Unlimited",
                videos: "13 Videos",
                price: "50K",
                rating: 4.9,
                reviewsCount: 0,
                image: "./assets/img/courses_data/dasar_pemrogrman.png",
                description: "Sebelum mengetik baris code mari kita pelajari beberapa materi dan pengertiannya programming dulu yuk.",
                syllabus: ["-"],
                linkUrl: "https://www.youtube.com/watch?v=jGyYuQf-GeE&list=PLFIM0718LjIWonBxVAM2NgNuW0YxQverx" 
            },
            {
                id: 2,
                title: "Mengenal Pemrograman",
                category: "basic",
                categoryLabel: "BASIC PROGRAMMING",
                mentor: "Sandhika Galih & Toni Hariyanto",
                level: "Pemula",
                students: "Unlimited",
                videos: "15 Videos",
                price: "50K",
                rating: 4.8,
                reviewsCount: 0,
                image: "./assets/img/courses_data/mengenal_pemrograman.png",
                description: "Dalam kelas online ini, kamu akan belajar tentang hal-hal dasar yang harus diketahui untuk memulai belajar pemrograman komputer. Kamu akan belajar tentang konsep dasar pemrograman, jenis-jenis bahasa pemrograman, istilah-istilah umum dalam permograman sampai kepada jenis-jenis pekerjaan terkait pemrograman.",
                syllabus: ["-"],
                linkUrl: "https://www.codepolitan.com/dashboard/learn/courses/detail/intro-to-programming"
            },
            {
                id: 3,
                title: "Belajar Menggunakan Terminal atau CMD untuk Development",
                category: "basic",
                categoryLabel: "BASIC PROGRAMMING",
                mentor: "Ahmad Hakim",
                level: "Pemula",
                students: "Unlimited",
                videos: "10 Videos",
                price: "Free",
                rating: 4.6,
                reviewsCount: 340,
                image: "./assets/img/courses_data/belajar_menggunakan_terminal.png",
                description: "Panduan untuk mempelajari dasar-dasar Menggunakan Terminal atau CMD untuk Development dalam pemrograman web.",
                syllabus: ["-"],
                linkUrl: "https://www.codepolitan.com/dashboard/learn/courses/detail/belajar-menggunakan-terminal-atau-cmd-untuk-development"
            },
            {
                id: 4,
                title: "Fullstack Web Development with Modern JS & Node",
                category: "basic",
                categoryLabel: "BASIC PROGRAMMING",
                mentor: "Ahmad Oriza",
                level: "Pemula",
                students: "Unlimited",
                videos: "14 Videos",
                price: "Free",
                rating: 4.9,
                reviewsCount: 0,
                image: "./assets/img/courses_data/Belajar_GIT_Dasar.png",
                description: "Kelas Belajar Git Pemula ini dirancang untuk mereka yang baru memulai perjalanan mereka dalam pengembangan perangkat lunak dan ingin memahami cara kerja Git, sistem kontrol versi terdistribusi yang populer. Melalui kelas ini, peserta akan belajar konsep dasar Git, cara menggunakannya untuk melacak perubahan dalam proyek, dan bagaimana berkolaborasi dengan tim menggunakan platform seperti GitHub.",
                syllabus: ["-"],
                linkUrl: "https://www.codepolitan.com/dashboard/learn/courses/detail/belajar-git-pemula"
            },
            {
                id: 5,
                title: "Belajar Git Lanjutan — Bersama Nusendra",
                category: "basic",
                categoryLabel: "BASIC PROGRAMMING",
                mentor: "Nusendra Hanggarawan",
                level: "Pemula",
                students: "Unlimited",
                videos: "14 Videos",
                price: "Free",
                rating: 4.8,
                reviewsCount: 180,
                image: "./assets/img/courses_data/Git-Lanjutan9827590144710c04.png",
                description: "Pada course ini kita akan berkenalan dengan Git, mengetahui manfaat penggunaan Git dalam mengelola file, proyek dan juga manfaatnya ketika berkolaborasi dengan tim. Selain itu pada course ini juga dibahas tahapan instalasi Git, konfigurasi dasar, membuat repository, menyalin repository, mengambil dan mengirim perubahan dari proyek..",
                syllabus: ["Python Data Structures", "Pandas & NumPy Analysis", "Data Visualization with Matplotlib", "Web Dashboard Integration"],
                linkUrl: "https://www.codepolitan.com/dashboard/learn/courses/detail/belajar-git-dasar"
            },
            {
                id: 6,
                title: "UI Animation & Micro-Interactions in Figma",
                category: "uiux",
                categoryLabel: "UX/UI DESIGN",
                mentor: "Fajar Nugraha (Div. Creative & Design)",
                level: "Menengah",
                students: "210+",
                videos: "20 Videos",
                price: "Free",
                rating: 4.9,
                reviewsCount: 195,
                image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
                description: "Ciptakan pengalaman pengguna yang hidup dan memukau dengan teknik animasi antarmuka serta micro-interactions tingkat lanjut di Figma.",
                syllabus: ["Smart Animate Principles", "Component State Management", "Micro-Interactions Design", "Interactive Prototype Handoff"],
                linkUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            },
            {
                id: 7,
                title: "UI Animation & Micro-Interactions in Figma",
                category: "uiux",
                categoryLabel: "UX/UI DESIGN",
                mentor: "Fajar Nugraha (Div. Creative & Design)",
                level: "Menengah",
                students: "210+",
                videos: "20 Videos",
                price: "Free",
                rating: 4.9,
                reviewsCount: 195,
                image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
                description: "Ciptakan pengalaman pengguna yang hidup dan memukau dengan teknik animasi antarmuka serta micro-interactions tingkat lanjut di Figma.",
                syllabus: ["Smart Animate Principles", "Component State Management", "Micro-Interactions Design", "Interactive Prototype Handoff"],
                linkUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            }
        ];

        // -------------------------------------------------------------------------
        // 9.2. DATASET EXPERT & PLATFORM REKOMENDASI (Ubah Data Partners Di Sini)
        // -------------------------------------------------------------------------
        const partnersData = [
            {
                id: 1,
                type: "youtube",
                badge: "YouTube Expert 1",
                name: "Sandhika Galih",
                channelName: "Web Programming UNPAS",
                description: "Selamat datang di channel WPU\nWPU | We are Programmers, Unite!\nChannel khusus yang membahas mengenai teknologi internet dan pengembangan web / web development, dikelola oleh Sandhika Galih (Pa Dhika).",
                imageUrl: "./assets/img/pak_dhika.jpg",
                fallbackImage: "https://placehold.co/400x400/0d3b28/ffffff?text=Pa+Dhika",
                linkUrl: "https://www.youtube.com/@sandhikagalihWPU/playlists"
            },
            {
                id: 2,
                type: "youtube",
                badge: "YouTube Expert 2",
                name: "Faqihza Mukhlish",
                channelName: "Kelas Terbuka",
                description: "Kelas Terbuka adalah channel belajar programming / pemrograman / ngoding / koding berbahasa indonesia. Channel ini membahas teknik pemrograman secara umum beserta teknologi terkait dan teknik komputasi serta pengolahan data.\nPendekatan yang dilakukan pada kelas terbuka adalah:\nbrief, friendly dan fun.\nDengan demikian, channel ini diharapkan dapat mengisi kekosongan implementasi praktis pada materi pendidikan formal di Indonesia.\nChannel ini dikelola oleh:\nFaqihza Mukhlish, seorang peneliti di bidang Sistem Kontrol. Lulusan Sarjana Teknik Fisika, Magister Instrumentasi dan kontrol, ITB, dan Doktor (Ph.D) di UNSW, Sydney, Australia. Sekarang, beliau aktif menjadi Dosen di Jurusan Teknik Fisika, Institut Teknologi Bandung.",
                imageUrl: "./assets/img/faqihza_mukhlish.jpg",
                fallbackImage: "https://placehold.co/400x400/0d3b28/ffffff?text=Pak+Pukis",
                linkUrl: "https://www.youtube.com/@KelasTerbuka/playlists"
            },
            {
                id: 3,
                type: "youtube",
                badge: "YouTube Expert 3",
                name: "Dea Afrizal",
                channelName: "Dea Afrizal",
                description: "apapun yang berkaitan dengan keseharian gue & teknologi dibagi disini. dea afrizal programming & tech youtube channel 🚀",
                imageUrl: "./assets/img/dea_afrizal.jpg",
                fallbackImage: "https://placehold.co/400x400/0d3b28/ffffff?text=Dea+Afrizal",
                linkUrl: "https://www.youtube.com/@deaafrizal/playlists"
            },
            {
                id: 4,
                type: "youtube",
                badge: "YouTube Expert 4",
                name: "Eko Kurniawan",
                channelName: "Programmer Zaman Now",
                description: "Deskripsi singkat mengenai fokus materi channel YouTube expert ke-4 di sini.\nSelamat datang di channel saya.\nChannel ini sengaja dibuat untuk berbagi vlog dan screencast seputar dunia programmer.\nSemoga channel ini bermanfaat, jangan lupa untuk like, subscribe dan bagikan ke programmer-programmer yang lain agar bermanfaat ilmunya.\nSalam Programmer Zaman Now!",
                imageUrl: "./assets/img/eko_kurniawan.jpg",
                fallbackImage: "https://placehold.co/400x400/0d3b28/ffffff?text=Eko+Kurniawan",
                linkUrl: "https://www.youtube.com"
            },
            {
                id: 5,
                type: "platform",
                badge: "Platform Course 1",
                name: "CODEPOLITAN",
                channelName: "PT. Codepolitan Integrasi Indonesia",
                description: "CODEPOLITAN adalah platform pendidikan teknologi (EdTech) dan media informasi seputar pemrograman berbahasa Indonesia yang berbasis di Bandung. Didirikan pada tahun 2014, platform ini dirancang khusus untuk membantu pemula dan developer meningkatkan keterampilan coding, cybersecurity, hingga kecerdasan buatan (AI) melalui kelas online yang terstruktur.\nMelalui sistem langganan belajar yang terjangkau, CODEPOLITAN menyediakan kurikulum berbasis praktik industri nyata.",
                imageUrl: "./assets/img/codepillitan.jpg",
                fallbackImage: "https://placehold.co/400x400/0d3b28/ffffff?text=CODEPOLITAN",
                linkUrl: "https://www.codepolitan.com/"
            },
            {
                id: 6,
                type: "platform",
                badge: "Platform Course 2",
                name: "WPU Course",
                channelName: "PT WPU Inovasi Digital",
                description: "WPU Course (Web Programming UNPAS Course) adalah platform pendidikan teknologi (EdTech) premium yang berfokus pada pelatihan coding, web development, keamanan siber (cybersecurity), dan teknologi kecerdasan buatan (AI).\nPlatform ini merupakan bentuk evolusi dan program lanjutan resmi dari channel YouTube edukasi pemrograman terbesar di Indonesia, Web Programming UNPAS (WPU).",
                imageUrl: "./assets/img/wpu.jpg",
                fallbackImage: "https://placehold.co/400x400/0d3b28/ffffff?text=WPU+Course",
                linkUrl: "https://wpucourse.id/"
            },
            {
                id: 7,
                type: "platform",
                badge: "Platform Course 3",
                name: "JagoanSiber",
                channelName: "PT. Codepolitan Integrasi Indonesia (CODEPOLITAN).",
                description: "JagoanSiber adalah platform pendidikan intensif dan pusat pelatihan keamanan siber (cybersecurity) di Indonesia yang diinisiasi oleh CODEPOLITAN. Platform ini dirancang khusus untuk mencetak tenaga profesional siap kerja di bidang keamanan digital, bahkan bagi pemula yang tidak memiliki latar belakang IT sama sekali (non-IT).",
                imageUrl: "./assets/img/jagoansiber.jpg",
                fallbackImage: "https://placehold.co/400x400/0d3b28/ffffff?text=JagoanSiber",
                linkUrl: "https://www.edx.org"
            },
            {
                id: 8,
                type: "youtube",
                badge: "YouTube Expert 5",
                name: "Ignasius Ryan",
                channelName: "Ignasius Ryan",
                description: "Deskripsi singkat mengenai fokus materi channel YouTube expert ke-4 di sini.\nSelamat datang di channel saya.\nChannel ini sengaja dibuat untuk berbagi vlog dan screencast seputar dunia programmer.\nSemoga channel ini bermanfaat, jangan lupa untuk like, subscribe dan bagikan ke programmer-programmer yang lain agar bermanfaat ilmunya.\nSalam Programmer Zaman Now!",
                imageUrl: "./assets/img/ignasius_ryan.jpg",
                fallbackImage: "https://placehold.co/400x400/0d3b28/ffffff?text=Eko+Kurniawan",
                linkUrl: "https://www.youtube.com/@ignasiusryan/playlists"
            }
        ];

        // -------------------------------------------------------------------------
        // 9.3. DATASET ABOUT STEPPER (Ubah Deskripsi & Gambar Stepper Di Sini)
        // -------------------------------------------------------------------------
        const aboutStepsData = [
            {
                step: "01",
                title: "Wadah Kolaborasi & Inovasi Mahasiswa",
                description: "HMPS Sistem Informasi hadir sebagai rumah bagi seluruh mahasiswa SI untuk mengeksplorasi potensi, bertukar gagasan, dan membangun jejaring. Kami menyatukan keunggulan akademik dan kreativitas dalam kultur organisasi yang inklusif, kolaboratif, serta adaptif terhadap kemajuan teknologi.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
                caption: "HMPS SI: Rumah Kolaborasi & Pengembangan Potensi Mahasiswa"
            },
            {
                step: "02",
                title: "Mentoring Kebersamaan & Skill Enhancement",
                description: "Melalui semangat kebersamaan lintas angkatan dan dukungan alumni, HMPS SI menyelenggarakan program bimbingan sebaya, workshop hands-on, serta kelas keterampilan teknis agar setiap mahasiswa dapat berkembang secara profesional dan siap bersaing di industri IT.",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
                caption: "Mentoring Kebersamaan & Workshop Hands-on HMPS SI"
            },
            {
                step: "03",
                title: "Karya Nyata & Kontribusi Dampak Positif",
                description: "Lebih dari sekadar organisasi kemahasiswaan, HMPS SI mendorong setiap anggota untuk melahirkan karya nyata, proyek solusi digital, dan aksi sosial berbasis IT yang memberikan dampak positif bagi lingkungan kampus maupun masyarakat luas.",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
                caption: "Showcase Karya, Inovasi & Portofolio Mahasiswa SI"
            }
        ];

        // State Global Aplikasi
        let currentAboutStepIndex = 0;
        let selectedCategory = 'all';

        // -------------------------------------------------------------------------
        // 9.4. INITIALIZATION: Dijalankan Otomatis Setelah Seluruh DOM Selesai Dimuat
        // -------------------------------------------------------------------------
        document.addEventListener('DOMContentLoaded', () => {
            renderCourses();
            renderPartners();
            renderAboutStep();
            handleHeroTypingEffect();
            handleNavbarScroll();
        });

        // -------------------------------------------------------------------------
        // 9.5. FUNGSI SCROLL NAVBAR (Menambahkan Bayangan & Blur Latar Navbar Saat Scroll)
        // -------------------------------------------------------------------------
        function handleNavbarScroll() {
            const nav = document.getElementById('mainNavbar');
            if (!nav) return;

            if (window.scrollY > 20) {
                nav.classList.add('bg-[#0d3b28]/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-emerald-700/50');
            } else {
                nav.classList.remove('bg-[#0d3b28]/95', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-emerald-700/50');
            }
        }

        window.addEventListener('scroll', handleNavbarScroll);

        // -------------------------------------------------------------------------
        // 9.6. FUNGSI HERO TYPING EFFECT (Animasi Mengetik Teks Tech Stack)
        // -------------------------------------------------------------------------
        const techStacks = [
            "React.js & Tailwind CSS",
            "Node.js & Express.js",
            "Python & Data Science",
            "Laravel & PostgreSQL",
            "Flutter & Mobile App",
            "Docker & Cyber Security",
            "Next.js & TypeScript",
            "UI/UX & Figma Design"
        ];

        let stackIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function handleHeroTypingEffect() {
            const textElement = document.getElementById('heroTypingText');
            if (!textElement) return;

            const currentText = techStacks[stackIndex];

            if (isDeleting) {
                textElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }

            let typingSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === currentText.length) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                stackIndex = (stackIndex + 1) % techStacks.length;
                typingSpeed = 400;
            }

            setTimeout(handleHeroTypingEffect, typingSpeed);
        }

        // -------------------------------------------------------------------------
        // 9.7. FUNGSI RENDER KARTU COURSE
        // -------------------------------------------------------------------------
        function renderCourses() {
            const grid = document.getElementById('courseGrid');
            const emptyState = document.getElementById('emptyState');
            if (!grid) return;

            // Filter data berdasar kategori yang dipilih
            const filtered = coursesData.filter(course => {
                return selectedCategory === 'all' || course.category === selectedCategory;
            });

            grid.innerHTML = '';

            if (filtered.length === 0) {
                if (emptyState) emptyState.classList.remove('hidden');
                return;
            } else {
                if (emptyState) emptyState.classList.add('hidden');
            }

            // Loop dan buat struktur HTML untuk tiap kartu course
            filtered.forEach(course => {
                const card = document.createElement('div');
                card.className = "bg-white rounded-2xl border-2 border-slate-200/80 hover:border-[#0d3b28] hover:ring-4 hover:ring-[#0d3b28]/20 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden flex flex-col justify-between group cursor-pointer";
                card.onclick = () => openModal(course.id);

                card.innerHTML = `
                    <div>
                        <div class="relative h-44 sm:h-48 lg:h-52 overflow-hidden bg-slate-100">
                            <img src="${course.image}" alt="${course.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        </div>
                        <div class="p-5 sm:p-6 pb-3">
                            <span class="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5 sm:mb-2">
                                ${course.categoryLabel}
                            </span>
                            <h3 class="text-sm sm:text-base lg:text-lg font-bold text-slate-900 group-hover:text-[#0d3b28] transition-colors line-clamp-2 leading-snug mb-2 sm:mb-3">
                                ${course.title}
                            </h3>
                            <div class="flex items-center gap-2 mb-1">
                                <div class="flex text-amber-400 text-xs gap-0.5">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <span class="text-xs font-bold text-slate-800">${course.rating}</span>
                                <span class="text-xs text-slate-400 font-normal">(${course.reviewsCount})</span>
                            </div>
                        </div>
                    </div>

                    <div class="px-5 sm:px-6 pb-5 pt-0">
                        <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-slate-500 font-medium">
                            <span class="flex items-center gap-1.5">
                                <i class="fa-solid fa-user-group text-slate-400"></i> ${course.students} Enrolled
                            </span>
                            <span class="flex items-center gap-1.5">
                                <i class="fa-solid fa-video text-slate-400"></i> ${course.videos}
                            </span>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // -------------------------------------------------------------------------
        // 9.8. FUNGSI RENDER KARTU EXPERT / PLATFORM (SECTION PARTNERS)
        // -------------------------------------------------------------------------
        function renderPartners() {
            const grid = document.getElementById('partnersGrid');
            if (!grid) return;

            grid.innerHTML = '';

            partnersData.forEach(partner => {
                const isYT = partner.type === 'youtube';
                const iconClass = isYT ? 'fa-brands fa-youtube text-red-500' : 'fa-solid fa-graduation-cap text-amber-500';
                const badgeBg = isYT ? 'bg-red-50 text-red-700 border-red-200' : 'bg-amber-50 text-amber-800 border-amber-200';
                const btnBg = isYT ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-[#0d3b28] hover:bg-emerald-800 text-white';
                const fallbackAttr = partner.fallbackImage ? `onerror="this.onerror=null;this.src='${partner.fallbackImage}';"` : '';

                const card = document.createElement('div');
                card.className = "flex flex-col items-center justify-between text-center p-5 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-[#0d3b28] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group h-full w-full max-w-sm mx-auto";
                card.innerHTML = `
                    <div class="flex flex-col items-center w-full">
                        <div class="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr ${isYT ? 'from-red-500 via-amber-400 to-red-600' : 'from-emerald-600 via-amber-400 to-emerald-800'} shadow-md group-hover:scale-105 transition-transform duration-300 mb-3 shrink-0">
                            <div class="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white relative">
                                <img src="${partner.imageUrl}" ${fallbackAttr} alt="${partner.name}" class="w-full h-full object-cover">
                            </div>
                            <div class="absolute bottom-0 right-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-100 text-xs">
                                <i class="${iconClass}"></i>
                            </div>
                        </div>

                        <span class="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${badgeBg} mb-2.5">
                            ${partner.badge}
                        </span>

                        <h3 class="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#0d3b28] transition-colors leading-snug">
                            ${partner.name}
                        </h3>

                        <p class="text-xs font-semibold text-emerald-800 mb-2 mt-0.5">
                            ${partner.channelName}
                        </p>

                        <p class="text-xs text-slate-500 leading-relaxed font-normal mb-4 whitespace-pre-line">
                            ${partner.description}
                        </p>
                    </div>

                    <a href="${partner.linkUrl}" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 px-4 rounded-xl ${btnBg} text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 shrink-0 hover:shadow-md">
                        <span>${isYT ? 'Buka Channel' : 'Kunjungi Platform'}</span>
                        <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                `;
                grid.appendChild(card);
            });
        }

        // -------------------------------------------------------------------------
        // 9.9. FUNGSI FILTER KATEGORI COURSE
        // -------------------------------------------------------------------------
        function filterCategory(category) {
            selectedCategory = category;
            
            // Re-style semua tombol filter ke state normal
            const buttons = document.querySelectorAll('#categoryContainer button');
            buttons.forEach(btn => {
                btn.className = "category-btn px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all bg-white text-slate-700 border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50/50";
            });

            // Set styling aktif pada tombol yang sedang diklik
            if (window.event && window.event.currentTarget) {
                window.event.currentTarget.className = "category-btn active px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all bg-[#0d3b28] text-white shadow-md";
            }

            renderCourses();
        }

        // -------------------------------------------------------------------------
        // 9.10. FUNGSI RENDER TIMELINE STEPPER ABOUT US
        // -------------------------------------------------------------------------
        function renderAboutStep() {
            const currentData = aboutStepsData[currentAboutStepIndex];
            
            const imgEl = document.getElementById('aboutStepImage');
            const captionEl = document.getElementById('aboutStepCaption');
            
            if (imgEl) {
                imgEl.src = currentData.image;
                imgEl.alt = currentData.title;
            }
            if (captionEl) {
                captionEl.textContent = currentData.caption;
            }

            // Render Titik-Titik Indikator (Dots) Slide
            const dotsContainer = document.getElementById('aboutStepDots');
            if (dotsContainer) {
                dotsContainer.innerHTML = '';
                aboutStepsData.forEach((_, idx) => {
                    const dot = document.createElement('button');
                    dot.onclick = () => goToAboutStep(idx);
                    dot.className = idx === currentAboutStepIndex 
                        ? 'w-5 sm:w-6 h-1.5 sm:h-2 bg-amber-400 rounded-full transition-all duration-300' 
                        : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/60 hover:bg-white rounded-full transition-all duration-300';
                    dotsContainer.appendChild(dot);
                });
            }

            // Render Daftar Langkah Timeline (Vertical Stepper)
            const stepsContainer = document.getElementById('aboutStepsContainer');
            if (stepsContainer) {
                stepsContainer.innerHTML = '';

                // Garis Penghubung Vertikal
                const line = document.createElement('div');
                line.className = 'absolute left-4 sm:left-5 top-4 sm:top-5 bottom-4 sm:bottom-5 w-0.5 bg-slate-200 -z-10';
                stepsContainer.appendChild(line);

                aboutStepsData.forEach((item, idx) => {
                    const isActive = idx === currentAboutStepIndex;
                    const stepItem = document.createElement('div');
                    stepItem.className = 'flex items-start gap-4 sm:gap-5 cursor-pointer group';
                    stepItem.onclick = () => goToAboutStep(idx);

                    if (isActive) {
                        stepItem.innerHTML = `
                            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0d3b28] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-md ring-4 ring-emerald-100">
                                ${item.step}
                            </div>
                            <div class="flex-1 -mt-1 sm:-mt-2">
                                <span class="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-200 block tracking-tighter leading-none select-none mb-1">
                                    ${item.step}
                                </span>
                                <h3 class="text-base sm:text-xl lg:text-2xl font-bold text-slate-900 leading-snug">
                                    ${item.title}
                                </h3>
                                <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 sm:mt-3 font-normal max-w-lg">
                                    ${item.description}
                                </p>
                            </div>
                        `;
                    } else {
                        stepItem.innerHTML = `
                            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-100 text-slate-400 group-hover:bg-emerald-50 group-hover:text-[#0d3b28] font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200 transition-colors">
                                ${item.step}
                            </div>
                            <div class="flex-1 pt-1">
                                <h3 class="text-xs sm:text-base font-semibold text-slate-400 group-hover:text-slate-700 transition-colors">
                                    ${item.title}
                                </h3>
                            </div>
                        `;
                    }

                    stepsContainer.appendChild(stepItem);
                });
            }
        }

        // Navigasi Langkah Stepper Ke Sebelum/Sesudah
        function prevAboutStep() {
            const nextIdx = (currentAboutStepIndex - 1 + aboutStepsData.length) % aboutStepsData.length;
            goToAboutStep(nextIdx, 'left');
        }

        function nextAboutStep() {
            const nextIdx = (currentAboutStepIndex + 1) % aboutStepsData.length;
            goToAboutStep(nextIdx, 'right');
        }

        function goToAboutStep(index, direction = null) {
            if (index === currentAboutStepIndex && direction === null) return;

            const sweepLine = document.getElementById('aboutStepSweepLine');
            const targetDir = direction || (index > currentAboutStepIndex ? 'right' : 'left');

            if (sweepLine) {
                sweepLine.classList.remove('animate-sweep-ltr', 'animate-sweep-rtl');
                void sweepLine.offsetWidth;

                if (targetDir === 'right') {
                    sweepLine.classList.add('animate-sweep-ltr');
                } else {
                    sweepLine.classList.add('animate-sweep-rtl');
                }
            }

            setTimeout(() => {
                currentAboutStepIndex = index;
                renderAboutStep();
            }, 200);
        }

        // -------------------------------------------------------------------------
        // 9.11. FUNGSI KONTROL POP-UP MODAL
        // -------------------------------------------------------------------------
        function openModal(courseId) {
            const course = coursesData.find(c => c.id === courseId);
            if (!course) return;

            const modalContent = document.getElementById('modalContent');
            modalContent.innerHTML = `
                <div class="py-2 text-center">
                    <h3 class="text-lg sm:text-xl font-extrabold text-slate-900 mb-2">Lanjut ke Pelajaran?</h3>
                    <p class="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">Anda akan diarahkan ke materi pembelajaran lengkap modul ini.</p>
                    
                    <div class="flex items-center gap-3">
                        <button onclick="closeModal()" class="w-1/2 py-3 px-4 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm rounded-2xl transition-colors border border-slate-200 shadow-sm text-center">
                            Batal
                        </button>
                        <a href="${course.linkUrl}" target="_blank" rel="noopener noreferrer" onclick="closeModal()" class="w-1/2 py-3 px-4 bg-[#0d3b28] hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm rounded-2xl transition-all shadow-md text-center flex items-center justify-center gap-2">
                            <span>Lanjutkan</span>
                            <i class="fa-solid fa-arrow-right text-xs"></i>
                        </a>
                    </div>
                </div>
            `;

            document.getElementById('courseModal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('courseModal').classList.add('hidden');
        }

        // -------------------------------------------------------------------------
        // 9.12. FUNGSI TOGGLE MENU NAVBAR (MOBILE & CONTACT US DROPDOWN)
        // -------------------------------------------------------------------------
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            if (menu) menu.classList.toggle('hidden');
        }

        function toggleContactMenu() {
            const card = document.getElementById('contactCard');
            const chevron = document.getElementById('contactChevron');
            
            if (!card || !chevron) return;

            const isOpen = card.classList.contains('opacity-100');

            if (!isOpen) {
                card.classList.remove('opacity-0', 'scale-90', '-translate-y-4', 'pointer-events-none');
                card.classList.add('opacity-100', 'scale-100', 'translate-y-0', 'pointer-events-auto');
                chevron.classList.add('rotate-180');
            } else {
                card.classList.remove('opacity-100', 'scale-100', 'translate-y-0', 'pointer-events-auto');
                card.classList.add('opacity-0', 'scale-90', '-translate-y-4', 'pointer-events-none');
                chevron.classList.remove('rotate-180');
            }
        }

        // Event Listener: Otomatis Menutup Dropdown Kontak saat Mengklik Luar Area
        document.addEventListener('click', (e) => {
            const wrapper = document.getElementById('contactDropdownWrapper');
            const card = document.getElementById('contactCard');
            const chevron = document.getElementById('contactChevron');
            
            if (wrapper && !wrapper.contains(e.target) && card && card.classList.contains('opacity-100')) {
                card.classList.remove('opacity-100', 'scale-100', 'translate-y-0', 'pointer-events-auto');
                card.classList.add('opacity-0', 'scale-90', '-translate-y-4', 'pointer-events-none');
                chevron.classList.remove('rotate-180');
            }
        });
