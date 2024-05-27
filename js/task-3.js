function getElementWidth(content, padding, border) {
  return (
    Number.parseFloat(content) +
    (Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2)
  ).toFixed(0);
}

console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
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

//! методи

const message = 'JavaScript is awesome';
console.log(message.toUpperCase());
