document.addEventListener('DOMContentLoaded', function() {
  // Menu toggle button
  const menuToggle = document.createElement('button');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  document.body.appendChild(menuToggle);

  menuToggle.addEventListener('click', function() {
    document.body.classList.toggle('sidebar-active');
    document.querySelector('.sidebar').classList.toggle('active');
  });

  // Smooth scrolling for Table of Contents links
  const tocLinks = document.querySelectorAll('.toc-link');
  tocLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href').substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 20, // Adjust for padding
          behavior: 'smooth'
        });

        // Close sidebar on mobile after clicking a link
        if (document.body.classList.contains('sidebar-active')) {
          document.body.classList.remove('sidebar-active');
          document.querySelector('.sidebar').classList.remove('active');
        }
      }
    });
  });

  // Language switching functionality
  const languageBtn = document.getElementById('language-btn');
  let currentLanguage = 'en';
  
  const translations = {
    en: {
      title: "English with Nikitos",
      subtitle: "Your personal guide to confident English communication — from beginner to fluent, with the confidence to enjoy English content independently.",
      services: "What I Offer",
      servicesList: [
        "English Grammar (A1–B2)",
        "Listening Skills",
        "Conversational Practice",
        "Exam Preparation (НМТ / ЗНО)",
        "Lessons for Children"
      ],
      pricing: "Lesson Pricing",
      courses: "Course Packages",
      certificate: "My Certificate",
      certificateText: "I'm officially certified in English language. Click on any of the photos below to check out the certificate:",
      contact: "Contact Me",
      tocTitle: "Table of Contents",
      tocItems: [
        "Services",
        "Pricing",
        "Course Packages",
        "Teacher's Certificate",
        "Contacts"
      ],
      table1Headers: ["Lesson Type", "Duration", "Price"],
      table1Rows: [
        {type: "Trial Lesson", duration: "60 min", price: "150₴"},
        {type: "Individual Lesson", duration: "60 min", price: "200₴"},
        {type: "Group Lesson (2–3 students)", duration: "60 min", price: "120₴ per student"}
      ],
      table2Headers: ["Course Level", "Lesson Type", "Duration", "Price"],
      table2Rows: [
        {level: "From Zero to A2", type: "Individual", duration: "1 month (20 lessons)", price: "3500₴"},
        {level: "From Zero to A2", type: "Group (2–3 students)", duration: "1 month (20 lessons)", price: "6000₴"},
        {level: "From A2 to B2+", type: "Individual", duration: "3 months (20 lessons/month)", price: "9000₴ (3000₴/month)"},
        {level: "From A2 to B2+", type: "Group (2–3 students)", duration: "1 month (20 lessons)", price: "12000₴ (4000₴/month)"}
      ],
      email: "Email:",
      telegram: "Telegram:",
      phone: "Phone:"
    },
    ua: {
      title: "Англійська з Нікітосом",
      subtitle: "Ваш персональний гід до впевненого спілкування англійською — від початківця до вільного володіння, з можливістю самостійно насолоджуватися англомовним контентом.",
      services: "Що я пропоную",
      servicesList: [
        "Граматика англійської (A1–B2)",
        "Навички аудіювання",
        "Розмовна практика",
        "Підготовка до іспитів (НМТ / ЗНО)",
        "Заняття для дітей"
      ],
      pricing: "Ціни на заняття",
      courses: "Пакети курсів",
      certificate: "Мої сертифікати",
      certificateText: "Мій сертифікат англійської мови (Натисніть на будь-яке з фото нижче, щоб переглянути сертифікат):",
      contact: "Контакти",
      tocTitle: "Зміст",
      tocItems: [
        "Послуги",
        "Ціни",
        "Пакети курсів",
        "Сертифікат викладача",
        "Контакти"
      ],
      table1Headers: ["Тип заняття", "Тривалість", "Ціна"],
      table1Rows: [
        {type: "Пробний урок", duration: "60 хв", price: "150₴"},
        {type: "Індивідуальне заняття", duration: "60 хв", price: "200₴"},
        {type: "Групове заняття (2–3 студенти)", duration: "60 хв", price: "120₴ зі студента"}
      ],
      table2Headers: ["Рівень курсу", "Тип заняття", "Тривалість", "Ціна"],
      table2Rows: [
        {level: "З нуля до A2", type: "Індивідуальні", duration: "1 місяць (20 занять)", price: "3500₴"},
        {level: "З нуля до A2", type: "Групові (2–3 студенти)", duration: "1 місяць (20 занять)", price: "6000₴"},
        {level: "З A2 до B2+", type: "Індивідуальні", duration: "3 місяці (20 занять/місяць)", price: "9000₴ (3000₴/місяць)"},
        {level: "З A2 до B2+", type: "Групові (2–3 студенти)", duration: "1 місяць (20 занять)", price: "12000₴ (4000₴/місяць)"}
      ],
      email: "Email:",
      telegram: "Telegram:",
      phone: "Телефон:"
    }
  };

  function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ua' : 'en';
    languageBtn.innerHTML = currentLanguage === 'en' ? '<i class="fas fa-language"></i> UA' : '<i class="fas fa-language"></i> EN';
    updateText();
  }

  function updateToc() {
    const lang = translations[currentLanguage];
    document.querySelector('.toc-title-text').textContent = lang.tocTitle;
    
    const tocItems = document.querySelectorAll('.toc-link-text');
    tocItems.forEach((item, index) => {
      item.textContent = lang.tocItems[index];
    });
  }

  function updateText() {
    const lang = translations[currentLanguage];
    
    document.querySelector('header h1').textContent = lang.title;
    document.querySelector('header p').textContent = lang.subtitle;
    
    document.querySelector('.services h2').innerHTML = `<i class="fas fa-graduation-cap"></i> ${lang.services}`;
    const serviceItems = document.querySelectorAll('.services li');
    serviceItems.forEach((item, index) => {
      const icon = item.querySelector('i').outerHTML;
      item.innerHTML = `${icon} ${lang.servicesList[index]}`;
    });
    
    document.querySelectorAll('.pricing h2')[0].innerHTML = `<i class="fas fa-tags"></i> ${lang.pricing}`;
    document.querySelectorAll('.pricing h2')[1].innerHTML = `<i class="fas fa-box-open"></i> ${lang.courses}`;
    document.querySelector('.certificate h2').innerHTML = `<i class="fas fa-certificate"></i> ${lang.certificate}`;
    document.querySelector('.certificate p').textContent = lang.certificateText;
    document.querySelector('footer h2').innerHTML = `<i class="fas fa-envelope"></i> ${lang.contact}`;
    
    updateTable(1, lang.table1Headers, lang.table1Rows);
    updateTable(2, lang.table2Headers, lang.table2Rows);
    
    document.querySelector('footer p:nth-of-type(1)').innerHTML = `<i class="fas fa-envelope"></i> ${lang.email} <a href="mailto:nikson0702m@gmail.com">nikson0702m@gmail.com</a>`;
    document.querySelector('footer p:nth-of-type(2)').innerHTML = `<i class="fab fa-telegram"></i> ${lang.telegram} <a href="https://t.me/hexensaber" target="_blank">@hexensaber</a>`;
    document.querySelector('footer p:nth-of-type(3)').innerHTML = `<i class="fas fa-phone"></i> ${lang.phone} <a href="tel:+380987591876">+38 098 759 18 76</a>`;
    
    updateToc();
  }

  function updateTable(tableNumber, headers, rows) {
    const table = document.querySelectorAll('.pricing table')[tableNumber - 1];
    
    const thElements = table.querySelectorAll('thead th');
    thElements.forEach((th, index) => {
      th.textContent = headers[index];
    });
    
    const trElements = table.querySelectorAll('tbody tr');
    
    if (tableNumber === 1) {
      trElements.forEach((tr, rowIndex) => {
        const tdElements = tr.querySelectorAll('td');
        const rowData = rows[rowIndex];
        
        tdElements[0].textContent = rowData.type;
        tdElements[1].textContent = rowData.duration;
        tdElements[2].textContent = rowData.price;
        
        tdElements[0].setAttribute('data-label', headers[0]);
        tdElements[1].setAttribute('data-label', headers[1]);
        tdElements[2].setAttribute('data-label', headers[2]);
      });
    }
    else if (tableNumber === 2) {
      let rowCounter = 0;
      
      trElements.forEach((tr, index) => {
        const tdElements = tr.querySelectorAll('td');
        const rowData = rows[rowCounter];
        
        if (tdElements.length === 4) {
          tdElements[0].textContent = rowData.level;
          tdElements[1].textContent = rowData.type;
          tdElements[2].textContent = rowData.duration;
          tdElements[3].textContent = rowData.price;
          
          tdElements[0].setAttribute('data-label', headers[0]);
          tdElements[1].setAttribute('data-label', headers[1]);
          tdElements[2].setAttribute('data-label', headers[2]);
          tdElements[3].setAttribute('data-label', headers[3]);
          
          rowCounter++;
        }
        else if (tdElements.length === 3) {
          tdElements[0].textContent = rowData.type;
          tdElements[1].textContent = rowData.duration;
          tdElements[2].textContent = rowData.price;
          
          tdElements[0].setAttribute('data-label', headers[1]);
          tdElements[1].setAttribute('data-label', headers[2]);
          tdElements[2].setAttribute('data-label', headers[3]);
          
          rowCounter++;
        }
      });
    }
  }

  languageBtn.addEventListener('click', switchLanguage);
});