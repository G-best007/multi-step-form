
(function(){
  
 
  let totalPrice = 0

  function CalCurrentPrice(SumOfPrice) {
    totalPrice += SumOfPrice
  }
  
  const planSection = [
    {
      title: 'Arcade',
      img: '/assets/images/icon-arcade.svg',
      monthPrice: 9,
      yearPrice: 90,
      yearText: '2 months free',
      class: 'card-one',

    },
    {
      title: 'Advance',
      img: '/assets/images/icon-advanced.svg',
      monthPrice: 12,
      yearPrice: 120,
      yearText: '2 months free',
      class: 'card-two',

    },
    {
      title: 'Pro',
      img: '/assets/images/icon-pro.svg',
      monthPrice: 15,
      yearPrice: 150,
      yearText: '2 months free',
      class: 'card-three',

    }
  ]



  const groupCard = document.querySelector('.group-card')

  function displayCard(cards) {
    let displaycard = planSection.map((items) => {
      return `<div class="card ${items.class}">
                <div class="card-body">
                  <img src=${items.img} alt="" class="image">
                  <div class="Arcade card-word">
                    <h6 class="mb-0">${items.title}</h6>
                    <p class="card-text opacity-50 monthly-plan">$${items.monthPrice}/mo</p>
                  </div>
                  <div class="yearly-plan">
                    <p class="opacity-50 mb-0">$${items.yearPrice}/yr</p>
                    <p class="fw-bold text">2 months free</p>
                  </div>
                </div>
              </div> `
    })
    displaycard = displaycard.join("")
    groupCard.innerHTML = displaycard

    // looping thru the 3 plan cards
    const Cards = document.querySelectorAll('.card')
    const arc = document.querySelector('.arcade')
    const sumOne = document.querySelector('.sum-one')
    const sumTwo = document.querySelector('.sum-two')
    const sumThree = document.querySelector('.sum-three')
    const arcOne = document.querySelector('.arc-one')
    const arcTwo = document.querySelector('.arc-two')
    const arcThree = document.querySelector('.arc-three')



    Cards.forEach((cards, index) => {
      cards.addEventListener('click', (e) => {
        const btn = e.currentTarget.classList
        
        CalCurrentPrice(planSection[index])
        // console.log(totalPrice);

        Cards.forEach((item) => {
          if (item !== btn) {
            item.classList.remove('hover')

          }
        })

        // console.log(index);


        if (btn.contains('card-one')) {
          btn.toggle('hover')


          if (sumOne) {
            arcOne.classList.add('active')
          } 
          if (sumTwo) {
            arcTwo.classList.remove('active')
          }
          if (sumThree) {
            arcThree.classList.remove('active')
          }


          // addMonth.push(ArcMonprice)
          // console.log(addMonth);
          // addYear.push(ArcYrprice)
          // console.log(addYear);
        }



        if (btn.contains('card-two')) {
          btn.toggle('hover')



          if (sumTwo) {
            arcTwo.classList.add('active')
          }
          if (sumOne) {
            arcOne.classList.remove('active')
          }
          if (sumThree) {
            arcThree.classList.remove('active')
          }


        }

        if (btn.contains('card-three')) {
          btn.toggle('hover')




          if (sumThree) {
            arcThree.classList.add('active')
          }
          if (sumOne) {
            arcOne.classList.remove('active')
          }
          if (sumTwo) {
            arcTwo.classList.remove('active')
          }

        }

        // let price = document.querySelectorAll('.price')
        // const lastPrice = price
        // lastPrice.forEach((Price)=>{
        //   addMonth.push(Price.textContent)
        // })


        // next to addon
        const Nexttoaddon = document.querySelector('.Nexttoaddon')

        Nexttoaddon.addEventListener('click', () => {
          AddOn.classList.add('next')
          plan.classList.remove('next')
        })







      })



    })

  }

  displayCard()

    // adddon section  


  const AddonSection = [
    {
      title: 'Online service',
      text: 'Access to multiplayer games',
      monthPrice: 1,
      yearPrice: 10,
    },
    {
      title: 'Larger storage',
      text: 'Extra 1TB of cloud save',
      monthPrice: 2,
      yearPrice: 20,

    },
    {
      title: 'Customizable profile',
      text: 'customize theme on your profile',
      monthPrice: 2,
      yearPrice: 20,

    }
  ]

  const addonCard = document.querySelectorAll('.addOn-card')

  function displayAddon() {
    let displayaddon = AddonSection.map((item) => {
      return `<div class="addOn-card my-3">
              <div class="body-card">
                <div class="card-words d-flex align-items-center justify-content-between my-2">
                  <div class="checkbox-container d-flex align-items-center"  >
                    <input type="checkbox" class="checkbox checkBox-one ms-3">
                    <div class="checkbox-text ps-3">
                      <h6 class="mb-0">${item.title}</h6>
                      <p class="card-text opacity-50 monthly-plan">${item.text}</p>
                    </div>
                  </div>
                  <p class="my-2 month-text pe-3" >+$${item.monthPrice}/mo</p>
                  <div class="year-plan">
                    <p class="year-text my-2 pe-3">+$${item.yearPrice}/yr</p>
                  </div>
                </div>
              </div>
            </div>`
    }).join('')

    addonCard.innerHTML = displayaddon  

  }

  displayAddon()



  // sum of both plansection and addsection

  // const planSectiontotal = planSection.reduce((acc, item)=> acc + item.monthPrice, 0)
  // const addonSectiontotal = AddonSection.reduce((acc, item)=> acc + item.monthPrice, 0)

  // const totalMonthPrice = planSectiontotal + addonSectiontotal
  // console.log(totalMonthPrice);



})();









