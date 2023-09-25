const timeContainer = document.getElementById('time');
const startCoding = '10-22-2021';
const startCodingDate = new Date(startCoding);
const intlNumberFormatter = new Intl.NumberFormat('en-US');

setInterval(() => {
  const now = new Date();
  const difference = Math.floor(
    (now.getTime() - startCodingDate.getTime()) / 1000
  );

  timeContainer.innerText = intlNumberFormatter.format(difference);
}, 1000);
