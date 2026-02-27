document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const cards = document.querySelectorAll('.product-card');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 1. Меняем активную кнопку
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 2. Получаем категорию для фильтрации
            const filterValue = tab.getAttribute('data-filter');

            // 3. Фильтруем карточки
            cards.forEach(card => {
                if (filterValue === 'all') {
                    card.classList.remove('hidden');
                } else {
                    // Проверяем, есть ли у карточки класс, совпадающий с фильтром
                    if (card.classList.contains(filterValue)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Плавное появление всех секций при скролле
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 2. Интерактивная смена видов в Closer Look
    const listItems = document.querySelectorAll('#lookList li');
    const mainImg = document.getElementById('mainLookImg');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            // Меняем активный класс
            listItems.forEach(li => li.classList.remove('active'));
            item.classList.add('active');

            // Плавная смена картинки
            mainImg.style.opacity = '0';
            setTimeout(() => {
                mainImg.src = item.getAttribute('data-img');
                mainImg.style.opacity = '1';
            }, 300);
        });
    });
});


/**
 * APPLE SUPPORT - BOMB INTERACTIVE ENGINE 2026
 * Фишки: Поиск, Анимации скролла, Реактивные компоненты
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Плавное появление элементов при скролле (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Применяем ко всем секциям и карточкам
    const animatedElements = document.querySelectorAll('section, .bg-white');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        revealObserver.observe(el);
    });

    // 2. Умный живой поиск
    const searchInput = document.querySelector('input[type="text"]');
    const searchableItems = document.querySelectorAll('section div.text-center, .grid > div');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        searchableItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = 'block';
                item.style.opacity = '1';
            } else {
                item.style.opacity = '0';
                setTimeout(() => {
                    if (!text.includes(query)) item.style.display = 'none';
                }, 300);
            }
        });
    });

    // 3. Эффект "Стеклянного хедера" при скролле
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            header.style.backdropFilter = 'blur(15px)';
            header.style.borderBottom = '1px solid #e5e7eb';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.borderBottom = 'none';
        }
    });

    // 4. Интерактивные Быстрые Действия (Quick Actions)
    const quickActions = document.querySelectorAll('.grid-cols-1 .bg-white');
    
    quickActions.forEach(card => {
        card.addEventListener('click', function() {
            const actionText = this.querySelector('p').innerText.split('\n')[1];
            showSupportModal(actionText);
        });
        // Добавим курсор
        card.style.cursor = 'pointer';
    });

    // Функция вызова "модалки" (симуляция чата)
    function showSupportModal(topic) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
        modal.innerHTML = `
            <div class="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl transform transition-all scale-110">
                <h3 class="text-2xl font-bold mb-4">Support</h3>
                <p class="text-gray-600 mb-6">Connecting you to an expert regarding: <br><strong>${topic}</strong></p>
                <div class="flex flex-col gap-3">
                    <button class="bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition">Start Chat</button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" class="text-gray-400 hover:text-gray-600">Cancel</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    // 5. Пасхалка для логотипа (Взрыв мощи при нажатии)
    const logoIcon = document.querySelector('ops span');
    if(logoIcon) {
        logoIcon.addEventListener('click', () => {
            logoIcon.style.transform = 'scale(2) rotate(360deg)';
            logoIcon.style.transition = 'all 0.5s ease';
            alert('Apple Support Turbo Mode Engaged! 🚀');
            setTimeout(() => logoIcon.style.transform = 'scale(1) rotate(0)', 1000);
        });
    }
});


/**
 * AIRPODS EXPERIENCE ENGINE 2026
 * Функционал: Параллакс героев, подсветка сравнения, Scroll Reveal
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ЭФФЕКТ ПАРАЛЛАКСА ДЛЯ HERO-КАРТОЧЕК
    // При движении мыши картинки внутри карточек слегка смещаются
    const heroCards = document.querySelectorAll('.hero-card');
    
    heroCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const img = card.querySelector('img');
            const rect = card.getBoundingClientRect();
            
            // Вычисляем положение курсора относительно центра карточки
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            // Двигаем картинку (очень мягко)
            img.style.transform = `scale(1.1) translate(${x * 20}px, ${y * 20}px)`;
        });

        card.addEventListener('mouseleave', (e) => {
            const img = card.querySelector('img');
            img.style.transform = `scale(1) translate(0, 0)`;
            img.style.transition = 'all 0.5s ease-out';
        });

        card.addEventListener('mouseenter', (e) => {
            const img = card.querySelector('img');
            img.style.transition = 'none'; // Убираем задержку во время слежения
        });
    });

    // 2. УМНАЯ ПОДСВЕТКА ТАБЛИЦЫ СРАВНЕНИЯ
    // При наведении на товар подсвечивается вся его колонка в характеристиках
    const compareItems = document.querySelectorAll('.compare-item');
    const specRows = document.querySelectorAll('.spec-row');

    compareItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            highlightColumn(index, true);
        });
        item.addEventListener('mouseleave', () => {
            highlightColumn(index, false);
        });
    });

    function highlightColumn(index, active) {
        specRows.forEach(row => {
            const cell = row.querySelectorAll('.spec-cell')[index];
            if (cell) {
                cell.style.transition = 'background-color 0.3s ease';
                cell.style.backgroundColor = active ? 'rgba(0, 113, 227, 0.05)' : 'transparent';
                cell.style.borderRadius = '8px';
            }
        });
        compareItems[index].style.transform = active ? 'translateY(-10px)' : 'translateY(0)';
        compareItems[index].style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    }

    // 3. ПЛАВНОЕ ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ (Scroll Reveal)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Стили для анимации появления (добавим динамически)
    const style = document.createElement('style');
    style.innerHTML = `
        .reveal-node {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Применяем ко всем важным блокам
    const elementsToAnimate = document.querySelectorAll('.hero-card, .compare-item, .spec-row');
    elementsToAnimate.forEach(el => {
        el.classList.add('reveal-node');
        revealObserver.observe(el);
    });

    // 4. ДИНАМИЧЕСКИЙ ТИТЛ (Пасхалка)
    // Когда пользователь уходит с вкладки, меняем текст
    const originalTitle = document.title;
    window.addEventListener('blur', () => {
        document.title = "🎧 Ждем тебя за AirPods!";
    });
    window.addEventListener('focus', () => {
        document.title = originalTitle;
    });
});

/**
 * APPLE PRIME ENGINE v2.0
 * Скрипт для создания "магии" на главной странице
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. УМНЫЙ ХЕДЕР ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.style.background = 'rgba(255, 255, 255, 0.72)';
            header.style.backdropFilter = 'blur(20px) saturate(180%)';
            header.style.borderBottom = '1px solid rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 1)';
            header.style.backdropFilter = 'none';
            header.style.borderBottom = 'none';
        }
    });

    // --- 2. ЭФФЕКТ ПОЯВЛЕНИЯ (SCROLL REVEAL) ---
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Перестаем следить после того, как элемент появился
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Применяем ко всем секциям и блокам (на основе твоего скриншота)
    const blocks = document.querySelectorAll('.hero, .second, .block');
    
    blocks.forEach(block => {
        // Добавляем начальные стили через JS, чтобы не ломать верстку без скрипта
        block.style.opacity = '0';
        block.style.transform = 'translateY(40px) scale(0.98)';
        block.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        revealObserver.observe(block);
    });

    // CSS класс для анимации (добавляем динамически)
    const style = document.createElement('style');
    style.innerHTML = `
        .is-visible {
            opacity: 1 !important;
            transform: translateY(0) scale(1) !important;
        }
        .hero-img, .block img {
            transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .block:hover img {
            transform: scale(1.03);
        }
    `;
    document.head.appendChild(style);

    // --- 3. ИНТЕРАКТИВНЫЙ ПАРАЛЛАКС ДЛЯ ТВОИХ КАРТИНОК ---
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxImages = document.querySelectorAll('img[class*="hero-img"]');

        parallaxImages.forEach(img => {
            const speed = 0.05;
            img.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // --- 4. КНОПКИ С ЭФФЕКТИВНЫМ ОТКЛИКОМ ---
    const buttons = document.querySelectorAll('.button, .btn-blue, .btn-white');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.95)';
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = 'scale(1)';
        });
        btn.style.transition = 'transform 0.2s ease';
    });

    console.log('🚀 Apple Magic Engine Loaded!');
});

/**
 * IPAD INTERACTIVE EXPERIENCE 2026
 * Функционал: Модальные окна, фильтрация, интерактив цветов
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. ДАННЫЕ ДЛЯ ПОДРОБНОЙ ИНФОРМАЦИИ (Data Object)
    const productDetails = {
        'iPad Pro': {
            cpu: 'Apple M4 chip',
            display: 'Ultra Retina XDR display',
            camera: '12MP Wide and 12MP Ultra Wide',
            extra: 'ProRes video recording, LiDR Scanner'
        },
        'iPad Air': {
            cpu: 'Apple M2 chip',
            display: 'Liquid Retina display',
            camera: '12MP Wide camera',
            extra: 'Compatible with Apple Pencil Pro'
        },
        'iPad': {
            cpu: 'A14 Bionic chip',
            display: '10.9-inch Liquid Retina',
            camera: '12MP Landscape Ultra Wide',
            extra: 'Four bold colors to choose from'
        },
        'iPad mini': {
            cpu: 'A17 Pro chip',
            display: '8.3-inch Liquid Retina',
            camera: '12MP Wide camera',
            extra: 'Supercompact and portable'
        }
    };

    // 2. ФУНКЦИЯ СОЗДАНИЯ МОДАЛЬНОГО ОКНА (Pop-up)
    function openModal(productName) {
        const details = productDetails[productName];
        if (!details) return;

        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 flex items-center justify-center z-[1000] p-4';
        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        modal.style.backdropFilter = 'blur(10px)';
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 0.3s ease';

        modal.innerHTML = `
            <div class="bg-white rounded-[30px] p-10 max-w-2xl w-full shadow-2xl transform scale-90 transition-transform duration-300">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-4xl font-bold">${productName}</h2>
                    <button class="close-modal text-3xl font-light hover:rotate-90 transition-transform">&times;</button>
                </div>
                <div class="grid grid-cols-2 gap-8">
                    <div>
                        <p class="text-gray-400 text-xs uppercase tracking-widest mb-1">Performance</p>
                        <p class="text-xl font-semibold mb-4">${details.cpu}</p>
                        <p class="text-gray-400 text-xs uppercase tracking-widest mb-1">Display</p>
                        <p class="text-xl font-semibold mb-4">${details.display}</p>
                    </div>
                    <div>
                        <p class="text-gray-400 text-xs uppercase tracking-widest mb-1">Camera</p>
                        <p class="text-xl font-semibold mb-4">${details.camera}</p>
                        <p class="text-gray-400 text-xs uppercase tracking-widest mb-1">Highlights</p>
                        <p class="text-lg text-blue-600 font-medium">${details.extra}</p>
                    </div>
                </div>
                <button class="close-modal mt-8 w-full bg-black text-white py-4 rounded-full font-bold hover:opacity-80 transition">Done</button>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden'; // Запрет скролла

        // Анимация появления
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.querySelector('div').style.transform = 'scale(1)';
        }, 10);

        // Закрытие
        modal.querySelectorAll('.close-modal').forEach(btn => {
            btn.onclick = () => {
                modal.style.opacity = '0';
                modal.querySelector('div').style.transform = 'scale(0.9)';
                setTimeout(() => {
                    modal.remove();
                    document.body.style.overflow = '';
                }, 300);
            };
        });
    }

    // 3. ПРИВЯЗКА СОБЫТИЙ К КНОПКАМ "LEARN MORE"
    document.querySelectorAll('.learn-more').forEach(link => {
        link.onclick = (e) => {
            e.preventDefault();
            const card = link.closest('.product-card');
            const title = card.querySelector('h3').innerText;
            openModal(title);
        };
    });

    // 4. ИНТЕРАКТИВ ЦВЕТОВЫХ ТОЧЕК (Color Dots)
    document.querySelectorAll('.dot').forEach(dot => {
        dot.style.cursor = 'pointer';
        dot.onclick = function() {
            const card = this.closest('.product-card');
            // Эффект "пульсации" при выборе цвета
            this.style.outline = '2px solid #0071e3';
            this.style.outlineOffset = '2px';
            
            // Убираем обводку у остальных
            const siblings = Array.from(this.parentNode.children).filter(el => el !== this);
            siblings.forEach(s => s.style.outline = 'none');

            // Можно добавить смену названия цвета (симуляция)
            console.log(`Color ${this.className} selected for ${card.querySelector('h3').innerText}`);
        };
    });

    // 5. УМНЫЙ ГОРИЗОНТАЛЬНЫЙ СКРОЛЛ
    const scrollContainer = document.querySelector('.horizontal-scroll');
    if (scrollContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;

        scrollContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollContainer.classList.add('active');
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        });
        scrollContainer.addEventListener('mouseleave', () => isDown = false);
        scrollContainer.addEventListener('mouseup', () => isDown = false);
        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 2; 
            scrollContainer.scrollLeft = scrollLeft - walk;
        });
    }

    // 6. ХОВЕР-ЭФФЕКТЫ ДЛЯ КАРТОЧЕК
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        card.onmouseenter = () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
        };
        card.onmouseleave = () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        };
    });
});

/**
 * APPLE WATCH EXPERIENCE 2026
 * Логика: Корзина, Экосистема и Скролл-анимации
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. ДАННЫЕ О ТОВАРАХ (Для корзины) ---
    const products = {
        'Apple Watch Series 11': { price: 399, img: './watch img/s11_5b6ada38f.png' },
        'Apple Watch SE': { price: 249, img: './watch img/se_4337eb886.png' },
        'Apple Watch Ultra 3': { price: 799, img: './watch img/u3_39e0aebdb.png' }
    };

    // --- 2. ЛОГИКА ДОБАВЛЕНИЯ В КОРЗИНУ ---
    const buyButtons = document.querySelectorAll('.btn-buy');
    
    buyButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const card = btn.closest('.shelf-item');
            const title = card.querySelector('h3').innerText;
            const productData = products[title];

            // Получаем текущую корзину из памяти или создаем пустую
            let cart = JSON.parse(localStorage.getItem('apple_cart')) || [];
            
            // Добавляем новый товар
            cart.push({
                name: title,
                price: productData.price,
                img: productData.img,
                id: Date.now()
            });

            // Сохраняем обратно
            localStorage.setItem('apple_cart', JSON.stringify(cart));

            // Визуальный отклик
            btn.innerText = 'Added ✓';
            btn.style.background = '#000';
            setTimeout(() => {
                btn.innerText = 'Buy';
                btn.style.background = '#0071e3';
            }, 1500);

            console.log('Product added to bag:', title);
        });
    });

    // --- 3. ИНТЕРАКТИВНАЯ ГАЛЕРЕЯ (Horizontal Drag) ---
    const slider = document.querySelector('.horizontal-scroll');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.style.cursor = 'grabbing';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    });

    // --- 4. ПЕРЕКЛЮЧАТЕЛЬ ЭКОСИСТЕМЫ (Acc-rows) ---
    const accRows = document.querySelectorAll('.acc-row');
    const ecoImg = document.querySelector('.eco-visual img');

    const ecoData = {
        'Apple Watch and iPhone': './watch img/9998b2c2038986f7a78fee2d080656f0.jpg',
        'Apple Watch and AirPods': './watch img/ba4d33157f4d7a7b51d6414df9099d66.jpg' // Замени на нужное фото
    };

    accRows.forEach(row => {
        row.addEventListener('click', () => {
            // Убираем активный класс у всех
            accRows.forEach(r => r.classList.remove('active'));
            // Добавляем текущему
            row.classList.add('active');
            
            // Меняем картинку с эффектом затухания
            const title = row.querySelector('h4').innerText;
            if (ecoData[title]) {
                ecoImg.style.opacity = '0';
                setTimeout(() => {
                    ecoImg.src = ecoData[title];
                    ecoImg.style.opacity = '1';
                }, 300);
            }
        });
    });


    const button = document.getElementById('themeToggle');
    const body = document.body;

    // Проверка, есть ли сохранённая тема
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark');
    }

    button.addEventListener('click', () => {
      body.classList.toggle('dark');

      // Сохраняем выбор пользователя
      if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });


    // --- 5. REVEAL ANIMATION (Появление при скролле) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 1s ease-out';
        observer.observe(section);
    });

});