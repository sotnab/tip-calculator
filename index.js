const bill = document.getElementById('full-price')
const people = document.getElementById('number-of-people')
const custom = document.getElementById('custom-tip')
const tipButtons = document.querySelectorAll('.calc_radio')

const tipPerPerson = document.getElementById('tip-per-person')
const totalPerPerson = document.getElementById('total-per-person')

const calcTip = () => {
   if (bill.value <= 0 || people.value <= 0 || isNaN(bill.value) || isNaN(people.value)) return

   const billValue = parseFloat(bill.value)
   const peopleCount = parseInt(people.value)
   let tipValue;

   if (custom.value != '' || !isNaN(custom.value)) {
      tipValue = parseFloat(custom.value)
   } else {
      const checked = document.querySelector('input[name="tip-value"]:checked')
      if (!checked) return
      tipValue = parseFloat(checked.value)
   }

   const tip = billValue * tipValue
   const totalWithTip = billValue + tip

   tipPerPerson.innerText = toDecimal(tip / peopleCount)
   totalPerPerson.innerText = toDecimal(totalWithTip / peopleCount)
}

const toDecimal = (number) => {
   return Math.round(number * 100) / 100
}

people.addEventListener('change', calcTip)
bill.addEventListener('change', calcTip)

custom.addEventListener('focusout', calcTip)
custom.addEventListener('focus', () => {
   tipButtons.forEach(item => item.checked = false)
})


tipButtons.forEach((item) => {
   item.addEventListener('change', calcTip)
})

