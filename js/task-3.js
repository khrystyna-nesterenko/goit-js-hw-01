function getElementWidth(content, padding, border) {
  return (
    Number.parseFloat(content) +
    (Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2)
  ).toFixed(0);
}

console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));

//! how functions work

function calcBMI(weight, height) {
  weight = weight.replace(',', '.');
  height = height.replace(',', '.');
  weight = Number(weight);
  height = Number(height);
  const result = weight / (height * height);

  return Number(result.toFixed(1));
}

const bmi = calcBMI('68.73', '1.75');
console.log(bmi);

//! if...else

// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   } else {
//     return 'You are small pizdyk';
//   }
// }

// console.log(checkAge(10));

// const grade = 85;

// if (grade >= 70) {
//   console.log('Satisfactorily');
// } else {
//   console.log('Unsatisfactorily');
// }

// function checkStorage(available, ordered) {
//   if (ordered > available) {
//     return 'Not enough goods in stock';
//   } else {
//     return 'Order is processed, our manager will contact you';
//   }
// }

// console.log(checkStorage(130, 130));

// ! ...?...:...

// function checkPassword(password) {
//   const correctPassword = 'jqueryismyjam';
//   return password === correctPassword
//     ? `Access granted`
//     : `Access denied, wrong password!`;
// }

// console.log(checkPassword('jqueryismyjam'));

// ! switch

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case 'starter':
//       return 0;
//       break;
//     case 'professional':
//       return 20;
//       break;
//     case 'organization':
//       return 50;
//       break;
//     default:
//       return 'Invalid subscription type!';
//   }
// }

// console.log(getSubscriptionPrice('organization'));

// ! Block scope

// if (true) {
//   const value = 'whyyy';
//   console.log(value);
// }

// console.log(value);

//! && - логічне "І"

// function isNumberInRange(start, end, number) {
//   return number >= start && number <= end;
// }

// console.log(isNumberInRange(10, 30, 5));

//! || АБО

// function checkAccess(subType) {
//   if (subType === 'pro' || subType === 'vip') {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkAccess('feef'));

//! НІ (!)

// function toggleModalVisibility(isVisible) {
//   return !isVisible;
// }

// console.log(toggleModalVisibility(true));

//! методи рядків

//* slice method

// function getSubstring(string, length) {
//   return string.slice(0, length);
// }

// console.log(getSubstring('Hello world', 5));

//* methods toLowerCase() і toUpperCase()

// const message = 'Welcome to Bahamas!';
// console.log(message.toUpperCase());
// console.log(message);

// function normalizeInput(input, to) {
//   if (to === 'upper') {
//     return input.toUpperCase();
//   } else {
//     return input.toLowerCase();
//   }
// }

// console.log(normalizeInput('Big SALE', 'lower'));

//* includes method

// function checkForName(fullName, firstName) {
//   fullName = fullName.toUpperCase();
//   firstName = firstName.toUpperCase();
//   return fullName.includes(firstName);
// }

// console.log(checkForName('Caty Stars', 'CaTy'));

//* startsWith() і endsWith()

// function checkFileExtension(fileName, ext) {
//   fileName = fileName.toLowerCase();
//   if (fileName.endsWith(ext)) {
//     return 'File extension matches';
//   } else {
//     return 'File extension does not match';
//   }
// }

// console.log(checkFileExtension('inDex.html', '.hTml'));

//*  indexOf + slice

// function getFileName(file) {
//   if (file.indexOf('.') === -1) {
//     return file;
//   } else {
//     return file.slice(0, file.indexOf('.'));
//   }
// }

// console.log(getFileName('app.js'));

//* trim

// function createFileName(name, ext) {
//   return `${name.trim()}.${ext.trim()}`;
// }

// console.log(createFileName('report ', 'csv'));

// //! cycles

// //* while

// function calculateTotal(number) {
//   let sum = 0;
//   let i = 1;
//   while (i <= number) {
//     sum += i;
//     i++;
//   }
//   return sum;
// }

// console.log(calculateTotal(3));

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// function calculateEvenTotal(number) {
//   return number++;
// }

// console.log(calculateEvenTotal(6));
