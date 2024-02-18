let count = 0;

function start(id) {
    count = count + 1;

    if (count > 4) {
        alert('You Cannot select more than 4 seats');
        return;
    }

    const element = document.getElementById(id);
    element.classList.remove('bg-[#F7F8F8]');
    element.classList.add('bg-[#1DD100]');
    const seatNumberElement = document.getElementById('seat-number');
    const seatNumberElementText = seatNumberElement.innerText;

    const seatNumber = parseInt(seatNumberElementText);
 
    const updatedSeatNumber = seatNumber - 1;
    
    seatNumberElement.innerText = updatedSeatNumber;

    const moneySeatElement = document.getElementById('money-seat');
    const moneySeatElementText = moneySeatElement.innerText;
    const moneySeat = parseInt(moneySeatElementText);

    const updatedMoneySeat = moneySeat + 1;

    moneySeatElement.innerText = updatedMoneySeat;

    let totalPriceElement = document.getElementById('total-price');
    let totalPrice = updatedMoneySeat * 550;

    totalPriceElement.innerText = totalPrice;

    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let liText = document.createElement('li');
    let liPrice = document.createElement('li');

    li.textContent = id;
    liText.textContent = "Economy";
    liPrice.textContent = "550";

    ul.appendChild(li);
    ul.appendChild(liText);
    ul.appendChild(liPrice);

    let selectedContainer = document.getElementById('selected-container');

    selectedContainer.appendChild(ul);

    let grandtotal = document.getElementById('grand-total');

     grandtotal.innerText = totalPrice;

    let click = document.getElementById('apply');

     click.addEventListener('click', function () {
         coupon(totalPrice);
    })

    
}

function coupon(totalPrice) {
    let total = parseFloat(totalPrice);
    console.log(total);
        let couponElement = document.getElementById('coupon-text').value;
        let grandtotal = document.getElementById('grand-total');
        if (couponElement == 'NEW15') {
            
            grandtotal.innerText = total - (total * 0.15);
    }
        else if (couponElement == 'Couple 20') {
            grandtotal.innerText = total - (total * 0.20);
    }
        else {
            alert('Wrong Coupon');
            grandtotal.innerText = totalPrice;
    }


}