const form = document.querySelector('.form')
const inputOne = document.querySelector('.input-one')
const inputtwo = document.querySelector('.input-two')
const inputthree = document.querySelector('.input-three')
const regOne = document.querySelector('.reg-one')
const regtwo = document.querySelector('.reg-two')
const regthree = document.querySelector('.reg-three')

const plan = document.querySelector('.plan')
const container = document.querySelector('.container')

// form section

form.addEventListener('submit', display)
function display(e) {

  e.preventDefault()


  submitted()



}
// submission function
function submitted() {
  if (inputOne.value === '') {
    regOne.classList.add('show')
  } else {
    regOne.classList.remove('show')
  }

  if (inputtwo.value === '') {
    regtwo.classList.add('show')
  } else {
    regtwo.classList.remove('show')
  }

  if (inputthree.value === '') {
    regthree.classList.add('show')
  } else {
    regthree.classList.remove('show')
  }

  // check for empty values

  if (!inputOne.value || !inputtwo.value || !inputthree.value) {
    plan.classList.remove('next')
    container.classList.remove('next')
  } else {
    plan.classList.add('next')
    container.classList.add('next')
  }



  console.log(inputOne.value, inputtwo.value, inputthree.value);

  container.classList.remove('back')
  plan.classList.remove('back')


  clearTimeout(delayone)


}


// // plan section
const cardWord = document.querySelectorAll('.card-word')
const yearplan = document.querySelectorAll('.yearly-plan')
const slider = document.querySelector('.slider')
const index = document.querySelector('.index')




// // AddOn section and Summary section in the Toggle

const Yearplan = document.querySelectorAll('.year-plan')
const Month = document.querySelectorAll('.month-text')

const yearSum = document.querySelectorAll('.yearly')
const monthSum = document.querySelectorAll('.month')




// toggling btwn monthly and yearly price

slider.addEventListener('click', () => {


  cardWord.forEach((btn) => {
    if (btn) {
      btn.classList.toggle('show-yearly')
    }
  })

  yearplan.forEach((btns) => {
    if (btns) {
      btns.classList.toggle('show-yearly')
    }
  })


  // Addon prices

  Yearplan.forEach((year) => {
    if (year) {
      year.classList.toggle('show-text')
    }
  })


  Month.forEach((month) => {
    if (month) {
      month.classList.toggle('show-text')
    }
  })

  // Sum price

  yearSum.forEach((Yearsum) => {
    Yearsum.classList.toggle('show-text')

  })

  monthSum.forEach((Monthsum) => {
    Monthsum.classList.toggle('show-text')
  })





})







// Back to the Personal info

index.addEventListener('click', (e) => {
  e.preventDefault()
  container.classList.add('back')
  plan.classList.add('back')

  inputOne.value = '';
  inputtwo.value = '';
  inputthree.value = '';

})

//Addon section

const AddOn = document.querySelector('.addOn')
const blank = document.querySelector('.Blank')
const checkboxes = document.querySelectorAll('.checkbox')
const Online = document.querySelector('.Online')
const Larger = document.querySelector('.Larger')
const Customizable = document.querySelector('.Customizable')
const online = document.querySelector('.online')
const larger = document.querySelector('.larger')
const customizable = document.querySelector('.customizable')

