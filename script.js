document.addEventListener('DOMContentLoaded', function() {
    // Language switching functionality
    const languageBtn = document.getElementById('language-btn');
    let currentLanguage = 'en';
    
    // Complete translations object
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
        // Table 1 translations
        table1Headers: ["Lesson Type", "Duration", "Price"],
        table1Rows: [
          ["Trial Lesson", "60 min", "150₴"],
          ["Individual Lesson", "60 min", "200₴"],
          ["Group Lesson (2–3 students)", "60 min", "120₴ per student"]
        ],
        // Table 2 translations
        table2Headers: ["Course Level", "Lesson Type", "Duration", "Price"],
        table2Rows: [
          ["From Zero to A2", "Individual", "1 month (20 lessons)", "3500₴"],
          ["Group (2–3 students)", "1 month (20 lessons)", "6000₴"],
          ["From A2 to B2+", "Individual", "3 months (20 lessons/month)", "9000₴ (3000₴/month)"],
          ["Group (2–3 students)", "1 month (20 lessons)", "12000₴ (4000₴/month)"]
        ],
        // Contact translations
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
        // Table 1 translations
        table1Headers: ["Тип заняття", "Тривалість", "Ціна"],
        table1Rows: [
          ["Пробний урок", "60 хв", "150₴"],
          ["Індивідуальне заняття", "60 хв", "200₴"],
          ["Групове заняття (2–3 студенти)", "60 хв", "120₴ зі студента"]
        ],
        // Table 2 translations
        table2Headers: ["Рівень курсу", "Тип заняття", "Тривалість", "Ціна"],
        table2Rows: [
          ["З нуля до A2", "Індивідуальні", "1 місяць (20 занять)", "3500₴"],
          ["Групові (2–3 студенти)", "1 місяць (20 занять)", "6000₴"],
          ["З A2 до B2+", "Індивідуальні", "3 місяці (20 занять/місяць)", "9000₴ (3000₴/місяць)"],
          ["Групові (2–3 студенти)", "1 місяць (20 занять)", "12000₴ (4000₴/місяць)"]
        ],
        // Contact translations
        email: "Email:",
        telegram: "Telegram:",
        phone: "Телефон:"
      }
    };
  
    // Function to switch language
    function switchLanguage() {
      currentLanguage = currentLanguage === 'en' ? 'ua' : 'en';
      languageBtn.innerHTML = currentLanguage === 'en' ? '<i class="fas fa-language"></i> UA' : '<i class="fas fa-language"></i> EN';
      updateText();
    }
  
    // Function to update all text on the page
    function updateText() {
      const lang = translations[currentLanguage];
      
      // Update header
      document.querySelector('header h1').textContent = lang.title;
      document.querySelector('header p').textContent = lang.subtitle;
      
      // Update services
      document.querySelector('.services h2').innerHTML = `<i class="fas fa-graduation-cap"></i> ${lang.services}`;
      const serviceItems = document.querySelectorAll('.services li');
      serviceItems.forEach((item, index) => {
        const icon = item.querySelector('i').outerHTML;
        item.innerHTML = `${icon} ${lang.servicesList[index]}`;
      });
      
      // Update section titles
      document.querySelectorAll('.pricing h2')[0].innerHTML = `<i class="fas fa-tags"></i> ${lang.pricing}`;
      document.querySelectorAll('.pricing h2')[1].innerHTML = `<i class="fas fa-box-open"></i> ${lang.courses}`;
      document.querySelector('.certificate h2').innerHTML = `<i class="fas fa-certificate"></i> ${lang.certificate}`;
      document.querySelector('.certificate p').textContent = lang.certificateText;
      document.querySelector('footer h2').innerHTML = `<i class="fas fa-envelope"></i> ${lang.contact}`;
      
      // Update pricing tables
      updateTable(1, lang.table1Headers, lang.table1Rows);
      updateTable(2, lang.table2Headers, lang.table2Rows);
      
      // Update contact information
      document.querySelector('footer p:nth-of-type(1)').innerHTML = `<i class="fas fa-envelope"></i> ${lang.email} <a href="mailto:nikson0702m@gmail.com">nikson0702m@gmail.com</a>`;
      document.querySelector('footer p:nth-of-type(2)').innerHTML = `<i class="fab fa-telegram"></i> ${lang.telegram} <a href="https://t.me/hexensaber" target="_blank">@hexensaber</a>`;
      document.querySelector('footer p:nth-of-type(3)').innerHTML = `<i class="fas fa-phone"></i> ${lang.phone} <a href="tel:+380987591876">+38 098 759 18 76</a>`;
    }
  
    // Helper function to update tables
    function updateTable(tableNumber, headers, rows) {
      const table = document.querySelectorAll('.pricing table')[tableNumber - 1];
      
      // Update headers
      const thElements = table.querySelectorAll('thead th');
      thElements.forEach((th, index) => {
        th.textContent = headers[index];
      });
      
      // Update rows
      const trElements = table.querySelectorAll('tbody tr');
      trElements.forEach((tr, rowIndex) => {
        const tdElements = tr.querySelectorAll('td');
        tdElements.forEach((td, colIndex) => {
          // Skip rowspan cells (they should keep their original content)
          if (!td.hasAttribute('rowspan')) {
            td.textContent = rows[rowIndex][colIndex];
          }
        });
      });
    }
  
    // Add event listener to language button
    languageBtn.addEventListener('click', switchLanguage);
  });
