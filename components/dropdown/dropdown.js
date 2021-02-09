const select = document.querySelectorAll('.select');

select.forEach((i) => {
  const selectInput = i.querySelector('.select__input');
  const backdrop = i.querySelector('.select__backdrop');
  const dropdown = i.querySelector('.select__dropdown');
  // const textField = i.querySelector('.text-field')
  const input = i.querySelector('.input');
  const setInputWidth = i.querySelector('.set-input-width');
  const hiddenSpan = setInputWidth.nextElementSibling;

  const guests = i.getAttribute('data-type') === 'guests';
  const roomsConfig = i.getAttribute('data-type') === 'rooms-config';
  const checkboxList = i.getAttribute('data-type') === 'checkbox-list';
//   const dates = i.getAttribute('data-type') === 'dates';

  const roomsConfigTemplate = `
                                <ul class="select__list">
                                    <li class="select__item">
                                        <span class="label-text">спальни</span>
                                        <div class="select__item-number">   
                                            <span class="label-text">2</span>
                                            <div class="select__item-minus"> </div>
                                            <div class="select__item-plus">+</div>
                                        </div>
                                    </li>
                                    <li class="select__item">
                                        <span class="label-text">кровати</span>
                                        <div class="select__item-number">
                                            <span class="label-text">2</span>
                                            <div class="select__item-minus"> </div>
                                            <div class="select__item-plus">+</div>
                                        </div>
                                    </li>
                                    <li class="select__item">
                                        <span class="label-text">ванные комнаты</span>
                                        <div class="select__item-number">
                                            <span class="label-text">0</span>
                                            <div class="select__item-minus"> </div>
                                            <div class="select__item-plus">+</div>
                                        </div>
                                    </li>
                                </ul>
                            `;
  const guestsTemplate = `
                            <ul class="select__list">
                                <li class="select__item">
                                    <span class="label-text">взрослые</span>
                                    <div class="select__item-number">
                                        <span class="label-text">0</span>
                                        <div class="select__item-minus"></div>
                                        <div class="select__item-plus">+</div>
                                    </div>
                                </li>
                                <li class="select__item">
                                    <span class="label-text">дети</span>
                                    <div class="select__item-number">
                                        <span class="label-text">0</span>
                                        <div class="select__item-minus"></div>
                                        <div class="select__item-plus">+</div>
                                    </div>
                                </li>
                                <li class="select__item">
                                    <span class="label-text">младенцы</span>
                                    <div class="select__item-number">
                                        <span class="label-text">0</span>
                                        <div class="select__item-minus"></div>
                                        <div class="select__item-plus">+</div>
                                    </div>
                                </li>
                            </ul>
                            <div class="select__apply-wrap">
                                <span class="select__clear">очистить</span>
                                <span class="select__apply">применить</span>
                                </div>
                            `;
  const textForms1 = ['спальня', 'спальни', 'спален'];
  const textForms2 = ['кровать', 'кровати', 'кроватей'];
  const textForms3 = ['ванная комната', 'ванные комнаты', 'ванных комнат'];
  const textForms4 = ['гость', 'гостя', 'гостей'];

  input.setAttribute('readonly', '');

  if (roomsConfig) {
    dropdown.innerHTML = roomsConfigTemplate;
    input.value = '2 спальни, 2 кровати';
    setInputWidth.style.display = 'block';
    setInputWidth.textContent = input.value;
    setTimeout(() => {
      input.style.width = `${setInputWidth.offsetWidth}px`;
      hiddenSpan.style.display = 'block';
    }, 500);
    showHidden(dropdownSum());
  } else if (guests) {
    dropdown.style.paddingBottom = '0px';
    dropdown.innerHTML = guestsTemplate;
    input.value = 'Сколько гостей';
    applyChanges();
    clearValues();
    showHidden(dropdownSum());
  } else if (checkboxList) {
    input.closest('.text-field').classList.add('border-none');
    input.classList.add('border-none-text');
    dropdown.classList.add('border-none');
  }

  // else if (dates) {
  //     textField.style.width = "150px"
  //     input.value = 'ДД.ММ.ГГГГ'
  //     dropdown.style.display = 'none'
  // }

  selectInput.addEventListener('click', () => {
    i.classList.toggle('open');
  });

  backdrop.addEventListener('click', () => {
    i.classList.remove('open');
  });

  dropdown.addEventListener('click', (event) => {
    increaseOrDecreaseSum(event);
    showHidden(dropdownSum());

    if (roomsConfig) {
      const arr = dropdown.querySelectorAll('.select__item-number');
      const num1 = arr[0].children[0].textContent;
      const num2 = arr[1].children[0].textContent;
      const num3 = arr[2].children[0].textContent;

      const array = `${num1} ${declOfNum(parseInt(num1), textForms1)}, ${num2} ${declOfNum(parseInt(num2), textForms2)}, ${num3} ${declOfNum(parseInt(num3), textForms3)}`.split(',');
      input.value = `${array[0]}, ${array[1]}`;
      setInputWidth.textContent = input.value;
      input.style.width = `${setInputWidth.offsetWidth}px`;
    } else if (guests) {
      if (dropdownSum() > 0) {
        input.value = `${dropdownSum()} ${declOfNum(dropdownSum(), textForms4)}`;
      } else {
        input.value = 'Сколько гостей';
      }
    }
  });

  function increaseOrDecreaseSum(event) {
    const e = event.target;
    if (e.matches('.select__item-minus') || e.matches('.select__item-plus')) {
      let count = e.closest('.select__item-number').querySelector('.label-text').textContent;
      if (e.matches('.select__item-minus')) {
        count = parseInt(count, 10) - 1;
        e.closest('.select__item-number').querySelector('.label-text').textContent = count;
      } else {
        count = parseInt(count) + 1;
        e.closest('.select__item-number').querySelector('.label-text').textContent = count;
      }
    }
  }

  function dropdownSum() {
    let num = 0;
    const arr = dropdown.querySelectorAll('.select__item-number');
    arr.forEach((i) => {
      num += parseInt(i.querySelector('.label-text').textContent);
    });
    return num;
  }

  function showHidden(num) {
    const arr = dropdown.querySelectorAll('.select__item-number');
    arr.forEach((i) => {
      const number = i.querySelector('.label-text');
      const minus = i.querySelector('.select__item-minus');
      parseInt(number.textContent) > 0 ? minus.style.display = 'flex' : minus.style.display = 'none';
      if (i.previousElementSibling.textContent === 'спальни'
                || i.previousElementSibling.textContent === 'кровати') {
        parseInt(number.textContent) > 1 ? minus.style.display = 'flex' : minus.style.display = 'none';
      }
    });

    if (guests) {
      const clear = dropdown.querySelector('.select__clear');
      num > 0 ? clear.style.display = 'block' : clear.style.display = 'none';
    }
  }

  function applyChanges() {
    const apply = dropdown.querySelector('.select__apply');
    apply.addEventListener('click', () => {
      if (dropdownSum() > 0) i.classList.remove('open');
    });
  }

  function clearValues() {
    const clear = dropdown.querySelector('.select__clear');
    clear.addEventListener('click', () => {
      const arr = dropdown.querySelectorAll('.select__item-number');
      arr.forEach((i) => {
        i.querySelector('.label-text').textContent = 0;
      });
    });
  }

  function declOfNum(n, textForms) {
    n %= 100;
    const n1 = n % 10;

    if (n > 10 && n < 20) return textForms[2];
    if (n1 > 1 && n1 < 5) return textForms[1];
    if (n1 == 1) return textForms[0];
    return textForms[2];
  }
});