const nextToSum = document.querySelector('.nexttosum')
// changing the background and border color of the AddOn card when clicked


const addOnCard = document.querySelectorAll('.addOn-card')

addOnCard.forEach((check) => {
  const checkbox = check.querySelector('.checkbox')
  checkbox.addEventListener('click', () => {
    check.classList.toggle('hover')

  })
})



checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", e => {
    const btn = e.currentTarget.classList
    // let Tot = e.currentTarget.getAttribute('data-Set')
    // console.log(parseInt(Tot));
    // let Id = e.currentTarget.getAttribute('data-Id')
    // console.log(parseInt(Id));
    if (btn.contains('checkBox-one')) {
      btn.toggle('hover')
      if (Online) {
        online.classList.toggle('active')
      }

    }
    if (btn.contains('checkBox-two')) {
      btn.toggle('hover')
      if (Larger) {
        larger.classList.toggle('active')
      }

    }

    if (btn.contains('checkBox-three')) {
      btn.toggle('hover')
      if (Customizable) {
        customizable.classList.toggle('active')
      }
    }

    nextToSum.addEventListener('click', () => {
      Sum.classList.add('next')
      AddOn.classList.remove('next')
    })

  })
})

blank.addEventListener('click', () => {
  AddOn.classList.remove('next')
  plan.classList.add('next')
})








const Sum = document.querySelector('.Sum')
const backtoaddon = document.querySelector('.backtoaddon')
const confirmBtn = document.querySelector('.showThankYou')
const sum = document.querySelector('.sum')
const thankyou = document.querySelector('.thankyou')
const BackToAddon = document.querySelector('.BackToAddon')






backtoaddon.addEventListener('click', () => {
  Sum.classList.remove('next')
  AddOn.classList.add('next')
})


BackToAddon.addEventListener('click', () => {
  plan.classList.add('next')
  Sum.classList.remove('next')

})

confirmBtn.addEventListener('click', () => {
  sum.classList.add('show')
  thankyou.classList.add('show')

})


// setTimeOUT


// Mobile mode setTimeout
const btnone = document.querySelector('.btn-one')
const btntwo = document.querySelector('.btn-two')
const btnthree = document.querySelector('.btn-three')
const btnfour = document.querySelector('.btn-four')


function delayone() {
  btnone.style.color = 'black'
  btnone.style.background = 'var(--Light-blue)'
  btnone.style.border = 'var(--Light-blue)'
}

function delaytwo() {
  btntwo.style.color = 'black'
  btntwo.style.background = 'var(--Light-blue)'
  btntwo.style.border = 'var(--Light-blue)'
}

function delaythree() {
  btnthree.style.color = 'black'
  btnthree.style.background = 'var(--Light-blue)'
  btnthree.style.border = 'var(--Light-blue)'
}

function delayfour() {
  btnfour.style.color = 'black'
  btnfour.style.background = 'var(--Light-blue)'
  btnfour.style.border = 'var(--Light-blue)'
}

setTimeout(delayone, 1000)
setTimeout(delaytwo, 1000)
setTimeout(delaythree, 1000)
setTimeout(delayfour, 1000)



// Desktop mode setTimeout
const BtnOne = document.querySelectorAll('.Btn-one')
const BtnTwo = document.querySelectorAll('.Btn-two')
const BtnThree = document.querySelectorAll('.Btn-three')
const BtnFour = document.querySelectorAll('.Btn-four')


function delay() {
  BtnOne.forEach((btn) => {
    btn.style.color = 'black'
    btn.style.background = 'var(--Light-blue)'
    btn.style.border = 'var(--Light-blue)'
  });
}




function delayTwo() {
  BtnTwo.forEach((btn) => {
    btn.style.color = 'black'
    btn.style.background = 'var(--Light-blue)'
    btn.style.border = 'var(--Light-blue)'

  });
}


function delayThree() {
  BtnThree.forEach((btn) => {
    btn.style.color = 'black'
    btn.style.background = 'var(--Light-blue)'
    btn.style.border = 'var(--Light-blue)'

  });
}

function delayFour() {
  BtnFour.forEach((btn) => {
    btn.style.color = 'black'
    btn.style.background = 'var(--Light-blue)'
    btn.style.border = '2px solid var(--Light-blue)'

  });
}





const timeout = setTimeout(delay, 1000)
const timeoutTwo = setTimeout(delayTwo, 1000)
const timeoutThree = setTimeout(delayThree, 1000)
const timeoutFour = setTimeout(delayFour, 1000)

















