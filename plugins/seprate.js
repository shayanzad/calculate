// plugins/number-format.js

export default defineNuxtPlugin(() => {
    const seprate = (number) => {
      if (number === undefined || number === null || number === '') return '';
  
      // تبدیل به استرینگ و جدا کردن اعشار
      if (typeof number === 'string') {
        number = number.split('.')[0];
      }
  
      number = number.toString().replace(',', '');
      let x = number.split('.');
      let y = x[0];
      let z = x.length > 1 ? '.' + x[1] : '';
  
      const rgx = /(\d+)(\d{3})/;
      while (rgx.test(y)) {
        y = y.replace(rgx, '$1' + ',' + '$2');
      }
  
      return z === '.0000' ? y : y + z;
    };
  
    // فراهم کردن تابع به صورت گلوبال
    return {
      provide: {
        seprate,
      },
    };
  });
  