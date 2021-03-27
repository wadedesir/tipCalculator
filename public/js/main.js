document.querySelector('.submit').addEventListener('click', calculate)

function calculate(){
  let cost = document.querySelector('#bill').value
  let service = document.querySelector('.service').value
  let people = document.querySelector('#persons').value;

  if (Number(cost) === 0 || Number(people) == 0) {
    return alert('Please enter a valid number.')
  }else if (service == 0){
    return document.querySelector('.submit').value = `$0`
  }

  fetch(`/calculate?cost=${cost}&service=${service}&people=${people}`)
    .then( (res) => res.json())
    .then( (data) => {
      if (data.tip < 1) {
        return alert('Cost to person ratio is too big. Tip would be less than $1 per person')
      }else{
        (Number(people) > 1) ? document.querySelector('.submit').value = `$${Math.floor(data.tip)} Each` : document.querySelector('.submit').value = `$${Math.floor(data.tip)}`
      }
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}
